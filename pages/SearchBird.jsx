import React from "react";
import BirdsDetails from "../components/BirdsDetails";
import { useEffect, useState } from "react";

const SearchBird = () => {

    const limit = 10;
    const urlbird = "www.xeno-canto.org/";
    const [birds, setBirds] = useState();

    const bird_url = "https://xeno-canto.org/api/2/recordings?query=cnt:brazil"
    const Api_Bird = () => 
    {
        fetch(bird_url)
        .then(response => response.json())
        .then(data => setBirds(data.recordings))
        //.then.data({recordings: data.slice(0, limit)})
        //.then.resp(recordings => data.slice(0, limit))
        //console.log(data)
        .catch(error => console.log(error))
    }


    useEffect(() => {
        console.log(Api_Bird(bird_url));
    }, [])

    return(
        <div>
            <BirdsDetails birds={birds} />
        </div>
    )
}

export default SearchBird;