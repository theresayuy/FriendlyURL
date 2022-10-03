import React, {useState, useEffect} from 'react';
import { EnterURL } from '../EnterURL';
import { getIndexOfLongURL, 
	axiosGet, axiosPost } from './utils';
import './style.css';

function Main() {
    const [state, setState] = useState({
		doc: {long: "", short: "", id: ""}, // mongodb data of current long URL
		data: [] // all mongodb data
	});
	
	useEffect(() => {	
		if (state.doc.long !== "") {
			axiosPost({
				long: state.doc.long,
				short: state.doc.short
			}); // post non-empty user inputs to the db.
		}	
		axiosGet((val) => {
			const document = (state.doc.long === "" ||
				state.data.length === val.length
			) ? {} : val[getIndexOfLongURL(state, val)]; 
			setState({
				doc: {
					long: "",
					short: (document === {}) ? state.doc.short : 
						`http://localhost:5000/${document.short}`, 
					id: (document === {}) ? state.doc.id : document["_id"].str
				},
				data: val
			});
		});
	}, [state]);

	return (
		<div className="Main">
			<div className="Unselectable-Text">
				<h1>Friendly URL</h1>
				<p className="Subtitle">Make your URLs shorter.</p>
			</div>
			<EnterURL 
				setState={(val) => {
					setState(val);
				}}
				getState={() => {
					return state;
				}}
			/>
			<p className="Short-URL">{state.doc.short}</p>
		</div>
	);
}

export default Main;