"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom = require("jsdom");
const localStorage = require("./polyfill/localStorage.js");
before(function () {
    const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
    const win = doc.defaultView;
    global.document = doc;
    global.window = win;
    localStorage.polyfill();
    console.log("Successfully mocked a DOM with jsdom and polyfilled localStorage.");
});
//# sourceMappingURL=tests.js.map