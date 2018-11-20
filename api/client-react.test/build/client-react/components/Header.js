"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Routes_1 = require("./Routes");
const Auth_1 = require("../services/Auth");
let authService = new Auth_1.default();
class Header extends React.Component {
    signOut() {
        authService.signOut();
        this.props.history.push(Routes_1.RoutePaths.SignIn, { signedOut: true });
    }
    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        return React.createElement("nav", { className: "navbar navbar-expand-lg navbar-dark bg-dark fixed-top" },
            React.createElement("button", { className: "navbar-toggler navbar-toggler-right", type: "button", "data-toggle": "collapse", "data-target": "#navbarsExampleDefault", "aria-controls": "navbarsExampleDefault", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("span", { className: "navbar-toggler-icon" })),
            React.createElement("a", { className: "navbar-brand", href: "#" }, "Template"),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbarsExampleDefault" },
                React.createElement("ul", { className: "navbar-nav mr-auto" },
                    React.createElement("li", { className: "nav-item active" },
                        React.createElement("a", { className: "nav-link", href: "#" },
                            "Landing ",
                            React.createElement("span", { className: "sr-only" }, "(current)"))),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link", href: "#" }, "Link")),
                    React.createElement("li", { className: "nav-item" },
                        React.createElement("a", { className: "nav-link disabled", href: "#" }, "Disabled")),
                    React.createElement("li", { className: "nav-item dropdown" },
                        React.createElement("a", { className: "nav-link dropdown-toggle", href: "http://example.com", id: "dropdown01", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Dropdown"),
                        React.createElement("div", { className: "dropdown-menu", "aria-labelledby": "dropdown01" },
                            React.createElement("a", { className: "dropdown-item", href: "#" }, "Action"),
                            React.createElement("a", { className: "dropdown-item", href: "#" }, "Another action"),
                            React.createElement("a", { className: "dropdown-item", href: "#" }, "Something else here")))),
                React.createElement("button", { className: "btn btn-outline-warning my-2 my-sm-0", type: "button", onClick: () => this.signOut() }, "Sign out")));
    }
}
exports.Header = Header;
//# sourceMappingURL=Header.js.map