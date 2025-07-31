import * as yup from 'yup';
export declare const approvalFlowSchema: yup.ObjectSchema<{
    creator: string;
    approvers: {
        firstApprover: {
            minAmtCanApprove?: number | null | undefined;
            maxAmtCanApprove?: number | null | undefined;
            users: (string | undefined)[];
        };
        secondApprover: {
            minAmtCanApprove?: number | null | undefined;
            maxAmtCanApprove?: number | null | undefined;
            users: (string | undefined)[];
        };
        thirdApprover: {
            minAmtCanApprove?: number | null | undefined;
            maxAmtCanApprove?: number | null | undefined;
        };
        fourthApprover: {
            minAmtCanApprove?: number | null | undefined;
            maxAmtCanApprove?: number | null | undefined;
        };
        fifthApprover: {
            minAmtCanApprove?: number | null | undefined;
            maxAmtCanApprove?: number | null | undefined;
        };
    };
}, yup.AnyObject, {
    creator: undefined;
    approvers: {
        firstApprover: {
            users: "";
            minAmtCanApprove: undefined;
            maxAmtCanApprove: undefined;
        };
        secondApprover: {
            users: "";
            minAmtCanApprove: undefined;
            maxAmtCanApprove: undefined;
        };
        thirdApprover: {
            minAmtCanApprove: undefined;
            maxAmtCanApprove: undefined;
        };
        fourthApprover: {
            minAmtCanApprove: undefined;
            maxAmtCanApprove: undefined;
        };
        fifthApprover: {
            minAmtCanApprove: undefined;
            maxAmtCanApprove: undefined;
        };
    };
}, "">;
export declare const employeeReplacementSchema: yup.ObjectSchema<{
    oldUserId: string;
    newUserId: string;
}, yup.AnyObject, {
    oldUserId: undefined;
    newUserId: undefined;
}, "">;
