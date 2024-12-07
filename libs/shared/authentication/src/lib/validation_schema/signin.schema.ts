import * as Yup from 'yup';

// export const SignInSchema = Yup.object().shape({
//     uid: Yup.string()
//         .required('Email or mobile number is required')
//         .test('is-valid-uid', 'Invalid Mobile Number or Email', function (value) {
//             if (!value) return false;
//             const mobileRegex = /^[0-9]{10}$/;
//             const emailRegex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//             if (mobileRegex.test(value)) {
//                 return mobileRegex.test(value);
//             } else if (emailRegex.test(value)) {
//                 return emailRegex.test(value);
//             }
//             return false;
//         }),
//     password: Yup.string()
//         .required('Password is required')
//         .min(8, 'Password must be at least 8 characters long')
//         .max(12, 'Password must be at most 12 characters long')
//         // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one lower or upper case letter, a number, and a special character')
// });

export const SignInWithEmailSchema = Yup.object().shape({
    uid: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(12, 'Password must be at most 12 characters long')
})

export const SignInWithMobileNoSchema = Yup.object().shape({
    uid: Yup.string()
    .matches(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number')
    .required('Mobile number is required'),
    password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .max(12, 'Password must be at most 12 characters long')
})