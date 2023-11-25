"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _express = require("express");
const _countriescontroller = /*#__PURE__*/ _interop_require_default(require("../controllers/countries.controller"));
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let CountriesRoute = class CountriesRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.countriesController.getCountries);
    }
    constructor(){
        _define_property(this, "path", '/countries');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "countriesController", new _countriescontroller.default());
        this.initializeRoutes();
    }
};
const _default = CountriesRoute;

//# sourceMappingURL=countries.route.js.map