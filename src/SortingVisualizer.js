import React, { useState, useEffect, useRef, useCallback } from "react";
import { Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import timeoutCollection from "time-events-manager";

import Bar from "./Component/Bar";
import SecondNav from "./Component/SecondNav";
import Nav from "./Component/Nav";

function SortingVisualizer() {
	const componenetRef = useRef(null);
	const [ContainerHeight, setContainerHeight] = useState(
		window.innerHeight - 240
	);
	const [IsSorting, setIsSorting] = useState(false);

	const UpdatearrayOfHeights = useCallback(
		(...parameter) => {
			if (parameter.length === 1 && Array.isArray(parameter[0])) {
				setarrayOfHeights(parameter[0]);
				return;
			}

			timeoutCollection.timeoutCollection.removeAll();
			setIsSorting(false);

			let barLength = Get_Bar_Count(componenetRef.current.offsetWidth);
			let newarrayOfHeights = [];

			for (let i = 0; i < barLength; i++) {
				newarrayOfHeights.push(rnd(10, ContainerHeight));
			}

			setarrayOfHeights(newarrayOfHeights);

			// MergeSort(newarrayOfHeights, UpdatearrayOfHeights);

			// console.log(timeoutCollection.timeoutCollection);
			// let alltimeout = timeoutCollection.timeoutCollection.getAll();
			// console.log(alltimeout[alltimeout.length - 1]);
		},
		[ContainerHeight]
	);

	useEffect(() => {
		UpdatearrayOfHeights();

		const handleResize = () => {
			setContainerHeight(() => {
				return window.innerHeight - 240;
			});

			UpdatearrayOfHeights();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [ContainerHeight, UpdatearrayOfHeights]);

	return (
		<div>
			<div>
				<Nav />
				<SecondNav
					arrayOfHeights={arrayOfHeights}
					UpdatearrayOfHeights={UpdatearrayOfHeights}
					IsSorting={IsSorting}
				/>
			</div>
			<Container style={{ position: "relative" }}>
				<Row
					ref={componenetRef}
					style={{
						transform: `rotateX(180deg)`,
						height: `${ContainerHeight}px`,
						marginTop: `50px`,
					}}
				>
					{arrayOfHeights.map((height, idx) => {
						return (
							<Bar
								Width={Math.floor(
									componenetRef.current.offsetWidth / arrayOfHeights.length
								)}
								Length={height}
								key={idx}
							/>
						);
					})}
				</Row>
			</Container>
		</div>
	);
}

export default SortingVisualizer;
