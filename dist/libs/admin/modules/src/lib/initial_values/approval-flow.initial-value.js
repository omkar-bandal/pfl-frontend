"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeReplacementInitialValue = exports.approvalFlowInitialValue = exports.approverInitialValue = void 0;
exports.approverInitialValue = {
    hierarchy: null,
    minAmtCanApprove: null,
    maxAmtCanApprove: null,
    users: null,
};
exports.approvalFlowInitialValue = {
    type: null,
    creator: null,
    verifiers: null,
    approvers: {
        firstApprover: {
            hierarchy: null,
            minAmtCanApprove: 0,
            maxAmtCanApprove: null,
            users: null,
        },
        secondApprover: exports.approverInitialValue,
        thirdApprover: exports.approverInitialValue,
        fourthApprover: exports.approverInitialValue,
        fifthApprover: exports.approverInitialValue,
        sixthApprover: exports.approverInitialValue,
    },
    finalizers: {
        firstFinalizers: null,
        secondFinalizers: null,
    },
};
exports.employeeReplacementInitialValue = {
    oldUserId: null,
    newUserId: null,
};
//# sourceMappingURL=approval-flow.initial-value.js.map