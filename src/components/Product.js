import React, { Component } from 'react';
import axios from "axios";
import Whirligig from 'react-whirligig';
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

import ProductCard from "./productsComponents/productCard";
import FeaturedProducts from "./productsComponents/featuresProduct";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popularProducts: [],
            productsLength: 0,
            cheapProducts: []
        }
    }
    componentDidMount() {
        //get popular products
        axios.get(`http://localhost:5000/api/v1/stores/getPopularProducts`).then(res => {
            this.setState({
                popularProducts: res.data.data.products,
                productsLength: res.data.results
            })
        });
    }

    render() {
        const { popularProducts, } = this.state;
        console.log(popularProducts);

        let whirligig;
        const next = () => whirligig.next();
        const prev = () => whirligig.prev();

        return (
            <section className={"products"} id={"products"}>
                <div className="">
                    {/* popular products */}
                    <div className="product-heading">
                        <h2 className={"product-heading_text"}>popular products</h2>
                        <button onClick={prev} className={"product-heading_btn"}>
                            <ArrowLeft className={"product-heading_icon"} />
                        </button>
                        <button onClick={next} className={"product-heading_btn"}>
                            <ArrowRight className={"product-heading_icon"} />
                        </button>
                    </div>

                    <div className="product-cards">
                        {/* the slider functionalty is caused by react-whirligig */}
                        <Whirligig visibleSlides={5} gutter={"1em"} preventScroll={true}
                            ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
                            style={{ padding: "2rem 0" }}>
                            {React.Children.toArray(
                                popularProducts.map((el, i) => (
                                    <ProductCard name={el.name} key={i} price={el.price}
                                        rating={el.ratingsAverage} text={el.description} id={el._id}
                                        photo={el.imageCover}
                                    />
                                ))
                            )}
                        </Whirligig>
                    </div>
                </div>

                <div className="">
                    {/* featured products */}
                    <FeaturedProducts />
                </div>
            </section>
        );
    }
}

export default Product;