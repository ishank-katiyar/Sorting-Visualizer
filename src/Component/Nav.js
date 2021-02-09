import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav() {
	return (
		<div>
			<div className="bg-dark">
				<div style={{ width: `100vh` }}>
					<div className="p-3 text-white text-uppercase font-weight-bold">
						<a href="/" className="text-decoration-none text-white">
							<span className="font-italic">Another</span> Sorting-Visualizer
						</a>
						<a
							href="https://github.com/ishank-katiyar/Sorting-Visualizer"
							className="p-3"
						>
							Github
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Nav;
