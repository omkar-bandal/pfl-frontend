import * as yup from 'yup';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const MOBILE_REGEX = /^[0-9]{10}$/; 
const USERNAME_REGEX = /^[a-zA-Z0-9_-]{3,20}$/;

export const loginSchema = yup.object({
    uid: yup
    .string()
    .required('Email, mobile number, or username is required')
    .test(
      'is-valid-identifier',
      'Please enter a valid email, mobile number, or username',
      (value) => {
        if (!value) return false;
        
        // Check if it's an email
        if (EMAIL_REGEX.test(value)) return true;
        
        // Check if it's a mobile number
        if (MOBILE_REGEX.test(value)) return true;
        
        // Check if it's a username
        if (USERNAME_REGEX.test(value)) return true;
        
        return false;
      }
    ),
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Password should be at least 8 characters')
  });
    
export const SignInSchema = (signinMethod: "email" | "mobile") =>
    yup.object().shape({
        uid:
            signinMethod === "email"
                ? yup.string()
                    .email("Invalid email address")
                    .required("Email is required")
                : yup.string()
                    .matches(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number")
                    .required("Mobile number is required"),
        password: yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters long"),
    });