import React from "react";
import { FaGithub, FaLinkedin, FaHackerrank, FaEnvelope } from "react-icons/fa";
import "./SocialLinks.css";

const SocialLinks = () => {
	return (
		<div className="social-links">
			<a
				href="https://github.com/arshad-shah"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaGithub className="social-icon" />
			</a>
			<a
				href="https://www.linkedin.com/in/arshadshah"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaLinkedin className="social-icon" />
			</a>
			<a
				href="https://www.hackerrank.com/shaharshad57"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaHackerrank className="social-icon" />
			</a>
			<a href="mailto:info@arshadshah.com">
				<FaEnvelope className="social-icon" />
			</a>
		</div>
	);
};

export default SocialLinks;
