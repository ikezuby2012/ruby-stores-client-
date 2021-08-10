import React, { Component } from 'react';

//components
import Header from "../components/Header";
import Product from "../components/Product";
import Deals from "../components/Deals";
import Footer from '../components/Footer';

class home extends Component {
    render() {
        return (
            <div className={"container"}>
                <Header />
                <Product />
                <Deals />
                <Footer />
            </div>
        );
    }
}

export default home;
