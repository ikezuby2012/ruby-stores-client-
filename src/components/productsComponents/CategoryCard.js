import React from 'react';
import { Star } from "@material-ui/icons";

const CategoryCard = ({name, price, image,id,ratings}) => {
    const serverBaseURI = 'http://localhost:5000';
    let star = [1, 2, 3, 4, 5];
    return (
        <>
            <div className="category-img">
                <img src={`${serverBaseURI}/images/${image}`} alt={name} className={"category-photo"}/>
            </div>
            <div className="category-box">
                <div className="category-det">
                    <span className="category-id">{id}</span>
                    <span className={"category-stars"}>
                    {star.map(el => (
                        <Star className={`product-star--${ratings >= el ? "active" : "inactive"}`} />
                    ))}
                    </span>
                </div>
                <h4 className="category-name">{name}</h4>
                <h4 className="category-price">${price}.00</h4>
            </div>
        </>
    );
}

export default CategoryCard;
