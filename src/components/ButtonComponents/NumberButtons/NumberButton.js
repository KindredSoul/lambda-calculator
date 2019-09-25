import React from "react";
import "./NumberBtn.css";

const NumberButton = ({ input, number }) => {
	{
		/* Display a button element rendering the data being passed down from the parent container on props */
	}
	if (number !== "0") {
		return (
			<button className="numberBtn" onClick={() => input(number)}>
				{number}
			</button>
		);
	} else if (number === "0") {
		return (
			<button className="numberBtn zeroBtn" onClick={() => input(number)}>
				{number}
			</button>
		);
	}
};

export default NumberButton;
