import React, { Component } from 'react';
import axios from "axios";
import Whirligig from 'react-whirligig';
import {ArrowLeft, ArrowRight} from "@material-ui/icons";

import ProductCard from "../components/productCard"; 

class featuresProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsLength: 0,
            cheapProducts: []
        }
    }

    componentDidMount() {
        // get cheap products
        axios.get("http://localhost:5000/api/v1/stores/top-five-cheap").then(res => {
            this.setState({
               cheapProducts: res.data.data.products
            })
        })
    }
    render() {
        const {cheapProducts} = this.state;
        
        let whirligig;
        const next = () => whirligig.next();
        const prev = () => whirligig.prev();

        return (
            <>
                <div className="product-heading">
                        <h2 className={"product-heading_text"}>featured products</h2>
                        <button onClick={prev} className={"product-heading_btn"}>
                            <ArrowLeft className={"product-heading_icon"}/>
                        </button>
                        <button onClick={next} className={"product-heading_btn"}>
                            <ArrowRight className={"product-heading_icon"}/>
                        </button>           
                    </div>
                    
                    <div className="product-cards">
                    {/* the slider functionalty is caused by react-whirligig */}
                        <Whirligig visibleSlides={5} gutter={"1em"} preventScroll={true}
                            ref={(_whirligigInstance) =>{ whirligig = _whirligigInstance}}
                            style={{padding: "2rem 0"}}>
                            {React.Children.toArray(
                                cheapProducts.map((el, i) => (
                                    <ProductCard id={el._id} name={el.name} key={i} price={el.price} 
                                    rating={el.ratingsAverage} text={el.description} photo={el.imageCover}
                                    />
                                ))
                            )}
                        </Whirligig>
                    </div>
            </>
        );
    }
}

export default featuresProduct;
