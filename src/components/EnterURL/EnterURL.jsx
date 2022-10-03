import React, { useRef } from 'react';
import { handleSubmit } from './utils';
import './style.css';

function EnterURL(props) {
    const urlInputRef = useRef(null);

    return (
        <form
            className="EnterURL"
            autoComplete="off"
            spellCheck="false"
            onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(props.getState, props.setState,
                    urlInputRef.current.value.trim());
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