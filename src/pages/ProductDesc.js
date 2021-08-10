import React, { Component } from 'react';
import axios from "axios";
import { Star } from "@material-ui/icons";
import {Link} from "react-router-dom";
import {Facebook, Twitter, Pinterest, LinkedIn, Reddit} from '@material-ui/icons';
// import {css, jsx} from "@emotion/react";

import HeaderTop from '../components/HeaderComponents/HeaderTop';
import CategoryProducts from "../components/productsComponents/CategoryProduct";
import Footer from '../components/Footer';

class ProductDesc extends Component {
    constructor() {
        super();

        this.state = {
            product: [],
        }
    }


    componentDidMount() {
        let { id } = this.props.match.params;
        console.log(id);
        axios.get(`http://localhost:5000/api/v1/stores/${id}`).then((res) => {
            this.setState({
                product: res.data.data.product
            })
            console.log(this.state.product);
        });
    }
    render() {
        const { product } = this.state;
        console.log(product);
        const serverBaseURI = 'http://localhost:5000';
        let star = [1, 2, 3, 4, 5];
        return (
            <div className="container">
                <HeaderTop />
                <div className="description">
                    <div className="description-img">
                        <img src={`${serverBaseURI}/images/${product.imageCover}`} alt={product.name} className={"description-photo"}/>
                    </div>
                    <div className="description-box">
                        <h1 className="description-texthd">
                            {product.name}
                        </h1>
                        <div className={"description-conStars"}>
                            <span className={"product-stars description-stars"}>
                                {star.map(el => (
                                    <Star className={`product-star--${product.ratingsAverage >= el ? "active" : "inactive"}`} />
                                ))}
                            </span>
                            <span className={"description-rating"}>&#123; customers review &#125;</span>
                        </div>
                        <div className={"description-price"}>${product.price}.00</div>
                        <p className="description-text1">
                            {product.description}
                        </p>
                        <div className="description-buttons">
                            <Link className="description-buttons-1" to={"#"}>buy</Link>
                            <Link className="description-buttons-2" to={"#"}>Add to cart</Link>
                        </div>
                        <div className="description-details">
                            <h5 className="description-category">category: {product.category}</h5>
                            <h5 className="description-social">
                                <p>share this products:</p>
                                <span>
                                    <Facebook className={"description-icon"}/>
                                </span>
                                <span>
                                    <Twitter className={"description-icon"}/>
                                </span>
                                <span>
                                    <Pinterest className={"description-icon"}/>
                                </span>
                                <span>
                                    <LinkedIn className={"description-icon"}/>
                                </span>
                                <span>
                                    <Reddit className={"description-icon"}/>
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="description-related_products">
                    <h2 className="category-text">Related Products </h2>
                    <CategoryProducts id={product.category}/>
                </div>
                <Footer />
            </div>
        );
    }
}
export default ProductDesc;