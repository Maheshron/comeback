import React from "react";
import "./singleCard.css";

function SingleCard({card,handleChoice,flipped}){
    function handleClick(){
        handleChoice(card);
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped":" "}>
                <img className="front" src={card.src} />
                <img 
                className="back"
                src="/img/cover.png"
                onClick={handleClick}
                />
            </div>
        </div>
    )
}