import React from "react";


const BirdsDetails = ({birds = []}) => {



    return(
    <>
    {
        birds.map((item) => (
            <div class="card" key={item.id}>
            <div class="card-img"></div>
                <div class="card-info">
                    <h1>{birds[0].en}</h1>
                <p class="text-body">
                    <li>Location: {item.loc}</li>
                    <li>Country: {item.cnt}</li>
                    <li>name: {item.sp}</li><br/>
                <audio controls>
                    <source src="" type="audio/mpeg" />
                </audio>
                </p>
                <p class="text-title">{item.type}</p>
                </div>
            </div>
        ))
    }
    </>
    )
}

{/*
<div id="xc_audio_231239_792" 
class="jp-type-single" 
data-xc-filepath="//xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC231239-Great%20Tinamou%20B%2029.mp3" 
data-xc-id="231239" data-xc-factor="">

</div>
*/}
export default BirdsDetails;