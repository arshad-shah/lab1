import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Button,
	Card,
	Spinner,
	Alert,
} from "react-bootstrap";
import { BiRefresh } from "react-icons/bi";
import moment from "moment";
import sunCal from "suncalc";

const PrayerTimes = () => {
	const [prayerTimes, setPrayerTimes] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const getUserLocation = async () => {
		try {
			setLoading(true);
			// Get user location from the browser navigator
			const position = await new Promise((resolve, reject) => {
				navigator.geolocation.getCurrentPosition(resolve, reject);
			});
			const { coords } = position;
			const { latitude, longitude } = coords;
			const date = new Date();
			const sunTimesForAngles = sunCal.getTimes(
				date,
				latitude,
				longitude
			);
			const fajrTimeForAngle = sunTimesForAngles.nauticalDawn;
			const ishaTimeForAngle = sunTimesForAngles.nauticalDusk;
			const ishaAngleValue = sunCal.getPosition(
				fajrTimeForAngle,
				latitude,
				longitude
			).altitude;
			const fajrAngleValue = sunCal.getPosition(
				ishaTimeForAngle,
				latitude,
				longitude
			).altitude;

			//convert the angles to degrees
			const fajrAngle = fajrAngleValue * (180 / Math.PI) - 3;
			const ishaAngle = ishaAngleValue * (180 / Math.PI) - 3;
			//make angles into positive numbers
			const fajrAnglePositive = Math.abs(fajrAngle);
			const ishaAnglePositive = Math.abs(ishaAngle);
			//round the angles to nearest integer
			const fajrAngleRounded = Math.round(fajrAnglePositive);
			const ishaAngleRounded = Math.round(ishaAnglePositive);
			console.log(fajrAngleRounded, ishaAngleRounded);

			const body = {
				latitude,
				longitude,
				date: date.toISOString(),
				fajrAngle: fajrAngleRounded,
				ishaAngle: ishaAngleRounded,
				method: "OTHER",
				madhab: "SHAFI",
				highLatitudeRule: "TWILIGHT_ANGLE",
				fajrAdjustment: 0,
				sunriseAdjustment: 0,
				dhuhrAdjustment: 0,
				asrAdjustment: 0,
				maghribAdjustment: 0,
				ishaAdjustment: 0,
				ishaInterval: 0,
			};
			const response = await fetch(
				"https://nimazapi.arshadshah.online/api/prayertimes/custom",
				{
					method: "POST",
					body: JSON.stringify(body),
					headers: { "Content-Type": "application/json" },
				}
			);
			const data = await response.json();
			//check if we are in a timezone with daylight savings
			const isDaylightSavings = moment().isDST();
			//if we are in a timezone with daylight savings then add or subtract an hour from the prayer times
			if (isDaylightSavings) {
				data.fajr = moment(data.fajr).add(1, "hours");
				data.sunrise = moment(data.sunrise).add(1, "hours");
				data.dhuhr = moment(data.dhuhr).add(1, "hours");
				data.asr = moment(data.asr).add(1, "hours");
				data.maghrib = moment(data.maghrib).add(1, "hours");
				data.isha = moment(data.isha).add(1, "hours");
			}
			setPrayerTimes(data);
			setLoading(false);
		} catch (err) {
			setError(err);
			setLoading(false);
		}
	};

	useEffect(() => {
		getUserLocation();
	}, []);

	const refreshPrayerTimes = () => {
		setPrayerTimes(null);
		setError(null);
		setLoading(true);
		getUserLocation();
	};

	//if the given prayer name prayertimes.currentPrayer.name then return the class name
	const checkCurrentTime = (prayerName) => {
		//create a timer that will update the current prayer every 30 minutes
		setInterval(() => {
			refreshPrayerTimes();
		}, 1800000);

		if (prayerTimes.currentPrayer.name === prayerName) {
			return "bg-success text-white";
		} else {
			return "";
		}
	};

	return (
		<Container fluid>
			<div id="times"></div>
			<Row className="justify-content-center h-100">
				<Col xs={12} md={8} className="my-3">
					<Card>
						<Card.Body>
							<Card.Title>Prayer Times</Card.Title>
							<Card.Subtitle className="d-flex align-items-center justify-content-between mb-3">
								<div>
									Your current location-based prayer times
								</div>
								<Button
									variant="primary"
									onClick={refreshPrayerTimes}
									className="ml-auto"
								>
									<BiRefresh /> Refresh
								</Button>
							</Card.Subtitle>
							{error && (
								<Alert variant="danger">{error.message}</Alert>
							)}
							{loading && (
								<div className="text-center">
									<Spinner animation="border" />
								</div>
							)}
							{prayerTimes && !loading && !error && (
								<Row>
									<Col xs={6} md={4} className="my-3">
										<Card
											className={`text-center p-3 ${checkCurrentTime(
												"FAJR"
											)}`}
										>
											<Card.Title>Fajr</Card.Title>
											<Card.Text>
												{moment(
													prayerTimes.fajr
												).format("h:mm a")}
											</Card.Text>
										</Card>
									</Col>
									<Col xs={6} md={4} className="my-3">
										<Card
											className={`text-center p-3 ${checkCurrentTime(
												"SUNRISE"
											)}`}
										>
											<Card.Title>Sunrise</Card.Title>
											<Card.Text>
												{moment(
													prayerTimes.sunrise
												).format("h:mm a")}
											</Card.Text>
										</Card>
									</Col>
									<Col xs={6} md={4} className="my-3">
										<Card
											className={`text-center p-3 ${checkCurrentTime(
												"DHUHR"
											)}`}
										>
											<Card.Title>Dhuhr</Card.Title>
											<Card.Text>
												{moment(
													prayerTimes.dhuhr
												).format("h:mm a")}
											</Card.Text>
										</Card>
									</Col>
									<Col xs={6} md={4} className="my-3">
										<Card
											className={`text-center p-3 ${checkCurrentTime(
												"ASR"
											)}`}
										>
											<Card.Title>Asr</Card.Title>
											<Card.Text>
												{moment(prayerTimes.asr).format(
													"h:mm a"
												)}
											</Card.Text>
										</Card>
									</Col>
									<Col xs={6} md={4} className="my-3">
										<Card
											className={`text-center p-3 ${checkCurrentTime(
												"MAGHRIB"
											)}`}
										>
											<Card.Title>Maghrib</Card.Title>
											<Card.Text>
												{moment(
													prayerTimes.maghrib
												).format("h:mm a")}
											</Card.Text>
										</Card>
									</Col>
									<Col xs={6} md={4} className="my-3">
										<Card
											className={`text-center p-3 ${checkCurrentTime(
												"ISHA"
											)}`}
										>
											<Card.Title>Isha</Card.Title>
											<Card.Text>
												{moment(
													prayerTimes.isha
												).format("h:mm a")}
											</Card.Text>
										</Card>
									</Col>
								</Row>
							)}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default PrayerTimes;
