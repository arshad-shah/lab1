import React from "react";
import { Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-light my-5">
			<Container>
				<Row className="align-items-center">
					<p className="mb-0 text-center h4">
						Copyright &copy; {currentYear} Arshad Shah
					</p>
				</Row>
				{/* add the social links component */}
				<Row className="align-items-center my-4">
					<SocialLinks />
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
