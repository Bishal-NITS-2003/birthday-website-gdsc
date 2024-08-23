import React from "react";

function GreetingCard(params) {
    return <>
        <div className="col-lg-3 col-sm-12 my-3 greeting-container">
            <img className="greeting-image rounded" src={params.src} alt="Birthday Greeting Card" />
            <p className="greeting-info mx-3 my-3">{params.info}</p>
            <p className="greeting-info-by mx-3 mt-3">- {params.infoBy}</p>
        </div>
    </>
}

export default GreetingCard;