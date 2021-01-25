import React, { useState, createContext } from "react";

function rnd() {
	console.assert(
		arguments[1] >= arguments[0],
		"First arguments should be less or equal to than second argument in Rnd function"
	);
	return (
		arguments[0] + Math.floor(Math.random() * (arguments[1] - arguments[0]) + 1)
	);
}

function Get_Bar_Count() {
	console.assert(
		arguments.length === 1,
		"Incorrect signatres for Get_Bar_Count"
	);

	let Min_Width = 15;
	let Max_Bar_Count = Math.ceil(arguments[0] / Min_Width);

	console.assert(Max_Bar_Count >= 5, { Max_Bar_Count: Max_Bar_Count });

	// return rnd(5, Max_Bar_Count);
	// return 10;
	return Max_Bar_Count;
}

export const VariableContext = createContext();

export const arrayOfHeightsProvider = (props) => {
	const [arrayOfHeights, setarrayOfHeights] = useState([]);
	return (
		<VariableContext.Provider value={[arrayOfHeights, setarrayOfHeights]}>
			{props.childer}
		</VariableContext.Provider>
	);
};
