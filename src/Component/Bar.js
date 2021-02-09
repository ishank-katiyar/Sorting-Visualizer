import React, { useEffect, useState } from "react";
// import styled from "styled-components";

// // const color1 = "#FED54A";
// // const color2 = "#FF9347";
// const color1 = "#DB0B5F";
// const color2 = "#6F00ED";

// https://css-tricks.com/snippets/css/gradient-text/
// https://uicolorpicker.com/gradients
// const Div = styled.div`
//     background: -webkit-linear-gradient(${color1}, ${color2});
// `;

// -webkit-background-clip: text;
// -webkit-text-fill-color: transparent;

const Style = {
	margin: "3px",
	fontSize: "10px",
	transform: `rotate(0deg)`,
};

function Bar(props) {
	const [Length, setLength] = useState(0);
	const [Width, setWidth] = useState(0);
	const [Color, setColor] = useState("#F4BE2C");
	const [Used, setUsed] = useState(false);

	useEffect(() => {
		setLength(props.Length);
		setWidth(props.Width);
		setUsed(props.Used);
		if (Used) {
			setColor(`#DE4839`);
		} else {
			setColor(`#F4BE2C`);
		}
	}, [props, Used]);

	return (
		<div>
			<div
				className="rounded"
				style={{
					...Style,
					width: `${Width - 6}px`,
					height: `${Length}px`,
					backgroundColor: `${Color}`,
					// transition: `all ${Length / 1000}s ease-in-out`,
				}}
				onClick={() => {
					console.log(Length, props.index);
				}}
			></div>
		</div>
	);
}

export default Bar;
