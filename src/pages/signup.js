import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
class signUp extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            nameError: false,
            nameCheckError: false,
            nameMsg: "",
            email: "",
            emailError: false,
            password: "",
            passwordError: false,
            passwordConfirm: "",
            passwordConfirmError: false,
            loading: false,
            isDisabled: true
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
        const { nameError, emailError, passwordError, passwordConfirmError } = this.state;
        let namePattern = /^[A-Za-z]*$/g || /^[a-zA-Z][a-zA-Z\s]*$/g;
        this.setState({
            [e.target.id]: e.target.value
        });
        if (e.target.name === "name") {
            if (e.target.value !== "" && e.target.value !== null) {
                if (namePattern.test(e.target.value)) {
                    this.setState({
                        nameError: false,
                        name: e.target.value
                    });
                } else {
                    this.setState({
                        nameError: true,
                        nameMsg: "field must only contain string e.g john doe"
                    })
                }
                this.setState({
                    nameCheckError: false,
                    name: e.target.value
                });
            } else {
                this.setState({
                    nameCheckError: true,
                    nameMsg: "field is required!"
                })
            }
        }

        if (e.target.name === "email") {
            this.validateEmail(e.target.value);
        }

        if (e.target.name === "password" && e.target.name === "passwordConfirm") {
            if (e.target.value === "" || e.target.value === null) {
                this.setState({
                    passwordError: true,
                    passwordConfirm: true
                })
            } else {
                this.setState({
                    passwordError: false,
                    passwordConfirm: false,
                    password: e.target.value,
                    passwordConfirm: e.target.value
                });
            }
        }
        if (nameError === false && passwordError === false && emailError === false && passwordConfirmError === false) {
            this.setState({
                isDisabled: false
            })
        }
    }

    onSubmit = (e) => {
        const {
            name, email, password, passwordConfirm, nameError, passwordError, emailError, passwordConfirmError
        } = this.state;
        const { dispatch, history, signupUser } = this.props;
        console.log(this.props);
        e.preventDefault();
        this.setState({
            loading: true
        });
        if (nameError === false && passwordError === false && emailError === false && passwordConfirmError === false) {
            signupUser(name, email, password, passwordConfirm);
            history.push("/dashboard");
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const {
            name, email, password, passwordConfirm, nameError, nameMsg, nameCheckError,
            emailError, passwordError, passwordConfirmError, isDisabled
        } = this.state;
        const { loggedIn, } = this.props;

        if (loggedIn) {
            return <Redirect to="/dashboard" />
        }
        return (
            <main className="signup">
                <form noValidate className={"signup-form"} onSubmit={(e) => this.onSubmit(e)}>
                    <h2 className="signup-heading_text">create account</h2>
                    <div className="signup-div">
                        <div className="login-form_group">
                            <input type="text"
                                onChange={this.onChange}
                                className="login-form_input"
                                placeholder="Username" id="name"
                                name={"name"}
                                required={true} />
                            <label htmlFor="name" className="login-form_label">Full name</label>
                            {
                                nameError ? (<p className="login-warningText">
                                    {nameMsg}
                                </p>) : ""
                            }
                            {
                                nameCheckError ? (<p className="login-warningText">
                                    {nameMsg}
                                </p>) : ""
                            }
                        </div>
                        <div className="login-form_group">
                            <input type="text"
                                onChange={this.onChange}
                                className="login-form_input"
                                placeholder="email address" id="email"
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
                                placeholder="Password"
                                id="password"
                                name={"password"}
                                required={true} />
                            <label htmlFor="password" className="login-form_label">password</label>
                        </div>
                        <div className="login-form_group">
                            <input type="password"
                                onChange={this.onChange}
                                className="login-form_input"
                                placeholder="confirm Password"
                                id="passwordConfirm"
                                name="passwordConfirm"
                                required={true} />
                            <label htmlFor="passwordConfirm" className="login-form_label">confirm password</label>
                            {
                                password !== passwordConfirm && (<p className="login-warningText">
                                    both password does not match!
                                </p>)
                            }
                        </div>
                        <div className="login-form_buttons">
                            <button className={`${isDisabled && "login-disabled"} login-form_btn`} type={"submit"} disabled={isDisabled}>
                                signup
                            </button>
                        </div>
                    </div>
                    <div className="login-alt_buttons">
                        <h4 className={"login-text"}>
                            already have an account &nbsp;
                            <Link className={`login-textLink`} to={"/login"}>login</Link>
                        </h4>
                        {/* <Link className={"login-textLink"} to={"#"}>forgotten password!</Link> */}
                    </div>
                </form>
            </main>
        );
    }
}
const mapStateToProps = (state) => {
    const { loggedIn } = state.user;
    return {
        loggedIn,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signupUser: (name, email, password, passwordConfirm) =>
            dispatch(signup(name, email, password, passwordConfirm))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(signUp);
