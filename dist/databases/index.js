"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dbConnection", {
    enumerable: true,
    get: function() {
        return dbConnection;
    }
});
const _config = require("../config");
const dbConnection = {
    url: `${_config.DB_URL}`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
};

//# sourceMappingURL=index.js.map