"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerDataReducer = exports.customersStates = exports.setCustomerFormPreview = exports.setCustomerData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    customers: [],
    customerFormPreview: null
};
const customerDataSlice = (0, toolkit_1.createSlice)({
    name: 'customerData',
    initialState,
    reducers: {
        setCustomerData: (state, action) => {
            state.customers = action.payload;
        },
        setCustomerFormPreview: (state, action) => {
            state.customerFormPreview = action.payload;
        }
    }
});
_a = customerDataSlice.actions, exports.setCustomerData = _a.setCustomerData, exports.setCustomerFormPreview = _a.setCustomerFormPreview;
const customersStates = (state) => state.customerData.customers;
exports.customersStates = customersStates;
exports.customerDataReducer = customerDataSlice.reducer;
//# sourceMappingURL=customerData.slice.js.map