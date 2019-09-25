import React from "react";
import "./OperatorBtn.css";

const OperatorButton = props => {
	return (
		<>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button className="operatorBtn">{props.operator.value}</button>
		</>
	);
};

export default OperatorButton;
