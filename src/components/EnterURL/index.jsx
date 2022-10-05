import React, { useRef } from 'react';

import { handleSubmit } from './utils';
import './style.css';

function EnterURL(props) {
    const urlInputRef = useRef(null);
    const longURLRef = useRef(props.getDoc().long);

    return (
        <form
            className="EnterURL"
            autoComplete="off"
            spellCheck="false"
            onSubmit={(event) => {
                const newLongURL = urlInputRef.current.value.trim();
                event.preventDefault();
                if (newLongURL !== longURLRef.current) {
                    handleSubmit(props.getDoc, props.setDoc,
                        newLongURL);
                    longURLRef.current = (" ").concat(newLongURL).slice(1);
                } // prevent same URL from being entered 2+ times in succession
            }}
        >
            <div className="FormInput">
                <input
                    className="EnterURL-TextInput"
                    type="text"
                    placeholder="Enter a long URL here"
                    ref={urlInputRef}
                />
            </div>
            <div className="FormInput">
                <input
                    className="EnterURL-Submit"
                    type="submit"
                />
            </div>
        </form>
    );
}

export default EnterURL;