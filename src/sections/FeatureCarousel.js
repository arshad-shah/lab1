import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import { FeaturesData } from "../assets/FeaturesData.js";
import "./Carousal.css";

const FeatureCarousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<>
			<div id="section2"></div>
			<h1 className="Carousal-header my-5">Gallery</h1>
			<Container className="Carousal-container">
				<Carousel
					interval={null}
					fade
					className="Carousal-feature"
					variant="dark"
					activeIndex={index}
					onSelect={handleSelect}
				>
					{FeaturesData.map((feature, i) => (
						<Carousel.Item key={i}>
							<img
								src={feature.image}
								alt={feature.alt}
								width="250px"
								height="500px"
							/>
							{/* <Carousel.Caption>
								<h3>{feature.title}</h3>
								<p>{feature.description}</p>
							</Carousel.Caption> */}
						</Carousel.Item>
					))}
				</Carousel>
			</Container>
		</>
	);
};

export default FeatureCarousel;
