import * as Yup from 'yup';
export declare const SignInSchema: (signinMethod: "email" | "mobile") => Yup.ObjectSchema<{
    uid: string;
    password: string;
}, Yup.AnyObject, {
    uid: undefined;
    password: undefined;
}, "">;
