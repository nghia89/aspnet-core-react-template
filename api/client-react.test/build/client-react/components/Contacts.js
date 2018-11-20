"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const Routes_1 = require("./Routes");
const Contacts_1 = require("../services/Contacts");
let contactService = new Contacts_1.default();
class Contacts extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            contacts: [],
            editContact: null,
            isAddMode: false,
            searchQuery: ''
        };
    }
    componentDidMount() {
        this.showAll();
    }
    showAll() {
        contactService.fetchAll().then((response) => {
            this.setState({ searchQuery: '', contacts: response.content });
        });
    }
    handleSearchQueryChange(event) {
        this.setState({ searchQuery: event.target.value });
    }
    handleSeachSubmit(event) {
        event.preventDefault();
        if (!this.state.searchQuery) {
            this.showAll();
            return;
        }
        contactService.search(this.state.searchQuery).then((response) => {
            this.setState({ contacts: response.content });
        });
    }
    delete(contact) {
        contactService.delete(contact.id).then((response) => {
            let updatedContacts = this.state.contacts;
            updatedContacts.splice(updatedContacts.indexOf(contact), 1);
            this.setState({ contacts: updatedContacts });
        });
    }
    render() {
        return React.createElement("div", null,
            React.createElement("h1", null, "Contacts"),
            React.createElement("form", { className: "form-inline my-2 my-lg-0", onSubmit: (e) => this.handleSeachSubmit(e) },
                React.createElement("input", { className: "form-control form-control form-control-sm", type: "text", value: this.state.searchQuery, onChange: (e) => this.handleSearchQueryChange(e), placeholder: "Search" }),
                React.createElement("button", { className: "btn btn-outline-success btn-sm", type: "submit" }, "Search"),
                "\u00A0"),
            this.state.searchQuery && this.state.contacts && this.state.contacts.length == 0 &&
                React.createElement("p", null, "No results!"),
            this.state.contacts && this.state.contacts.length > 0 &&
                React.createElement("table", { className: "table" },
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("th", null, "Last Name"),
                            React.createElement("th", null, "First Name"),
                            React.createElement("th", null, "Email"),
                            React.createElement("th", null, "Phone"),
                            React.createElement("th", null))),
                    React.createElement("tbody", null, this.state.contacts.map((contact, index) => React.createElement("tr", { key: contact.id },
                        React.createElement("td", null, contact.lastName),
                        React.createElement("td", null, contact.firstName),
                        React.createElement("td", null, contact.email),
                        React.createElement("td", null, contact.phone),
                        React.createElement("td", null,
                            React.createElement(react_router_dom_1.Link, { to: Routes_1.RoutePaths.ContactEdit.replace(":id", contact.id.toString()) }, "edit"),
                            React.createElement("button", { type: "button", className: "btn btn-link", onClick: (e) => this.delete(contact) }, "delete")))))),
            this.state.searchQuery &&
                React.createElement("button", { type: "button", className: "btn btn-primary", onClick: (e) => this.showAll() }, "clear search"),
            React.createElement(react_router_dom_1.Link, { className: "btn btn-success", to: Routes_1.RoutePaths.ContactNew }, "add"));
    }
    ;
}
exports.Contacts = Contacts;
//# sourceMappingURL=Contacts.js.map