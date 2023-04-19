import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Features from "./sections/Features";
import Landing from "./sections/Landing";
import PrayerTime from "./sections/PrayerTime";
import FeatureCarousel from "./sections/FeatureCarousel";
import BacktoTopButton from "./components/BacktoTop";

function App() {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 300) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="App">
			<Header />
			<Landing />
			<PrayerTime />
			<Features />
			<FeatureCarousel />
			<BacktoTopButton
				showButton={showButton}
				handleClick={handleClick}
			/>
			<Footer />
		</div>
	);
}

export default App;
