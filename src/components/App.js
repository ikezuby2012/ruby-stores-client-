import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import "../App.css";

//pages
import Home from "../pages/home";
import Login from "../pages/Login";
import signUp from "../pages/signup";
import ProductDesc from "../pages/ProductDesc";
import Dashboard from "../pages/Dashboard";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/login"} component={Login} />
                <Route exact path={"/signup"} component={signUp} />
                <Route exact path={"/productDesc/:id"} component={ProductDesc} />
                <Route exact path={"/dashboard"} component={Dashboard} />
            </BrowserRouter>
        );
    }
}

export default App;