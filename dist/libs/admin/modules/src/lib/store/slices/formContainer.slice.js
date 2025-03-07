"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.formContainerReducer = exports.formContainerState = exports.dataIdState = exports.openForState = exports.openDrawerState = exports.setDataId = exports.setOpenFor = exports.setDrawerOpen = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    openDrawer: false,
    openFor: 'create',
    dataId: '',
};
const formContainerSlice = (0, toolkit_1.createSlice)({
    name: "formContainer",
    initialState,
    reducers: {
        setDrawerOpen: (state, action) => {
            state.openDrawer = action.payload;
        },
        setOpenFor: (state, action) => {
            state.openFor = action.payload;
        },
        setDataId: (state, action) => {
            state.dataId = action.payload;
        }
    },
});
_a = formContainerSlice.actions, exports.setDrawerOpen = _a.setDrawerOpen, exports.setOpenFor = _a.setOpenFor, exports.setDataId = _a.setDataId;
const openDrawerState = (state) => state.formContainer.openDrawer;
exports.openDrawerState = openDrawerState;
const openForState = (state) => state.formContainer.openFor;
exports.openForState = openForState;
const dataIdState = (state) => state.formContainer.dataId;
exports.dataIdState = dataIdState;
const formContainerState = (state) => state.formContainer;
exports.formContainerState = formContainerState;
exports.formContainerReducer = formContainerSlice.reducer;
//# sourceMappingURL=formContainer.slice.js.map