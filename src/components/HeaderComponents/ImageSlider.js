/** @jsx jsx */
import React, {useState, useEffect} from 'react';
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import {css, jsx} from "@emotion/react";

const ImageSlider = (props) => {
    const {images} = props;
    const [state, setState] = useState({
        index: 0
    });

    const slideRight = () => {
      setState({
          index: ((state.index + 1) % images.length)
      })
    };
    const slideLeft = () => {
        const nextIndex = state.index -1;
        if (nextIndex < 0){
            setState({
                index: images.length - 1
            })
        }else {
            setState({
                index: nextIndex
            })
        }
    };

    useEffect(() => {
       let interval = null;

       if(props.autoplay){
           interval= setInterval(slideRight, 2000);
       }

        return () => {
            if (props.autoplay) {
                clearInterval(interval);
            }
        }
    });

    return (
        images.length > 0 && (
                <div css={css`
                    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${images[state.index]});
                    height: 90vh;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                `} className={"header-bg"}>

                    <div className="header-icons">
                        <MdChevronLeft className={"header-icons-left"} onClick={slideLeft}/>
                        <MdChevronRight className={"header-icons-right"} onClick={slideRight}/>
                    </div>

                    <div className="header_text">
                        <h1 className={"header_text-primary"}>surface studio</h1>
                        <p className={"header_text-para"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum provident
                            repellat rerum! Eaque expedita in ipsam sapiente unde vero voluptate!
                            Accusamus consectetur consequatur dignissimos laborum quos repellat, sapiente sequi voluptate!
                        </p>
                        <div className="header_text-btns">
                            <a className="header_text-button btn btn--white" href="#products">view more products</a>
                        </div>
                    </div>
                </div>
            )
    );
};

export default ImageSlider;