import React from "react";


const Anime = ({id, title, pictureUrl}) => {
    return (
        <div>
            <div>
                <img src= {pictureUrl} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    )
        
    };
export default Anime
