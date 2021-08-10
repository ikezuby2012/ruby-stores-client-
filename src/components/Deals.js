import React, {useEffect, useState} from 'react';
import axios from "axios";
import Whirligig from 'react-whirligig';
import {ArrowLeft, ArrowRight} from "@material-ui/icons";

import DealCard from "./DealsComponents/DealCard";
import Clock from "./DealsComponents/Clock";

const Deals = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const url = "http://localhost:5000/api/v1/stores/getPopularProducts";

        const fetchData = async () => {
            try {
                const res = await axios.get(url);
                // const json = await response.json();
                // console.log(json.data);
                setData(res.data.data.products);
            }catch(err) {
                console.log("error", err);
            }
        }

        fetchData();
    },[]);

    let whirligig;
    const next = () => whirligig.next();
    const prev = () => whirligig.prev();

    return (
        <section className={"deals"}>
            <div className="deals-box">
                <div className="deals-text">
                    <h2 className="deals-h2">
                        deals of the day
                    </h2>
                    <div className="deals-clock">
                        <Clock />
                    </div>
                </div>
                <div className="deals-card">
                    <button onClick={prev} className={"deals-heading_btn"}>
                        <ArrowLeft className={"deals-heading_icon"}/>
                    </button>
                    <Whirligig visibleSlides={4} gutter={".5px"} preventScroll={true}
                        ref={(_whirligigInstance) =>{ whirligig = _whirligigInstance}}
                        style={{padding: "1rem 0", width: "58%"}}>
                        {React.Children.toArray(
                            data.map((el, i) => (
                                <DealCard name={el.name} key={i} price={el.price}  
                                    rating={el.ratingsAverage} text={el.description} id={el._id}
                                    photo={el.imageCover}
                                />
                            ))
                        )}
                    </Whirligig>
                    <button onClick={next} className={"deals-heading_btn"}>
                        <ArrowRight className={"deals-heading_icon"}/>
                    </button>  
                </div>
            </div>
        </section>
    );
}

export default Deals;