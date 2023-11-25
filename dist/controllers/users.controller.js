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
const _usersservice = /*#__PURE__*/ _interop_require_default(require("../services/users.service"));
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
let UsersController = class UsersController {
    constructor(){
        _define_property(this, "userService", new _usersservice.default());
        // public getUsers = async (req: Request, res: Response, next: NextFunction) => {
        //   try {
        //     const findAllUsersData: User[] = await this.userService.findAllUser();
        //     res.status(200).json({ data: findAllUsersData, message: 'findAll' });
        //   } catch (error) {
        //     next(error);
        //   }
        // };
        _define_property(this, "getUserByEmail", async (req, res, next)=>{
            try {
                const email = req.body.email;
                const findOneUserData = await this.userService.findUserByEmail(email);
                res.status(200).json({
                    data: findOneUserData
                });
            } catch (error) {
                next(error);
            }
        });
        _define_property(this, "createUser", async (req, res, next)=>{
            try {
                const userData = req.body;
                const createUserData = await this.userService.createUser(userData);
                res.status(201).json({
                    data: createUserData
                });
            } catch (error) {
                next(error);
            }
        });
    }
};
const _default = UsersController;

//# sourceMappingURL=users.controller.js.map