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
const _countriesmodel = /*#__PURE__*/ _interop_require_default(require("../models/countries.model"));
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
let CountryService = class CountryService {
    async findAll() {
        const users = await this.countries.find();
        return users;
    }
    constructor(){
        _define_property(this, "countries", _countriesmodel.default);
    }
};
const _default = CountryService;

//# sourceMappingURL=countries.service.js.map