import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Login extends Component {
    constructor() {
        super();
        
        this.state = {
            userName: "",
            password: ""
        }

    }
    render() {
        return (
            <main className={"login"}>
                <form noValidate className={"login-form"}>
                    <h2 className="login-heading_text">login</h2>
                    <div className="">
                        <div className="login-form_group">
                            <input type="text"
                                // onChange={}
                                className="login-form_input"
                                placeholder="email" id="email"
                                // value={name}
                                // error={errors.name}
                                required={true}/>
                            <label htmlFor="name" className="login-form_label">email address</label>
                        </div>
                        <div className="login-form_group">
                            <input type="password"
                                // onChange={this.onChange}
                                className="login-form_input"
                                // value={password}
                                placeholder="Password"
                                // error={errors.password}
                                id="password"
                                required={true}/>
                                <label htmlFor="password" className="login-form_label">password</label>
                        </div>
                        <div className="login-form_buttons">
                            <button className="login-form_btn" type={"submit"}>login</button>
                        </div>
                    </div>
                    <div className="login-alt_buttons">
                            <h4 className={"login-text"}>
                                don't have an account &nbsp;
                                <Link className={"login-textLink"} to={"/signup"}>sign up</Link>
                            </h4>
                            <Link className={"login-textLink"} to={"#"}>forgotten password!</Link>
                    </div>
                </form>
            </main>
        );
    }
}

export default Login;