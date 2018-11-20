"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("object-assign");
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const Contacts_1 = require("../services/Contacts");
const Routes_1 = require("./Routes");
let contactService = new Contacts_1.default();
class ContactForm extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            contact: null,
            errors: {}
        };
    }
    componentDidMount() {
        if (this.props.match.path == Routes_1.RoutePaths.ContactEdit) {
            contactService.fetch(this.props.match.params.id).then((response) => {
                this.setState({ contact: response.content });
            });
        }
        else {
            let newContact = {
                lastName: '', firstName: '', email: '', phone: ''
            };
            this.setState({ contact: newContact });
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.saveContact(this.state.contact);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        let contactUpdates = {
            [name]: value
        };
        this.setState({
            contact: Object.assign(this.state.contact, contactUpdates)
        });
    }
    saveContact(contact) {
        this.setState({ errors: {} });
        contactService.save(contact).then((response) => {
            if (!response.is_error) {
                this.props.history.push(Routes_1.RoutePaths.Contacts);
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
        if (!this.state.contact) {
            return React.createElement("div", null, "Loading...");
        }
        else {
            return React.createElement("fieldset", { className: "form-group" },
                React.createElement("legend", null, this.state.contact.id ? "Edit Contact" : "New Contact"),
                React.createElement("form", { onSubmit: (e) => this.handleSubmit(e) },
                    React.createElement("div", { className: this._formGroupClass(this.state.errors.lastName) },
                        React.createElement("label", { htmlFor: "inputLastName", className: "form-control-label" }, "Last Name"),
                        React.createElement("input", { type: "text", autoFocus: true, name: "lastName", id: "inputLastName", value: this.state.contact.lastName, onChange: (e) => this.handleInputChange(e), className: "form-control form-control-danger", required: true }),
                        React.createElement("div", { className: "form-control-feedback" }, this.state.errors.lastName)),
                    React.createElement("div", { className: this._formGroupClass(this.state.errors.firstName) },
                        React.createElement("label", { htmlFor: "inputFirstName", className: "form-control-label" }, "First Name"),
                        React.createElement("input", { type: "text", name: "firstName", id: "inputFirstName", value: this.state.contact.firstName, onChange: (e) => this.handleInputChange(e), className: "form-control form-control-danger", required: true }),
                        React.createElement("div", { className: "form-control-feedback" }, this.state.errors.firstName)),
                    React.createElement("div", { className: this._formGroupClass(this.state.errors.email) },
                        React.createElement("label", { htmlFor: "inputEmail", className: "form-control-label" }, "Email"),
                        React.createElement("input", { type: "email", name: "email", id: "inputEmail", value: this.state.contact.email, onChange: (e) => this.handleInputChange(e), className: "form-control form-control-danger" }),
                        React.createElement("div", { className: "form-control-feedback" }, this.state.errors.email)),
                    React.createElement("div", { className: this._formGroupClass(this.state.errors.phone) },
                        React.createElement("label", { htmlFor: "inputPhone", className: "form-control-label" }, "Phone"),
                        React.createElement("input", { type: "tel", name: "phone", id: "inputPhone", value: this.state.contact.phone, onChange: (e) => this.handleInputChange(e), className: "form-control form-control-danger" }),
                        React.createElement("div", { className: "form-control-feedback" }, this.state.errors.phone)),
                    React.createElement("button", { className: "btn btn-lg btn-primary btn-block", type: "submit" }, "Save"),
                    React.createElement(react_router_dom_1.Link, { className: "btn btn-lg btn-light btn-block", to: "/contacts" }, "Cancel")));
        }
    }
}
exports.ContactForm = ContactForm;
//# sourceMappingURL=ContactForm.js.map