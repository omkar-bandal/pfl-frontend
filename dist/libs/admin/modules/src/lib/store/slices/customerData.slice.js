"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerDataReducer = exports.customersState = exports.setCustomerData = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    customers: [],
};
const customerDataSlice = (0, toolkit_1.createSlice)({
    name: 'customerData',
    initialState,
    reducers: {
        setCustomerData: (state, action) => {
            state.customers = action.payload;
        },
    }
});
exports.setCustomerData = customerDataSlice.actions.setCustomerData;
const customersState = (state) => state.customerData.customers;
exports.customersState = customersState;
exports.customerDataReducer = customerDataSlice.reducer;
//# sourceMappingURL=customerData.slice.js.map