import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MergeSort from "../Component/SortingAlgorithms/MergeSort";

function SecondNav(props) {
	const [arrayOfHeights, setarrayOfHeights] = useState(props.arrayOfHeights);
	const [IsSorting, setIsSorting] = useState(props.IsSorting);

	useEffect(() => {
		setIsSorting(props.IsSorting);
		setarrayOfHeights(props.arrayOfHeights);
	}, [props]);

	return (
		<div>
			<div className="text-center">
				<Button
					className="font-italic m-1"
					variant="primary"
					onClick={props.UpdatearrayOfHeights}
					style={{
						width: `70%`,
					}}
				>
					Generate New Array
				</Button>
				<br />
				<Button
					className="m-1"
					onClick={() => MergeSort(arrayOfHeights, props.UpdatearrayOfHeights)}
				>
					Merge Sort
				</Button>
				<br />
			</div>
		</div>
	);
}

export default SecondNav;
