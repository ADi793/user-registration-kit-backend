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
const _countriesservice = /*#__PURE__*/ _interop_require_default(require("../services/countries.service"));
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
let CountriesController = class CountriesController {
    constructor(){
        _define_property(this, "countryService", new _countriesservice.default());
        _define_property(this, "getCountries", async (req, res, next)=>{
            try {
                const findAllCountriesData = await this.countryService.findAll();
                res.status(200).json({
                    data: findAllCountriesData
                });
            } catch (error) {
                next(error);
            }
        });
    }
};
const _default = CountriesController;

//# sourceMappingURL=countries.controller.js.map