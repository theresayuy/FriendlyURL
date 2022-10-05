import axios from "axios";

function handleSubmit(getDoc, setDoc, newLongURL) {
    const newDoc = {
        long: newLongURL,
        short: "" // will be replaced in backend
    }
    if (newLongURL !== getDoc().long) {
        axios.post("http://localhost:5000/api/urls", newDoc).then(() => {
            setDoc(newDoc);
        });
    } // don't allow the same URL to be entered more than once in succession
    // ( but the same URL can be added more than once in the database )
}

export { handleSubmit };