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
const _mongoose = require("mongoose");
const countrySchema = new _mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 255,
        trim: true,
        required: true,
        unique: true
    },
    states: [
        {
            name: {
                type: String,
                minLength: 2,
                maxLength: 255,
                trim: true,
                required: true,
                unique: true
            },
            cities: [
                String
            ]
        }
    ]
});
const countryModel = (0, _mongoose.model)('Country', countrySchema);
const _default = countryModel;

//# sourceMappingURL=countries.model.js.map