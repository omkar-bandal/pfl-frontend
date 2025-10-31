import * as yup from 'yup';

export const aqrValidationSchema = yup.object().shape({
    dcNo: yup.string().nullable(),
    dcDate: yup.string().nullable(),
    arrivedQty: yup.number().required('Arrived quantity is required.').min(0,'Quantity cannot be negative'),
    samplingQty: yup.number().required('Sampling quantity is required.').min(0,'Quantity cannot be negative'),
    purchaseBy: yup
    .string()
    .required('Name required.'),
    receivedBy: yup
    .string()
    .required('Name required.'),
    qcCheckBy: yup
    .string()
    .required('Name required.'),
    verifiedBy: yup
    .string()
    .required('Name required.'),
    totalQty: yup.number().nullable(),
    totalpercent: yup.number().nullable(),
    supplierName: yup.string().required('Supplier name is required.'),
    arrivalDate: yup.string().required('Arrival date is required.'),
    supplierLocation: yup.string().required('Supplier location is required.'),
    remark: yup.string().nullable(),
    product: yup.string().required('Product name is required.'),
    parameters: yup
    .array(
        yup
            .object({
                quantity: yup
                    .number()
                    .required("Quantity is required")
                    .min(0, "Quantity cannot be negative."),
            })
    ),
})