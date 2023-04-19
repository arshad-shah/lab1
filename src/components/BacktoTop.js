import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import "./BackToTopButton.css";

const BacktoTopButton = ({ showButton, handleClick }) => {
	return (
		<Button
			variant="primary"
			className={`back-to-top-button ${showButton ? "" : "hide-button"}`}
			onClick={handleClick}
		>
			<FaArrowUp />
		</Button>
	);
};

export default BacktoTopButton;
