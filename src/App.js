import React, { useState, useEffect } from "react";
import "./App.css";
import { words, colors, backgrounds } from "./words";
import TextTransition, { presets } from "react-text-transition";

function App() {
	const [index, setIndex] = useState(0);
	// const [color, setColor] = useState("black");
	// useEffect(() => {

	// }, []);
	useEffect(() => {
		// const colorToApply = () => colors[Math.floor(Math.random() * colors.length)];
		// setColor(colorToApply());
		const intervalId = setInterval(() => setIndex((index) => index + 1), 500);
		return () => clearTimeout(intervalId);
	}, []);
	const backgroundToApply = backgrounds[Math.floor(Math.random() * backgrounds.length)];
	const colorToApply = () => colors[Math.floor(Math.random() * colors.length)];

	return (
		<div
			style={{
				background: `#${backgroundToApply}`,
				height: "100vh",
				width: "100vw",
				alignItems: "center",
				display: "flex",
				justifyContent: "center",
			}}>
			<h1>
				Sruthi is{" "}
				<span style={{ display: "inline", color: `#${colorToApply()}` }}>
					<TextTransition
						text={words[index % words.length]}
						springConfig={presets.wobbly}
						style={{ display: "inline" }}
					/>
				</span>
			</h1>
		</div>
	);
}

export default App;
