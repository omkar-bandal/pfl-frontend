import * as yup from 'yup';

export const returnedByCustomerSchema = yup.object().shape({
    deliveryChallanNo: yup.string().required("Delivery challan number is required."),
    date: yup.string().required("Date is required."),
    returnedProducts: yup
        .array(
            yup
                .object({
                    productName: yup
                        .string()
                        .required("Product name is required"),
                    quantity: yup
                        .number()
                        .required("Quantity is required")
                        .min(0, "Quantity cannot be negative."),
                    unitPrice: yup
                        .number()
                        .required("Unit price is required.")
                        .min(0, "Unit price cannot be negative"),
                    packingMaterialWeight: yup
                        .number()
                        .nullable()
                        .min(0, "Weight cannot be negative"),
                    grossWeight: yup
                        .number()
                        .required("Gross weight is required.")
                        .min(0, "Weight cannot be negative"),
                })
        ),
})