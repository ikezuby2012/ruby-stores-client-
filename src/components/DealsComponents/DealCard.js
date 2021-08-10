/** @jsx jsx */
import React from 'react';
import {Star} from "@material-ui/icons";
import {css, jsx} from "@emotion/react";

const handleClick = (li) => {
    window.location.href = `/productDesc/${li}`;
}

const DealCard = ({name, price, rating, text, id, photo}) => {
    const serverBaseURI = 'http://localhost:5000';
    let star = [1,2 ,3,4,5];
    return (
        <div className={"product-card"} onClick={(li) => handleClick(id)}>
                <div css={css`
                    background-image: url(${serverBaseURI}/images/${photo});
                    background-size: cover;
                    background-position: center;
                    height: 13rem;
                    width: 15rem;
                `}/>
                <h2 className={"product-card-h2"}>{name}</h2>
                <p className={"product-card-p"}>
                    {/* 4gb RAM, SSD, 11 generation getvidia, windows 10 and long-lasting battery */}
                    {text}
                </p>
                <div className={"product-card-cont"}>
                    <span className={"product-stars"}>
                    {star.map(el => (
                        <Star className={`product-star--${rating >= el ? "active" : "inactive"}`}/>
                    ))}
                    </span>
                    <span className={"product-card-money"}>${price}</span>
                </div>
            </div>
    );
}

export default DealCard;
