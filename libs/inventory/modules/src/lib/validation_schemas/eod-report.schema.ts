import * as yup from 'yup';

export const eodReportValidatoinSchema = yup.object().shape({
    companyName: yup
        .string()
        .required("Company name is required."),
    location: yup
        .string()
        .required("Location is required."),
    stockDate: yup
        .date()
        .required("Date of stock is required."),
    eodProducts: yup.array(
        yup.object({
            sku: yup
                .string()
                .required("SKU is required."),
            uom: yup
                .string()
                .required("UoM is required."),
            qty: yup
                .number()
                .required("Quantity is required.")
                .min(0, "Quantity cannot be negative."),
            totalWeightinKg: yup
                .number()
                .required('Total weight is required.')
                .min(0, "Weight cannot be negative."),
        })
    ),
    submission: yup
        .string()
        .required("Submission type is required."),
    comments: yup
        .string()
        .nullable()
})