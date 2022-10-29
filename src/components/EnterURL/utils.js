import axios from "axios";

function handleSubmit(setDoc, oldLongURLRef, newLongURL) {
    const newDoc = {
        long: newLongURL,
        short: "" // will be replaced in backend
    }
    if (newLongURL !== oldLongURLRef.current) {
        axios.post("http://localhost:5000/api/urls", newDoc).then(() => {
            setDoc(newDoc);
            oldLongURLRef.current = newLongURL;
        });
    } // don't allow the same URL to be entered 2+ times in succession
    // ( but the same URL can be added 2+ times in the database )
}

export { handleSubmit };