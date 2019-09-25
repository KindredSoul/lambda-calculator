import React from "react";
import "./SpecialBtn.css";

const SpecialButton = ({ input, special }) => {
	return (
		<>
			{/* Display a button element rendering the data being passed down from the parent container on props */}
			<button className="specialBtn" onClick={() => input(special)}>
				{special}
			</button>
		</>
	);
};

export default SpecialButton;
