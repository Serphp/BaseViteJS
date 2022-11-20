import axios from "axios";
import { useState, useEffect } from "react";

const Test = () => {

    {/* TEST AXIOS */}
function date() {
    const [fetchedData, setFetchedData] = useState([]);
    useEffect(() => {
        const getData = async () => {
        const data = await axios.get(
            "https://xeno-canto.org/api/2/recordings?query=cnt:spain"
        );
        setFetchedData(data);
        };
        getData();
    }, []);  
}


//const { dataa } = fetchedData;
//console.log("data: ", fetchedData);

    return(<h1> Test </h1>)
}

export default Test;