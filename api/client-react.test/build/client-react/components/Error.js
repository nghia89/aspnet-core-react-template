"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ErrorPage extends React.Component {
    getErrorCode() {
        return this.props.match.params.code;
    }
    getErrorMessage() {
        let message = null;
        switch (this.props.match.params.code) {
            case 'email-confirm':
                message = 'The email confirmation link you used is invalid or expired.';
                break;
            default:
                message = 'An unknown error has occured.';
        }
        return message;
    }
    render() {
        let code = this.getErrorCode();
        return React.createElement("div", null,
            React.createElement("h1", null, "Error"),
            React.createElement("p", null, this.getErrorMessage()),
            code &&
                React.createElement("p", null,
                    "Code: ",
                    code));
    }
}
exports.ErrorPage = ErrorPage;
//# sourceMappingURL=Error.js.map