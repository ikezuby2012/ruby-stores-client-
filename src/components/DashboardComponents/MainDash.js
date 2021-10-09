import React from 'react';
import { NavLink } from "react-router-dom";

import Header from "./HeaderDash";
//icons
import {
    Store, Poll, Payment, ShoppingCart
} from "@material-ui/icons";

const MainDash = (props) => {
    return (
        <section className="dashboard">
            <div className="dashboard-container">
                <nav className="dashboard-side_bar">
                    <div className="">
                        <h2 style={{ marginTop: "25px" }}
                            className="header-icon_txt">
                            ruby-stores
                        </h2>
                    </div>


                    <ul className="dashboard-sideNav">
                        <li className="dashboard-sideNav-item dashboard-sideNav-item--active">
                            <NavLink className="dashboard-sideNav-link" activeClassName="" to="/dashboard">
                                <span><Store className="dashboard-sideNav-logo"/></span>
                                <span>dashboard</span>
                            </NavLink>
                        </li>

                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" to="/cart">
                                <span><ShoppingCart className="dashboard-sideNav-logo"/></span>
                                <span>my cart</span>
                            </NavLink>
                        </li>

                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" to="/reviews">
                                <span><Poll className="dashboard-sideNav-logo"/></span>
                                <span>my reviews</span>
                            </NavLink>
                        </li>

                        <li className="dashboard-sideNav-item">
                            <NavLink className="dashboard-sideNav-link" to="/billing">
                                <span><Payment className="dashboard-sideNav-logo"/></span>
                                <span>billing</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <div className="dashboard-content">
                    {/* header component */}
                    <Header username={props.username}/>
                    <>
                        {props.children}
                    </>
                </div>
            </div>
        </section>
    );
}

export default MainDash;
