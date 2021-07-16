import React, { Component } from 'react';
import axios from "axios";
// import {css, jsx} from "@emotion/react";


import HeaderTop from '../components/HeaderComponents/HeaderTop';

class ProductDesc extends Component {
    constructor() {
        super();

        this.state = {
            product: [],    
        }
    }


    componentDidMount() {
        let {id} = this.props.match.params;
        console.log(id);
        axios.get(`http://localhost:5000/api/v1/stores/${id}`).then((res) => {
            this.setState({
                product: res.data.data.product
            })
            console.log(this.state.product);
        });
    }
    render() {
        const {product} = this.state;
        return (
            <div className="description">
                <HeaderTop />
                <div className="description-top">
                    <div className="description-img">
                        <img src=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDesc;