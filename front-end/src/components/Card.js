import React, {useState} from 'react';
import '../styles/Card.css';
import '../styles/jackieandtimmy.jpg'


function Card({title,imageURL,body}){
    return(
        <div className="card">
            <div className="image_container">
                <img src={imageURL}></img>
            </div>
            <div className="card_content">
            <div className="card_title">
                <h3>{title}</h3>
            </div>
            <div className="card_body">
                <p>{body}</p>
            </div>
            </div>
        </div>
    );
}

export default Card;