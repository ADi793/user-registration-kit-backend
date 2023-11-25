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
const _HttpException = require("../exceptions/HttpException");
const _usersmodel = /*#__PURE__*/ _interop_require_default(require("../models/users.model"));
const _util = require("../utils/util");
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
let UserService = class UserService {
    // public async findAllUser(): Promise<User[]> {
    //   const users: User[] = await this.users.find();
    //   return users;
    // }
    async findUserByEmail(email) {
        if ((0, _util.isEmpty)(email)) throw new _HttpException.HttpException(400, "Invaild email-id.");
        const findUser = await this.users.findOne({
            email
        });
        if (!findUser) throw new _HttpException.HttpException(409, "User not found.");
        return findUser;
    }
    async createUser(userData) {
        if ((0, _util.isEmpty)(userData)) throw new _HttpException.HttpException(400, "Invalid user data");
        const findUser = await this.users.findOne({
            email: userData.email
        });
        if (findUser) throw new _HttpException.HttpException(409, `You're email ${userData.email} already exists`);
        const createUserData = await this.users.create(userData);
        return createUserData;
    }
    constructor(){
        _define_property(this, "users", _usersmodel.default);
    }
};
const _default = UserService;

//# sourceMappingURL=users.service.js.map