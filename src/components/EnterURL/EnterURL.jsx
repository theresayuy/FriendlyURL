import { useRef } from 'react';
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
                props.setURLInfo({
                    long: urlInputRef.current.value,
                    short: "SHORT URL"
                });
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