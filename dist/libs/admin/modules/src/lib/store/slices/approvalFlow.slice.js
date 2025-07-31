"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approvalFlowReducer = exports.approvalFlowStates = exports.setShowReplaceForm = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    showReplaceForm: false
};
const approvalFlowSlice = (0, toolkit_1.createSlice)({
    name: "approvalFlow",
    initialState,
    reducers: {
        setShowReplaceForm: (state) => {
            state.showReplaceForm = !state.showReplaceForm;
        },
    }
});
exports.setShowReplaceForm = approvalFlowSlice.actions.setShowReplaceForm;
const approvalFlowStates = (state) => state.approvalFlow;
exports.approvalFlowStates = approvalFlowStates;
exports.approvalFlowReducer = approvalFlowSlice.reducer;
//# sourceMappingURL=approvalFlow.slice.js.map