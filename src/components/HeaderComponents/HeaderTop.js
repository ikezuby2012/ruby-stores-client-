import React from "react";
import {Link} from "react-router-dom";

//icons
import {Search} from "@material-ui/icons";

const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="header-icon">
                <h2 className="header-icon_txt">
                    ruby-stores
                </h2>
            <div className="header-behanze">&nbsp;</div>
                </div>
                    <form action="#" className={"header-form"}>
                        <input type="search" className={"header-form_input"} placeholder={"search products & brands"}/>
                        <button className={"header-form_button"}>
                            <Search className={"header-form_icon"}/>
                        </button>
                    </form>
                    <nav className="header-nav">
                        <div className="header-nav_div">
                            <Link to={"#"} className="header-nav-text">Download App</Link>
                        </div>
                        <div className="header-nav_div">
                            <h4 className="header-nav-box">
                                <Link to={"/signup"} className="header-nav-text">sign up</Link>
                                <span style={{fontSize: '19px'}}> | </span>
                                <Link to={"/login"} className="header-nav-text">login </Link>
                            </h4>
                        </div>
                    </nav>
                </div>
    );
}

export default HeaderTop;
