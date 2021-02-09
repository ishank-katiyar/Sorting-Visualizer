import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import { ArgumentContext } from "../Info";
import Bar from "../Component/Bar";
import { Bubblesort } from "./SortingAlgorithms/BubbleSort";
import { Heapsort } from "./SortingAlgorithms/HeapSort";
import { Insertionsort } from "./SortingAlgorithms/InsertionSort";
import { Mergesort } from "./SortingAlgorithms/MergeSort";
import { Quicksort } from "./SortingAlgorithms/QuickSort";
import { Selectionsort } from "./SortingAlgorithms/SelectionSort";

function Main() {
	const {
		minValue,
		setminValue,
		maxValue,
		setmaxValue,
		Size,
		setSize,
		componenetRef,
		array,
		update,
		IsNatural,
		setIsNatural,
		customArray,
		IsCustomArrayValid,
		reset,
		arrayColor,
		sort,
		delay,
		setdelay,
		IsSorting,
		ShandomRuffle,
	} = useContext(ArgumentContext);
	return (
		<div>
			<Container>
				<Button className="m-1" onClick={update}>
					Generate new array
				</Button>
				<Button className="m-1" onClick={ShandomRuffle}>
					Shandom Ruffle the array
				</Button>
				<br />
				<label>minvalue:</label>
				<input
					type="number"
					name="minvalue"
					value={minValue}
					onChange={(e) => {
						setminValue(Number(e.target.value));
						update();
					}}
					min={10}
					max={maxValue}
					disabled={IsSorting}
				/>
				<br />
				<label>maxvalue:</label>
				<input
					type="number"
					name="maxvalue"
					value={maxValue}
					// onChange={(e) => setmaxValue(e.target.value)}
					onChange={(e) => {
						setmaxValue(Number(e.target.value));
						update();
					}}
					min={minValue}
					max={1000}
					disabled={IsSorting}
				/>
				<br />
				<label> Size:</label>
				<input
					type="number"
					name="size"
					value={Size}
					onChange={(e) => setSize(Number(e.target.value))}
					disabled={IsSorting}
				/>
				<br />
				<label> Speed:</label>
				<input
					type="number"
					name="delay"
					value={delay}
					onChange={(e) => setdelay(Number(e.target.value))}
					disabled={IsSorting}
				/>
				<br />
				<Form.Check
					type="checkbox"
					label="use array of natural numbers"
					defaultChecked={IsNatural}
					onClick={() => {
						setIsNatural((IsNatural) => !IsNatural);
						update();
					}}
					disabled={IsSorting}
				/>
				<br />
				<label> Custom Array: </label>
				<input
					type="text"
					name="text"
					value={customArray.toString(" ")}
					onChange={(e) => IsCustomArrayValid(e.target.value)}
					disabled={IsSorting}
				/>
				<button onClick={() => IsCustomArrayValid("")} disabled={IsSorting}>
					clear
				</button>
				<br />
				<Button onClick={() => reset()} disabled={IsSorting}>
					Reset
				</Button>
				<br />
				{/* {array}
				<br />
				{array.length}
				<br /> */}
				<Button
					className="m-1"
					onClick={() => sort(Bubblesort([...array]))}
					disabled={IsSorting}
				>
					Bubble Sort
				</Button>
				<Button
					className="m-1"
					onClick={() => sort(Heapsort([...array]))}
					disabled={IsSorting}
				>
					Heap Sort
				</Button>
				<Button
					className="m-1"
					onClick={() => sort(Insertionsort([...array]))}
					disabled={IsSorting}
				>
					Insertion Sort
				</Button>
				<Button
					className="m-1"
					onClick={() => sort(Mergesort([...array]))}
					disabled={IsSorting}
				>
					Merge Sort
				</Button>
				<Button
					className="m-1"
					onClick={() => sort(Quicksort([...array]))}
					disabled={IsSorting}
				>
					Quick Sort
				</Button>
				<Button
					className="m-1"
					onClick={() => sort(Selectionsort([...array]))}
					disabled={IsSorting}
				>
					Selection Sort
				</Button>
			</Container>

			<Container>
				<Row
					ref={componenetRef}
					style={{
						transform: `rotateX(180deg)`,
						height: `${maxValue}px`,
						marginTop: `50px`,
					}}
				>
					{array.map((height, idx) => {
						return (
							<Bar
								// Width={ContainerProperty.Width / array.length}
								Width={Math.floor(
									componenetRef.current.offsetWidth / array.length
								)}
								Length={height}
								key={idx}
								index={idx + 1}
								Used={arrayColor.includes(idx + 1)}
							/>
						);
					})}
				</Row>
			</Container>
		</div>
	);
}

export default Main;

// min value[range already set], max value[range already set], array should be (1, 2, 3, ... , N), custom array[check, clearbutton], maxsize=[print], should be random between 1 and maxsize, customsize, reset button
