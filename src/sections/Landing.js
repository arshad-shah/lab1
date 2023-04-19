import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import privacyPolicyLink from "../assets/legal/Privacy Policy.pdf";
import termsAndConditionsLink from "../assets/legal/Terms and Conditions.pdf";

const LandingSection = () => {
	const playstoreLink =
		"https://play.google.com/store/apps/details?id=com.arshadshah.nimaz&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";

	return (
		<section className="bg-light py-5 vh-100">
			<Container className="h-100">
				<Row className="align-items-center h-100">
					<Col xs={12} sm={6} className="text-center">
						<h1 className="mb-3 display-1">Nimaz</h1>
						<p className="mb-0 lead">
							A simple and Easy to use Islamic lifestyle Companion
							App
						</p>
						<Button
							variant="primary"
							href={playstoreLink}
							className="mt-3"
						>
							Get it on Google Play
						</Button>
						<div className="text-center m-3">
							<a href={privacyPolicyLink} className="mr-3 p-1">
								Privacy Policy
							</a>
							<a
								href={termsAndConditionsLink}
								className="ml-3 p-1"
							>
								Terms and Conditions
							</a>
						</div>
					</Col>
					<Col
						xs={12}
						sm={6}
						className="d-none d-sm-block text-center"
					>
						<img
							src={logo}
							alt="Logo"
							style={{
								width: "250px",
								borderRadius: "150px",
								overflow: "hidden",
							}}
						/>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default LandingSection;
