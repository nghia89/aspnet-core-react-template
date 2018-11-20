"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RestUtilities_1 = require("./RestUtilities");
const Auth_1 = require("../stores/Auth");
class Auth {
    static isSignedIn() {
        return !!Auth_1.default.getToken();
    }
    signInOrRegister(email, password, isRegister = false) {
        return RestUtilities_1.default.post(`/api/auth/${isRegister ? 'register' : 'login'}`, `username=${email}&password=${password}${!isRegister ? '&grant_type=password' : ''}`)
            .then((response) => {
            if (!response.is_error) {
                Auth_1.default.setToken(response.content.token);
            }
            return response;
        });
    }
    signIn(email, password) {
        return this.signInOrRegister(email, password, false);
    }
    register(email, password) {
        return this.signInOrRegister(email, password, true);
    }
    confirm(token) {
        return RestUtilities_1.default.post('/api/auth/confirm', { token: token })
            .then((response) => {
            return true;
        }).catch((err) => {
            console.log(err);
            return false;
        });
    }
    signOut() {
        Auth_1.default.removeToken();
    }
}
exports.default = Auth;
//# sourceMappingURL=Auth.js.map