"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const Routes_1 = require("./Routes");
const Auth_1 = require("../services/Auth");
let authStyle = require('../styles/auth.styl');
let authService = new Auth_1.default();
class SignIn extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            initialLoad: true,
            error: null
        };
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ errors: null, initialLoad: false });
        authService.signIn(this.refs.username.value, this.refs.password.value).then(response => {
            if (!response.is_error) {
                this.props.history.push(Routes_1.RoutePaths.Contacts);
            }
            else {
                this.setState({ error: response.error_content.error_description });
            }
        });
    }
    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        let initialLoadContent = null;
        if (this.state.initialLoad) {
            if (params.get('confirmed')) {
                initialLoadContent = React.createElement("div", { className: "alert alert-success", role: "alert" }, "Your email address has been successfully confirmed.");
            }
            if (params.get('expired')) {
                initialLoadContent = React.createElement("div", { className: "alert alert-info", role: "alert" },
                    React.createElement("strong", null, "Sesion Expired"),
                    " You need to sign in again.");
            }
            if (this.props.history.location.state && this.props.history.location.state.signedOut) {
                initialLoadContent = React.createElement("div", { className: "alert alert-info", role: "alert" },
                    React.createElement("strong", null, "Signed Out"));
            }
        }
        return React.createElement("div", { className: authStyle.auth },
            React.createElement("form", { className: authStyle.formAuth, onSubmit: (e) => this.handleSubmit(e) },
                React.createElement("h2", { className: authStyle.formAuthHeading }, "Please sign in"),
                initialLoadContent,
                this.state.error &&
                    React.createElement("div", { className: "alert alert-danger", role: "alert" }, this.state.error),
                React.createElement("label", { htmlFor: "inputEmail", className: "form-control-label sr-only" }, "Email address"),
                React.createElement("input", { type: "email", id: "inputEmail", ref: "username", defaultValue: "user@test.com", className: "form-control form-control-danger", placeholder: "Email address" }),
                React.createElement("label", { htmlFor: "inputPassword", className: "form-control-label sr-only" }, "Password"),
                React.createElement("input", { type: "password", id: "inputPassword", ref: "password", defaultValue: "P2ssw0rd!", className: "form-control", placeholder: "Password" }),
                React.createElement("button", { className: "btn btn-lg btn-primary btn-block", type: "submit" }, "Sign in")),
            React.createElement("div", { className: authStyle.authEtc },
                React.createElement(react_router_dom_1.Link, { to: "/register" }, "Register")));
    }
}
exports.SignIn = SignIn;
class Register extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            registerComplete: false,
            errors: {}
        };
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ errors: {} });
        authService.register(this.refs.email.value, this.refs.password.value).then(response => {
            if (!response.is_error) {
                this.setState({ registerComplete: true });
            }
            else {
                this.setState({ errors: response.error_content });
            }
        });
    }
    _formGroupClass(field) {
        var className = "form-group ";
        if (field) {
            className += " has-danger";
        }
        return className;
    }
    render() {
        if (this.state.registerComplete) {
            return React.createElement(RegisterComplete, { email: this.refs.email.value });
        }
        else {
            return React.createElement("div", { className: authStyle.auth },
                React.createElement("form", { className: authStyle.formAuth, onSubmit: (e) => this.handleSubmit(e) },
                    React.createElement("h2", { className: authStyle.formAuthHeading }, "Please register for access"),
                    this.state.errors.general &&
                        React.createElement("div", { className: "alert alert-danger", role: "alert" }, this.state.errors.general),
                    React.createElement("div", { className: this._formGroupClass(this.state.errors.username) },
                        React.createElement("label", { htmlFor: "inputEmail" }, "Email address"),
                        React.createElement("input", { type: "email", id: "inputEmail", ref: "email", className: "form-control", placeholder: "Email address" }),
                        React.createElement("div", { className: "form-control-feedback" }, this.state.errors.username)),
                    React.createElement("div", { className: this._formGroupClass(this.state.errors.password) },
                        React.createElement("label", { htmlFor: "inputPassword" }, "Password"),
                        React.createElement("input", { type: "password", id: "inputPassword", ref: "password", className: "form-control", placeholder: "Password" }),
                        React.createElement("div", { className: "form-control-feedback" }, this.state.errors.password)),
                    React.createElement("button", { className: "btn btn-lg btn-primary btn-block", type: "submit" }, "Sign up")));
        }
        ;
    }
}
exports.Register = Register;
class RegisterComplete extends React.Component {
    render() {
        return React.createElement("div", { className: authStyle.auth },
            React.createElement("div", { className: "alert alert-success", role: "alert" },
                React.createElement("strong", null, "Success!"),
                "  Your account has been created."),
            React.createElement("p", null,
                "A confirmation email has been sent to ",
                this.props.email,
                ". You will need to follow the provided link to confirm your email address before signing in."),
            React.createElement(react_router_dom_1.Link, { className: "btn btn-lg btn-primary btn-block", role: "button", to: "/" }, "Sign in"));
    }
}
exports.RegisterComplete = RegisterComplete;
//# sourceMappingURL=Auth.js.map