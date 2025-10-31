import * as yup from 'yup';

export const inwardRegisterValidationSchema = yup.object().shape({
    inwardType: yup
        .string()
        .required('Inward type is required'),
    deliveryChallanNo: yup
        .string()
        .nullable(),
    grnNo: yup
        .string()
        .nullable(),
    companyName: yup
        .string()
        .required('Company name is required.'),
    batchNo: yup
        .string()
        .nullable(),
    location: yup
        .string()
        .required('Location is required.'),
    date: yup
        .string()
        .required('Date is required.'),
    source: yup
        .string()
        .oneOf(["vendor", "farmer"], 'Inward type must be either vendor or farmer')
        .required('Source is required'),
    selectedParty: yup
        .string()
        .required('Please select one option.'),
    inwardProducts: yup
        .array(
            yup
                .object({
                    productName: yup
                        .string()
                        .required("Product name is required"),
                    uom: yup
                        .string()
                        .required("UOM No is required"),
                    quantity: yup
                        .number()
                        .required("Quantity is required")
                        .min(0, "Quantity cannot be negative."),
                    unitPrice: yup
                        .number()
                        .required("Unit price is required")
                        .min(0, "Price cannot be negative."),
                    weight: yup
                        .number()
                        .nullable()
                        .min(0, "Weight cannot be negative"),
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
    inwardBy: yup
        .string()
        .required('Name of person is required.'),
    purchasedBy: yup
        .string()
        .required('Name of person is required.'),
    purchasedQty: yup
        .number()
        .required('Purchased quantity is required.')
        .min(0, 'Purchased quantity cannot be negative.'),
    inwardQtyInKg: yup
        .number()
        .required('Inward quantity is required.')
        .min(0, 'Inward quantity cannot be negative.'),
    inwardCost: yup
        .number()
        .required('Inward cost is required.')
        .min(0, 'Inward cost cannot be negative.'),
    remarks: yup
        .string()
        .nullable(),
    // totalWeightInKg: 0,
})