import React from "react";
import "./OperatorBtn.css";

const OperatorButton = ({ input, operator }) => {
	return (
		<>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button className="operatorBtn" onClick={() => input(operator.value)}>
				{operator.char}
			</button>
		</>
	);
};

export default OperatorButton;
