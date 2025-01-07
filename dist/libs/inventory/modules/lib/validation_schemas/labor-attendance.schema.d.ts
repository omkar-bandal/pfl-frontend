import * as yup from 'yup';
export declare const laborAttendanceSchema: yup.ObjectSchema<{
    companyName: string;
    location: string;
    date: Date;
    labourDetails: {
        labourName: string;
        contactNo: string;
        inTime: string;
    }[] | undefined;
}, yup.AnyObject, {
    companyName: undefined;
    location: undefined;
    date: undefined;
    labourDetails: undefined;
}, "">;
