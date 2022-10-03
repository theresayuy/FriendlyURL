import axios from "axios";

function getIndexOfLongURL(state, newData) {
    let index = newData.length - 1;
    const ID = state.doc.id;

    // check if an entry with the same ID exists
    if (ID !== "") {
        for (let i = 0; i < newData.length; i++) {
            index = (
                ID === newData[i]["_id"].str 
            ) ? i : index;
        }
    }

    return index;
}

function axiosGet(setData) {
    axios.get("http://localhost:5000/api/urls", 
        {responseType: "json"}).then((res) => {
        if ( res.data !== undefined && res.data !== null ) {
            setData(res.data); // error here
        } else {
            console.log("No data");
        }
    });
}

function axiosPost(newDocument) {
    axios.post("http://localhost:5000/api/urls", newDocument);
}

export {
    getIndexOfLongURL, 
    axiosGet, axiosPost
}