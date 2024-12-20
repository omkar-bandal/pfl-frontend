import * as Yup from 'yup';

// export const SignInWithEmailSchema = Yup.object().shape({
//     uid: Yup.string().email('Invalid email address').required('Email is required'),
//     password: Yup.string()
//         .required('Password is required')
//         .min(8, 'Password must be at least 8 characters long')
// })

// export const SignInWithMobileNoSchema = Yup.object().shape({
//     uid: Yup.string()
//     .matches(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number')
//     .required('Mobile number is required'),
//     password: Yup.string()
//     .required('Password is required')
//     .min(8, 'Password must be at least 8 characters long')
// })

export const SignInSchema = (signinMethod: 'email' | 'mobile') =>
    Yup.object().shape({
        uid: signinMethod === 'email'
            ? Yup.string()
                  .email('Invalid email address')
                  .required('Email is required')
            : Yup.string()
                  .matches(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number')
                  .required('Mobile number is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters long'),
    });
