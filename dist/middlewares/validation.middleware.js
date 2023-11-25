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
const _classtransformer = require("class-transformer");
const _classvalidator = require("class-validator");
const _HttpException = require("../exceptions/HttpException");
const validationMiddleware = (type, value = 'body', skipMissingProperties = false, whitelist = true, forbidNonWhitelisted = true)=>{
    return (req, res, next)=>{
        (0, _classvalidator.validate)((0, _classtransformer.plainToClass)(type, req[value]), {
            skipMissingProperties,
            whitelist,
            forbidNonWhitelisted,
            stopAtFirstError: true
        }).then((errors)=>{
            if (errors.length > 0) {
                // const message = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
                next(new _HttpException.HttpException(400, Object.values(errors[0].constraints)[0]));
            } else {
                next();
            }
        });
    };
};
const _default = validationMiddleware;

//# sourceMappingURL=validation.middleware.js.map