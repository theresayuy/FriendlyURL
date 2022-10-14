import React, {useState, useEffect, useRef} from 'react';

import EnterURL from '../EnterURL';

import { axiosGet } from './utils';
import './style.css';

function Main() {
    const [doc, setDoc] = useState({
		long: "", // long URL user input
		short: "" // short URL suffix that corresponds with long
	});
	const urlDocs = useRef([]); // mongoDB documents
	
	useEffect(() => {		
		axiosGet((val) => {
			if (doc.long !== "" && urlDocs.current.length < val.length) {
				setDoc({
					long: "",
					short: `http://localhost:5000/${val[val.length - 1].short}`
				});
			} // only set the doc if user entered a long URL and the backend thinks its valid
			urlDocs.current = [" "].concat(val).slice(1);
		});
	});

	return (
		<div className="Main">
			<div className="Unselectable-Text">
				<h1>FriendlyURL</h1>
				<p className="Subtitle">Make your URLs shorter.</p>
			</div>
			<EnterURL 
				setDoc={(val) => {
					setDoc(val);
				}}
				getDoc={() => {
					return doc;
				}}
			/>
			<a className="Short-URL"
				href={doc.short}
				target="_blank"
			>
				{doc.short}
			</a>
		</div>
	);
}

export default Main;