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
const _userscontroller = /*#__PURE__*/ _interop_require_default(require("../controllers/users.controller"));
const _usersdto = require("../dtos/users.dto");
const _validationmiddleware = /*#__PURE__*/ _interop_require_default(require("../middlewares/validation.middleware"));
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
let UsersRoute = class UsersRoute {
    initializeRoutes() {
        this.router.post(`${this.path}`, (0, _validationmiddleware.default)(_usersdto.CreateUserDto, 'body'), this.usersController.createUser);
        this.router.post(`${this.path}/info`, (0, _validationmiddleware.default)(_usersdto.GetUserDto, 'body'), this.usersController.getUserByEmail);
    }
    constructor(){
        _define_property(this, "path", '/users');
        _define_property(this, "router", (0, _express.Router)());
        _define_property(this, "usersController", new _userscontroller.default());
        this.initializeRoutes();
    }
};
const _default = UsersRoute;

//# sourceMappingURL=users.route.js.map