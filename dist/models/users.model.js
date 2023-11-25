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
const userSchema = new _mongoose.Schema({
    firstName: {
        type: String,
        minLength: 2,
        maxLength: 255,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 255,
        trim: true,
        required: true
    },
    email: {
        type: String,
        minLength: 5,
        maxLength: 255,
        trim: true,
        required: true
    },
    country: {
        type: String,
        minLength: 2,
        maxLength: 255,
        trim: true,
        required: true
    },
    state: {
        type: String,
        minLength: 2,
        maxLength: 255,
        trim: true,
        required: true
    },
    city: {
        type: String,
        minLength: 2,
        maxLength: 255,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        enum: [
            'male',
            'female',
            'other'
        ],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true,
        validate: [
            validateDateOfBirth,
            'Age must be greater than 14 years'
        ]
    },
    age: {
        type: Number
    }
});
userSchema.pre('save', function(next) {
    if (this.dateOfBirth) {
        this.age = new Date().getFullYear() - this.dateOfBirth.getFullYear();
    }
    next();
});
const userModel = (0, _mongoose.model)('User', userSchema);
function validateDateOfBirth(value) {
    const minAge = 14;
    const currentDate = new Date();
    const minDate = new Date(currentDate.getFullYear() - minAge, currentDate.getMonth(), currentDate.getDate());
    return value < minDate;
}
const _default = userModel;

//# sourceMappingURL=users.model.js.map