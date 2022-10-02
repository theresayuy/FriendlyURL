import React, { useState, useEffect } from "react";
import { EnterURL } from "./components/EnterURL";
import './App.css';

function App() {
	const [urlInfo, setURLInfo] = useState({
		long: "",
		short: ""
	});
	const [data, setData] = useState([]);
	
	useEffect(() => {
		setURLInfo({
			long: urlInfo.long,
			short: urlInfo.short
		});
	}, [urlInfo]);

	return (
		<div className="App">
			<div className="Unselectable-Text">
				<h1>FriendlyURL</h1>
				<p className="Subtitle">Make your URLs shorter.</p>
			</div>
			<EnterURL 
				setURLInfo={(val) => {
					setURLInfo(val);
				}}
			/>
			<p className="Short-URL">{urlInfo.short}</p>
		</div>
	);
}

export default App;
