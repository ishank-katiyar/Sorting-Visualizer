import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mergeSort from "../Component/SortingAlgorithms/MergeSort";
import { ArgumentContext } from "../Variable";

function SecondNav() {
	const { arrayOfHeights, updatearrayOfHeights } = useContext(ArgumentContext);

	return (
		<div>
			<div className="text-center">
				<Button
					className="font-italic m-1"
					variant="primary"
					onClick={updatearrayOfHeights}
					style={{
						width: `70%`,
					}}
				>
					Generate New Array
				</Button>
				<br />
				<Button
					className="m-1"
					onClick={() => mergeSort(arrayOfHeights, updatearrayOfHeights)}
				>
					Merge Sort
				</Button>
				<br />
			</div>
		</div>
	);
}

export default SecondNav;
