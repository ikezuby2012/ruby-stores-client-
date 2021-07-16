import React, {Component} from 'react';

// import Slider from "./HeaderComponents/Slider";
import ImageSlider from "./HeaderComponents/ImageSlider";

//photos
import photo1 from "../utils/img/tour-1-1.jpg";
import photo2 from "../utils/img/tour-1-2.jpg";
import photo3 from "../utils/img/tour-1-3.jpg";
import photo4 from "../utils/img/tour-1-cover.jpg";

import HeaderTop from './HeaderComponents/HeaderTop';

class Header extends Component {
    constructor() {
        super();
        this.state= {
            images: [
                photo1, photo2, photo3, photo4
            ]
        }
    }
    render() {
        const {images} = this.state;
        return (
            <header className={"header"}>
                <HeaderTop />
                <ImageSlider images={images}/>
            </header>
        );
    }
}

export default Header;