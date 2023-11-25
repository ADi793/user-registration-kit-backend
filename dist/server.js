"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = /*#__PURE__*/ _interop_require_default(require("./app"));
const _indexroute = /*#__PURE__*/ _interop_require_default(require("./routes/index.route"));
const _usersroute = /*#__PURE__*/ _interop_require_default(require("./routes/users.route"));
const _validateEnv = /*#__PURE__*/ _interop_require_default(require("./utils/validateEnv"));
const _countriesroute = /*#__PURE__*/ _interop_require_default(require("./routes/countries.route"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
(0, _validateEnv.default)();
const app = new _app.default([
    new _indexroute.default(),
    new _usersroute.default(),
    new _countriesroute.default()
]);
app.listen();

//# sourceMappingURL=server.js.map