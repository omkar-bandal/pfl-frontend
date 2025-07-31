"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.officesDataReducer = exports.officesDataStates = exports.setOfficeFormPreview = exports.setOfficeType = exports.setOfficesData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const admin_api_1 = require("@prime-fresh/admin_api");
const initialState = {
    offices: [],
    officeType: admin_api_1.OfficeType["registered-office"],
    selectedOffices: undefined,
    officeFormPreview: null,
};
const officesDataSlice = (0, toolkit_1.createSlice)({
    name: "officesData",
    initialState,
    reducers: {
        setOfficesData: (state, action) => {
            state.offices = action.payload;
        },
        setOfficeType: (state, action) => {
            state.officeType = action.payload;
        },
        setOfficeFormPreview: (state, action) => {
            state.officeFormPreview = action.payload;
        }
    }
});
_a = officesDataSlice.actions, exports.setOfficesData = _a.setOfficesData, exports.setOfficeType = _a.setOfficeType, exports.setOfficeFormPreview = _a.setOfficeFormPreview;
const officesDataStates = (state) => state.officesData;
exports.officesDataStates = officesDataStates;
exports.officesDataReducer = officesDataSlice.reducer;
//# sourceMappingURL=officeData.slice.js.map