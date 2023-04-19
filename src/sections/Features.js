import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FeaturesData } from "../assets/FeaturesData";
import "./features.css";

const Features = () => {
	return (
		<section className="bg-light py-5 h-100" id="section1">
			<Container>
				<h2 className="text-center mb-5">Features</h2>
				<Row className="h-100">
					{/* create a stripped table for the features */}
					{FeaturesData.map((feature, index) => (
						<Col
							xs={12}
							sm={6}
							md={4}
							className={"feature mx-auto my-3"}
							key={index}
						>
							<h5 className="feature-title mb-3">
								{feature.title}
							</h5>
							<p className="text-muted">{feature.description}</p>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Features;
