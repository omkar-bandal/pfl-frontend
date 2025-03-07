import * as yup from 'yup';

export const dumpRegisterSchema = yup.object().shape({
    companyName: yup.string().required("Company name is required."),
    location: yup.string().required("Location is required"),
    date: yup.date().required("Date is required"),
    batchNo: yup.string().nullable(),
    grn: yup.string().nullable(),
    labourDetails: yup.array(
        yup.object({
            product: yup.string().required("Product name is required"),
            uom: yup.string().required("UOM No is required"),
            quantity: yup.number().required("Quantity is required").positive("Quantity cannot be negative"),
            dumpCost: yup.number().required("Dump cost is required.").positive("Dump cost cannot be negative"),
        })
    )
})