"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const Auth_1 = require("./Auth");
const Auth_2 = require("../services/Auth");
const Error_1 = require("./Error");
const Contacts_1 = require("./Contacts");
const ContactForm_1 = require("./ContactForm");
const Header_1 = require("./Header");
class RoutePaths {
}
RoutePaths.Contacts = "/contacts";
RoutePaths.ContactEdit = "/contacts/edit/:id";
RoutePaths.ContactNew = "/contacts/new";
RoutePaths.SignIn = "/";
RoutePaths.Register = "/register/";
exports.RoutePaths = RoutePaths;
class Routes extends React.Component {
    render() {
        return React.createElement(react_router_dom_1.Switch, null,
            React.createElement(react_router_dom_1.Route, { exact: true, path: RoutePaths.SignIn, component: Auth_1.SignIn }),
            React.createElement(react_router_dom_1.Route, { path: RoutePaths.Register, component: Auth_1.Register }),
            React.createElement(DefaultLayout, { exact: true, path: RoutePaths.Contacts, component: Contacts_1.Contacts }),
            React.createElement(DefaultLayout, { path: RoutePaths.ContactNew, component: ContactForm_1.ContactForm }),
            React.createElement(DefaultLayout, { path: RoutePaths.ContactEdit, component: ContactForm_1.ContactForm }),
            React.createElement(react_router_dom_1.Route, { path: '/error/:code?', component: Error_1.ErrorPage }));
    }
}
exports.default = Routes;
const DefaultLayout = (_a) => {
    var { component: Component } = _a, rest = __rest(_a, ["component"]);
    return (React.createElement(react_router_dom_1.Route, Object.assign({}, rest, { render: props => (Auth_2.default.isSignedIn() ? (React.createElement("div", null,
            React.createElement(Header_1.Header, Object.assign({}, props)),
            React.createElement("div", { className: "container" },
                React.createElement(Component, Object.assign({}, props))))) : (React.createElement(react_router_dom_1.Redirect, { to: {
                pathname: RoutePaths.SignIn,
                state: { from: props.location }
            } }))) })));
};
//# sourceMappingURL=Routes.js.map