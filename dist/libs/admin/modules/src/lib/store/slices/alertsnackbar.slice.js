"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.alertSnackbarReducer = exports.alertSnackbarState = exports.removeMessageSeverity = exports.addMessageSevirity = exports.closeAlertbar = exports.openAlertbar = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    open: false,
    message: '',
    severity: 'success',
};
const alertSnackbarSlice = (0, toolkit_1.createSlice)({
    name: 'alertSnackbar',
    initialState,
    reducers: {
        openAlertbar: (state, action) => {
            state.open = action.payload;
        },
        closeAlertbar: (state, action) => {
            state.open = action.payload;
        },
        addMessageSevirity: (state, action) => {
            state.message = action.payload.message;
            state.severity = action.payload.severity;
        },
        removeMessageSeverity: (state) => {
            state.message = "";
            state.severity = 'success';
        },
    }
});
_a = alertSnackbarSlice.actions, exports.openAlertbar = _a.openAlertbar, exports.closeAlertbar = _a.closeAlertbar, exports.addMessageSevirity = _a.addMessageSevirity, exports.removeMessageSeverity = _a.removeMessageSeverity;
const alertSnackbarState = (state) => state.alertSnackbar;
exports.alertSnackbarState = alertSnackbarState;
exports.alertSnackbarReducer = alertSnackbarSlice.reducer;
//# sourceMappingURL=alertsnackbar.slice.js.map