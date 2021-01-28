import React, { useContext } from "react";
import { Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Bar from "./Component/Bar";
import SecondNav from "./Component/SecondNav";
import Nav from "./Component/Nav";
import { ArgumentContext } from "./Variable";

function SortingVisualizer() {
	const { arrayOfHeights, ContainerProperty, componenetRef } = useContext(
		ArgumentContext
	);

	return (
		<div>
			<div>
				<Nav />
				<SecondNav />
			</div>
			<Container style={{ position: "relative" }}>
				<Row
					ref={componenetRef}
					style={{
						transform: `rotateX(180deg)`,
						height: `${ContainerProperty.Height}px`,
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
