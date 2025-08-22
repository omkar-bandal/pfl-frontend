import * as Yup from 'yup';
import { addressSchema } from './address.schema';
import { REGEX } from './regex';

// export const farmerValidationSchema = Yup.object().shape({
//     farmerfName: Yup
//         .string()
//         .required('First Name is required')
//         .matches(REGEX.IS_STRING, "Name should only contains alphabets."),
//     farmermName: Yup
//         .string()
//         .nullable()
//         .matches(REGEX.IS_STRING, "Name should only contains alphabets."),
//     farmerlName: Yup
//         .string()
//         .required('Last Name is required')
//         .matches(REGEX.IS_STRING, "Name should only contains alphabets."),
//     residensialAddress: addressSchema,
//     primaryMobileNo: Yup
//         .string()
//         .required("Contact number is required.")
//         .matches(REGEX.CONTACT_NO, "Please enter valid contact number."),
//     secondaryMobileNo: Yup
//         .string()
//         .nullable()
//         .matches(REGEX.CONTACT_NO, "Please enter valid contact number."),
//     email: Yup
//         .string()
//         .nullable()
//         .matches(REGEX.IS_EMAIL, "Please enter valid email."),
//     dob: Yup
//         .date()
//         .nullable(),
//     farmAddress: addressSchema,
//     totalLandArea: Yup
//         .number()
//         .nullable()
//         .min(0, "Area cannot be negative."),
//     cultivationArea: Yup
//         .number()
//         .nullable()
//         .positive("Area cannot be negative."),
//     farmerPhoto: Yup
//         .mixed<File>()
//         .nullable()
//         .test(
//             "fileSize",
//             "File size is too large (must be less than 1MB)",
//             function (value) {
//                 if (!value) return true; // Skip validation if no file is provided (handled by required)
//                 return (value as File).size <= 1024 * 1024; // Type assertion to File
//             }
//         ),
//     farmPhoto: Yup
//         .mixed<File>()
//         .nullable()
//         .test(
//             "fileSize",
//             "File size is too large (must be less than 1MB)",
//             function (value) {
//                 if (!value) return true; // Skip validation if no file is provided (handled by required)
//                 return (value as File).size <= 1024 * 1024; // Type assertion to File
//             }
//         ),
//     crops: Yup.array(
//         Yup.object({
//             crop: Yup
//                 .string()
//                 .required('Crop name is required'),
//             noOfPlants: Yup
//                 .number()
//                 .nullable()
//                 .min(0, 'Number of plants cannot be negative'),
//             pruningDate: Yup
//                 .date()
//                 .required("Pruning date is required."),
//             expectedHarvestDate: Yup
//                 .date()
//                 .required("Expected harvest date is required."),
//             expectedQuantityInTonnes: Yup
//                 .number()
//                 .required("Expected quantity in metric tones are required.")
//                 .min(0, 'Quantity cannot be negative'),
//         }).required('At least one crop is required'),
//     )
// });

const farmerDetailsValidatons = Yup.object().shape({
    farmerfName: Yup
        .string()
        .required('First Name is required')
        .matches(REGEX.IS_STRING, "Name should only contains alphabets."),
    farmermName: Yup
        .string()
        .nullable()
        .matches(REGEX.IS_STRING, "Name should only contains alphabets."),
    farmerlName: Yup
        .string()
        .required('Last Name is required')
        .matches(REGEX.IS_STRING, "Name should only contains alphabets."),
    residensialAddress: addressSchema,
    primaryMobileNo: Yup
        .string()
        .required("Contact number is required.")
        .matches(REGEX.CONTACT_NO, "Please enter valid contact number."),
});

const farmDetailsValidation = Yup.object().shape({
    farmAddress: addressSchema,
})

const cropDetailsValidation = Yup.object().shape({
    crops: Yup.array(
        Yup.object({
            crop: Yup
                .string()
                .required('Crop name is required'),
            noOfPlants: Yup
                .number()
                .nullable()
                .min(0, 'Number of plants cannot be negative'),
            pruningDate: Yup
                .date()
                .required("Pruning date is required."),
            expectedHarvestDate: Yup
                .date()
                .required("Expected harvest date is required."),
            expectedQuantityInTonnes: Yup
                .number()
                .required("Expected quantity in metric tones are required.")
                .min(0, 'Quantity cannot be negative'),
        }).required('At least one crop is required'))
})

const farmerImgValidation = Yup.object().shape({
    farmerPhoto: Yup
        .mixed<File>()
        .nullable()
        .test(
            "fileSize",
            "File size is too large (must be less than 1MB)",
            function (value) {
                if (!value) return true; // Skip validation if no file is provided (handled by required)
                return (value as File).size <= 1024 * 1024; // Type assertion to File
            }
    ),
    farmPhoto: Yup
        .mixed<File>()
        .nullable()
        .test(
            "fileSize",
            "File size is too large (must be less than 1MB)",
            function (value) {
                if (!value) return true; // Skip validation if no file is provided (handled by required)
                return (value as File).size <= 1024 * 1024; // Type assertion to File
            }
    ),
})

export const farmerValidationSchema = [farmerDetailsValidatons, farmDetailsValidation, cropDetailsValidation, farmerImgValidation]