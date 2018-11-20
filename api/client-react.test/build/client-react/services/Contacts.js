"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestUtilities_1 = require("./RestUtilities");
class Contacts {
    fetchAll() {
        return RestUtilities_1.default.get('/api/contacts');
    }
    fetch(contactId) {
        return RestUtilities_1.default.get(`/api/contacts/${contactId}`);
    }
    search(query) {
        return RestUtilities_1.default.get(`/api/contacts/search/?q=${query}`);
    }
    update(contact) {
        return RestUtilities_1.default.put(`/api/contacts/${contact.id}`, contact);
    }
    create(contact) {
        return RestUtilities_1.default.post('/api/contacts', contact);
    }
    save(contact) {
        if (contact.id) {
            return this.update(contact);
        }
        else {
            return this.create(contact);
        }
    }
    delete(contactId) {
        return RestUtilities_1.default.delete(`/api/contacts/${contactId}`);
    }
}
exports.default = Contacts;
//# sourceMappingURL=Contacts.js.map