import React, { useState, useEffect } from "react";
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = () => {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((prevSeconds) => prevSeconds + 1);
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div className="counter">
			<SecondsCounter seconds={seconds} />
		</div>
	);
};

export default Home;