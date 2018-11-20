"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const enzyme_1 = require("enzyme");
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const utils_1 = require("../utils");
const Contacts_1 = require("../../client-react/components/Contacts");
describe("<Contacts/> component ", function () {
    it("renders a h1", function () {
        let emptyArgs = {};
        const wrapper = enzyme_1.shallow(React.createElement(Contacts_1.Contacts, Object.assign({}, emptyArgs)));
        chai_1.expect(wrapper.find('h1')).to.have.length(1);
    });
    it("renders a list of contacts", function (done) {
        let fakeContactsData = [{ id: 1, lastName: 'Smith', firstName: 'John' }];
        let fetchStub = utils_1.stubFetch(fakeContactsData);
        const wrapper = enzyme_1.mount(React.createElement(react_router_dom_1.MemoryRouter, null,
            React.createElement(react_router_dom_1.Route, { component: Contacts_1.Contacts })));
        setImmediate(function () {
            chai_1.expect(wrapper.find('tr').last().html()).to.contain(fakeContactsData[fakeContactsData.length - 1].lastName);
            fetchStub.restore();
            done();
        });
    });
});
//# sourceMappingURL=Contacts.js.map