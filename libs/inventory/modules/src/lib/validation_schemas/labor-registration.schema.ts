import * as yup from 'yup';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { addressSchema } from '@prime-fresh/shared/utils';

export const laborRegistrationSchema = yup.object().shape({
    representativeName: yup.string().required("Prime representative name is required."),
    siteName: yup.string().required("Site name is required"),
    laborType: yup.string().required("Type of labor is required."),
    presentAddress: addressSchema,
    permanentAddress: addressSchema,
})