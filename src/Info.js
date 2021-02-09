/**
 *
 * All imports
 */
import React, { useState, useCallback, createContext, useRef } from "react";
import { useEffect } from "react";
// import timeoutCollection from "time-events-manager";

/**
 *
 * @param {first integer} A
 * @param {second integer} B
 * @returns random integer between A & B
 */
function rnd(A, B) {
	return A + Math.floor(Math.random() * (B - A) + 1);
}

/**
 *
 * @param {size of the array} Size
 * @param {minimum value of the array} minValue
 * @param {maximum value of the array} maxValue
 * @returns return an random array with size 'Size' within range minvalue and maxvalue
 */
function randomArray(Size, minValue, maxValue) {
	return Array.from(Array(Size)).map((x) => rnd(minValue, maxValue));
}

/**
 *
 * @param {maxsize of the array} maxSize
 * @returns random shuffled permutation of 1, 2, 3, ... , Size
 */
function randomArrayOfNaturalNumber(Size) {
	return Array.from(Array(Size))
		.map((x, idx) => {
			return idx + 1;
		})
		.sort(() => Math.random() - 0.5);
}

/**
 *
 * @param {Width of the container containing array} Width
 * @return maximum size of the array
 */
function maxArraySize(Width) {
	const MinWidth = 15;
	const MaxBarCount = Math.floor(Width / MinWidth);

	console.assert(MaxBarCount >= 1, { Max_Bar_Count: MaxBarCount });

	// return 5;
	return MaxBarCount;
}

/**
 *
 * Created Argument Context
 */
export const ArgumentContext = createContext();

/**
 *
 * @param {Children receiving Context} props
 */
export const ArgumentProvider = (props) => {
	const defaultMinValue = 10;
	const defaultMaxValue = 400;
	const [array, setarray] = useState([]);
	const [arrayColor, setarrayColor] = useState([]);
	const [ContainerProperty, setContainerProperty] = useState({
		Height: window.innerHeight,
		Width: window.innerWidth,
	});
	const [minValue, setminValue] = useState(defaultMinValue);
	const [maxValue, setmaxValue] = useState(defaultMaxValue);
	const [customArray, setcustomArray] = useState("");
	const [Size, setSize] = useState(0);
	const [IsSorting, setIsSorting] = useState(false);
	const [IsNatural, setIsNatural] = useState(false);
	const [delay, setdelay] = useState(1);
	const sortingTimeoutArray = useRef([]);
	const componenetRef = useRef(null);
	const resizeTimeout = useRef(null);

	const clearAllTimeout = useCallback(() => {
		// console.log("called clear timeout");
		for (const currentTimeout of sortingTimeoutArray.current) {
			// console.log("current timeout", currentTimeout);
			clearTimeout(currentTimeout);
		}
		sortingTimeoutArray.current = [];
	}, []);

	const update = useCallback(
		(...parameter) => {
			// console.log("calling update ", parameter, parameter.length);
			if (
				parameter.length === 2 &&
				Array.isArray(parameter[0]) &&
				Array.isArray(parameter[1])
			) {
				setarray(parameter[0]);
				setarrayColor(parameter[1]);
				return;
			} else if (parameter.length === 1 && Array.isArray(parameter[0])) {
				setarray(parameter[0]);
				setIsSorting(false);
				setarrayColor([]);
				setdelay((1000 / parameter[0].length).toFixed(2));
				clearAllTimeout();
				return;
			}
			clearAllTimeout();
			setarrayColor([]);
			setIsSorting(false);
			if (IsNatural) {
				setarray(
					randomArrayOfNaturalNumber(Size).map((el) => (maxValue / Size) * el)
				);
			} else {
				setarray(randomArray(Size, minValue, maxValue));
			}
			setdelay((1000 / array.length).toFixed(2));
		},
		[Size, minValue, maxValue, IsNatural, clearAllTimeout, array.length]
	);

	useEffect(() => {
		// setSize(maxArraySize(ContainerProperty.Width));
		setSize(maxArraySize(componenetRef.current.offsetWidth));
	}, [ContainerProperty]);

	useEffect(() => {
		// console.log("above");
		update();

		const handleResize = () => {
			// console.log("asdf");
			update([]);
			setdelay(0);
			clearTimeout(resizeTimeout.current);
			resizeTimeout.current = setTimeout(() => {
				// console.log("inside setitmeout");
				setContainerProperty({
					Height: window.innerHeight,
					Width: window.innerWidth,
				});
			}, 100);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [setContainerProperty, ContainerProperty, update]);

	const IsCustomArrayValid = (CusArrayString) => {
		setcustomArray(() => CusArrayString);
		// console.log(CusArrayString);
		const Arr = CusArrayString.split(" ");
		// console.log(Arr);
		if (Array.isArray(Arr) === false) {
			return false;
		}
		if (Arr.length === 0) {
			return false;
		}
		for (const el of Arr) {
			if (el === undefined) {
				update();
				return "no ok";
			}
			if (isNaN(Number(el))) {
				update();
				return "no ok";
			}
			if (Number(el) < minValue || Number(el) > maxValue) {
				update();
				return "no ok";
			}
		}

		// if (Arr.length > maxArraySize(componenetRef.current.offsetWidth)) {
		// 	update();
		// 	return "no ok";
		// }
		// console.log(customArray, CusArrayString);
		setarray(Arr.map((el) => Number(el)));
		return "ok";
	};

	const ValidCustomArray = () => {
		return customArray.split(" ").map((el) => Number(el)) === array
			? "Valid"
			: "Not Valid";
	};

	const reset = () => {
		setminValue(defaultMinValue);
		setmaxValue(defaultMaxValue);
		setSize(maxArraySize(componenetRef.current.offsetWidth));
		setdelay((1000 / array.length).toFixed(2));
		setIsNatural(false);
		IsCustomArrayValid("");
		setIsSorting(false);
	};

	const sort = (sortingArray) => {
		clearAllTimeout();
		for (let i = 0; i < sortingArray.length; i++) {
			if (i === 0) {
				setIsSorting(true);
			}
			sortingTimeoutArray.current.push(
				setTimeout(() => {
					update(sortingArray[i][0], sortingArray[i][1]);
					if (i === sortingArray.length - 1) {
						setIsSorting(false);
					}
				}, delay * i)
			);
		}
	};

	const ShandomRuffle = () => {
		// https://bost.ocks.org/mike/shuffle/
		let copy = [],
			n = array.length,
			i;
		while (n) {
			i = Math.floor(Math.random() * array.length);

			if (i in array) {
				copy.push(array[i]);

				delete array[i];

				n--;
			}
		}

		update(copy);
	};

	const value = {
		minValue,
		setminValue,
		maxValue,
		setmaxValue,
		Size,
		setSize,
		componenetRef,
		ContainerProperty,
		array,
		update,
		IsNatural,
		setIsNatural,
		customArray,
		IsCustomArrayValid,
		ValidCustomArray,
		reset,
		arrayColor,
		sort,
		delay,
		setdelay,
		IsSorting,
		ShandomRuffle,
	};

	return (
		<ArgumentContext.Provider value={value}>
			{props.children}
		</ArgumentContext.Provider>
	);
};
