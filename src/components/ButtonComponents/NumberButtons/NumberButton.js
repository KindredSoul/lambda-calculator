import React from "react";
import "./NumberBtn.css";

const NumberButton = props => {
	{
		/* Display a button element rendering the data being passed down from the parent container on props */
	}
	if (props.number !== "0") {
		return <button className="numberBtn">{props.number}</button>;
	} else if (props.number == "0") {
		return <button className="numberBtn zeroBtn">{props.number}</button>;
	}
};

export default NumberButton;
