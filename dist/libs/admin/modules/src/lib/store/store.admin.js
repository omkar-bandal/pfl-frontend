"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeAdmin = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const admin_reducer_1 = require("./admin.reducer");
exports.storeAdmin = (0, toolkit_1.configureStore)({
    reducer: admin_reducer_1.adminReducer,
});
//# sourceMappingURL=store.admin.js.map