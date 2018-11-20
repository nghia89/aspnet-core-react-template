"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = require("sinon");
/**
 * Stubs browser Fetch API and returns given returnData object
 *
 * @param returnData
 */
function stubFetch(returnData) {
    let g = global;
    if (!g.fetch) {
        // If fetch is not defined; define it as a dummy function because sinon will only stub a defined function
        g.fetch = function () { };
    }
    if (!g.Headers) {
        g.Headers = function () {
            this.set = function () { };
        };
    }
    let res = {
        status: 200,
        headers: {
            get: function (key) { return 'application/json'; }
        },
        json: function () { return Promise.resolve(returnData); }
    };
    return sinon.stub(global, 'fetch').resolves(res);
}
exports.stubFetch = stubFetch;
//# sourceMappingURL=utils.js.map