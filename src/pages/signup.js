import React, { Component } from 'react';
import {Link} from "react-router-dom";
class signUp extends Component {
    render() {
        return (
            <main className="signup">
                <form noValidate className={"signup-form"}>
                    <h2 className="signup-heading_text">create account</h2>
                    <div className="signup-div">
                        <div className="login-form_group">
                            <input type="text"
                                // onChange={}
                                className="login-form_input"
                                placeholder="User name" id="name"
                                // value={name}
                                // error={errors.name}
                                required={true}/>
                            <label htmlFor="name" className="login-form_label">User name</label>
                        </div>
                        <div className="login-form_group">
                            <input type="text"
                                // onChange={}
                                className="login-form_input"
                                placeholder="email address" id="email"
                                // value={name}
                                // error={errors.name}
                                required={true}/>
                            <label htmlFor="email" className="login-form_label">email address</label>
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
                        <div className="login-form_group">
                            <input type="password"
                                // onChange={this.onChange}
                                className="login-form_input"
                                // value={password}
                                placeholder="confirm Password"
                                // error={errors.password}
                                id="passwordConfirm"
                                required={true}/>
                                <label htmlFor="passwordConfirm" className="login-form_label">confirm password</label>
                        </div>
                        <div className="login-form_buttons">
                            <button className="login-form_btn" type={"submit"}>signup</button>
                        </div>
                    </div>
                    <div className="login-alt_buttons">
                            {/* <h4 className={"login-text"}>
                                don't have an account &nbsp;
                                <Link className={"login-textLink"} to={"/signup"}>sign up</Link>
                            </h4>
                            <Link className={"login-textLink"} to={"#"}>forgotten password!</Link> */}
                    </div>
                </form>
            </main>
        );
    }
}

export default signUp;
