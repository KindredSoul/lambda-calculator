import React, { useState } from "react";
import { operators } from "../../../data.js";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

export const Operators = props => {
	// STEP 2 - add the imported data to state
	const [operatorState, setOperatorState] = useState(operators);
	console.log(operatorState);
	return (
		<div>
			{/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
			{operatorState.map((operator, i) => {
				return <OperatorButton key={i} input={props.input} operator={operator} />;
			})}
		</div>
	);
};
