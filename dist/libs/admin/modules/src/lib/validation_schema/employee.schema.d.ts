import * as Yup from 'yup';
export declare const employeeValidationSchema: Yup.ObjectSchema<{
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    phoneNumber: string;
    email: string;
    address: {
        address2?: string | null | undefined;
        address1: string;
        location: string;
        city: string;
        state: string;
        pincode: string;
    };
    joiningDate: string;
    selectDepartment: string;
    level: string;
    reportingManager: string | undefined;
}, Yup.AnyObject, {
    firstName: undefined;
    lastName: undefined;
    username: undefined;
    password: undefined;
    phoneNumber: undefined;
    email: undefined;
    address: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
    joiningDate: undefined;
    selectDepartment: undefined;
    level: undefined;
    reportingManager: undefined;
}, "">;
