"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Auth {
    static getToken() {
        return window.localStorage.getItem(Auth.STORAGE_KEY);
    }
    static setToken(token) {
        window.localStorage.setItem(Auth.STORAGE_KEY, token);
    }
    static removeToken() {
        window.localStorage.removeItem(Auth.STORAGE_KEY);
    }
}
Auth.STORAGE_KEY = "token";
exports.default = Auth;
//# sourceMappingURL=Auth.js.map