import React, { useState, useCallback, createContext, useRef } from "react";
import { useEffect } from "react";
import timeoutCollection from "time-events-manager";

function rnd(A, B) {
	return A + Math.floor(Math.random() * (B - A) + 1);
}

function randomArray(ArraySize, MaxHeight) {
	const array = [];
	for (let i = 0; i < ArraySize; i++) {
		array.push(rnd(10, MaxHeight));
	}
	return array;
}

function arraySize(Width) {
	const MinWidth = 15;
	const MaxBarCount = Math.ceil(Width / MinWidth);

	console.assert(MaxBarCount >= 5, { Max_Bar_Count: MaxBarCount });

	// return rnd(5, Max_Bar_Count);
	// return 10;
	return MaxBarCount;
}

export const ArgumentContext = createContext();

export const ArgumentProvider = (props) => {
	const [arrayOfHeights, setarrayOfHeights] = useState([]);
	const [ContainerProperty, setContainerProperty] = useState({
		Height: window.innerHeight - 240,
		Widht: window.innerWidth,
	});
	const [IsSorting, setIsSorting] = useState(false);
	const componenetRef = useRef(null);

	const updatearrayOfHeights = useCallback(
		(...parameter) => {
			if (parameter.length === 1 && Array.isArray(parameter[0])) {
				setarrayOfHeights(parameter[0]);
				return;
			}
			timeoutCollection.timeoutCollection.removeAll();
			setIsSorting(false);
			setarrayOfHeights(
				randomArray(
					arraySize(componenetRef.current.offsetWidth),
					ContainerProperty.Height
				)
			);
		},
		[ContainerProperty]
	);

	useEffect(() => {
		// console.log("above");
		updatearrayOfHeights();

		const handleResize = () => {
			// console.log("asdf");
			updatearrayOfHeights([]);
			clearTimeout(window.resizeTimeout);
			window.resizeTimeout = setTimeout(() => {
				// console.log("inside setitmeout");
				setContainerProperty({
					Height: window.innerHeight - 240,
					Width: window.innerWidth,
				});
			}, 100);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [updatearrayOfHeights, setContainerProperty]);

	const value = {
		arrayOfHeights,
		setarrayOfHeights,
		updatearrayOfHeights,
		ContainerProperty,
		setContainerProperty,
		IsSorting,
		setIsSorting,
		componenetRef,
	};

	return (
		<ArgumentContext.Provider value={value}>
			{props.children}
		</ArgumentContext.Provider>
	);
};
