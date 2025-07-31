import * as yup from 'yup';
export declare const loginSchema: yup.ObjectSchema<{
    uid: string;
    password: string;
}, yup.AnyObject, {
    uid: undefined;
    password: undefined;
}, "">;
export declare const SignInSchema: (signinMethod: "email" | "mobile") => yup.ObjectSchema<{
    uid: string;
    password: string;
}, yup.AnyObject, {
    uid: undefined;
    password: undefined;
}, "">;
