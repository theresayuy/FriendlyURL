import axios from "axios";

function axiosGet(setDoc) {
    axios.get(
        "http://localhost:5000/api/urls", {responseType: "json"}
    ).then((res) => {
        if (res.data !== undefined && res.data !== null ) {
            setDoc(res.data);
        } else {
            console.log("No data");
        }
    });
}

export { axiosGet }