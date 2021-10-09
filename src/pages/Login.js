import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { login } from "../actions/auth";

//icon
import WarningIcon from '@material-ui/icons/Warning';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: "",
            loading: false,
            emailError: false,
            passwordError: false,
            emailErrMsg: "",
            passErrMsg: "",
            isDisabled: true,
            loginError: false,
        }
    }

    validateEmail = (email) => {
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(email);
        if (result === true) {
            this.setState({
                emailError: false,
                email
            })
        } else {
            this.setState({
                emailError: true
            })
        }
    }

    onChange = (e) => {
        let { emailError, passwordError } = this.state;
        this.setState({
            [e.target.id]: e.target.value
        });

        if (e.target.name === 'email') {
            this.validateEmail(e.target.value);
        }
        if (e.target.name === "password") {
            if (e.target.value < 6) {
                this.setState({
                    passwordError: true,
                    passErrMsg: "password too short"
                })
            } else {
                this.setState({
                    passwordError: false
                })
            }
        }
        if (emailError === false && passwordError === false) {
            this.setState({
                isDisabled: false
            });
        }
    }

    onSubmit = (e) => {
        const { email, password, emailError, passwordError } = this.state;
        const { dispatch, history, loginUser } = this.props;
        e.preventDefault();
        this.setState({
            loading: true
        })
        if (emailError === false && passwordError === false) {

            loginUser(email, password);
            //history.push("/dashboard");
            this.setState({
                loading: true
            });

        } else {
            this.setState({
                // loading: true,
            })
        }
    }
    render() {
        const { 
            email, password, emailError, passwordError, passErrMsg, isDisabled, loading, loginError 
        } = this.state;
        const { loggedIn, } = this.props;
        console.log(loggedIn);
        setTimeout(() => {
            if (loading) {
                this.setState({
                    loading: false,
                    loginError: true,
                })
            }
        }, 1000 * 20);

        if (loggedIn) {
            return <Redirect to="/dashboard" />
        }
        return (
            <main className={"login"}>
                <form noValidate className={"login-form"} onSubmit={(e) => this.onSubmit(e)}>
                    {loading && <div className="loading-spinner" />}
                    <h2 className="login-heading_text">login</h2>
                    {loginError && <div className="warning">
                        <span ><WarningIcon className="warning-icon"/></span>
                        <h1 className="warning-text">incorrect email or password!</h1>
                    </div>
                    }
                    <div className="">
                        <div className="login-form_group">
                            <input type="text"
                                onChange={this.onChange}
                                className="login-form_input"
                                placeholder="email" id="email"
                                name={"email"}
                                required={true} />
                            <label htmlFor="email" className="login-form_label">email address</label>
                            {
                                emailError ? (<p className="login-warningText">
                                    please input a valid email address
                                </p>) : ""
                            }
                        </div>
                        <div className="login-form_group">
                            <input type="password"
                                onChange={this.onChange}
                                className="login-form_input"
                                name={"password"}
                                placeholder="Password"
                                id="password"
                                required={true} />
                            <label htmlFor="password" className="login-form_label">password</label>
                            {
                                passwordError ? (<p className="login-warningText">
                                    {passErrMsg}
                                </p>) : ""
                            }
                        </div>
                        <div className="login-form_buttons">
                            <button className={`${isDisabled && "login-disabled"} login-form_btn`} type={"submit"} disabled={isDisabled}>
                                login
                            </button>
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

const mapStateToProps = (state) => {
    const { loggedIn } = state.user;
    // const {message} = state.message;
    return {
        loggedIn,
        // message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (email, password) => dispatch(login(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);