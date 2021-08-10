import React, { useEffect, useState } from 'react';
import axios from "axios";
import Whirligig from 'react-whirligig';

import CategoryCard from "./CategoryCard";

const CategoryProduct = ({ id }) => {
    const [products, setProducts] = useState([]);
    let Timer;
    const serverBaseURI = 'http://localhost:5000';
    let whirligig;
    const next = () => whirligig.next();
    const prev = () => whirligig.prev();

    const url = `${serverBaseURI}/api/v1/stores/category/${id}`;
    console.log(url);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                setProducts(res.data.data.products);
            } catch (err) {
                console.log("error", err);
            }
        }
        //fetchData();

        Timer = setTimeout(() => {
            fetchData();
        }, 3000);

        return () => {
            clearTimeout(Timer);
        }

    }, [products]);

    return (
        <div className={"category"}>
            <Whirligig visibleSlides={4} gutter={"1em"} preventScroll={true}
                ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
                style={{ padding: "2rem 0" }}>
                {React.Children.toArray(
                    products.map((el, i) => (
                        <CategoryCard name={el.name} price={el.price}
                            image={el.imageCover} id={id} ratings={el.ratingsAverage} />
                    ))
                )}
            </Whirligig>
        </div>
    );
}

export default CategoryProduct;