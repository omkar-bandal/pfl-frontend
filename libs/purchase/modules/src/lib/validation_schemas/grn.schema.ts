import * as yup from 'yup';
import { REGEX } from "@prime-fresh/shared/modules";

export const grnSchema = yup.object().shape({
    // locationType: "cc" | "dc",
    // grnType: "transfer" | "purchase",
    // purchaseType: "fixed price sales" | "consignment sales/bikri" | "mgp sales";
    purchaseType: yup.string().required('Type of purchase is required'),
    companyName: yup.string().required('Company Name is required'),
    purchaseInstructionsBy: yup.string().required("Requesting person name required").matches(REGEX.IS_STRING, "Name should only contain alphabets."),
    // purchaseLocation: yup.string().required('Purchase Location is required'),
    // purchaseForSalesLocation: yup.string().required('Purchase For Which is required'),
    source: yup.string().required("Source is required"),
    selectedParty: yup.string().required("Please select one option"),
    grnProducts: yup.array().of(
        yup.object().shape({
            productName: yup.string().required("Select at least one product"),
            quantity: yup
                .number()
                .required("Quantity is required")
                .positive("Quantity can't be negative"),
            unitPrice: yup.number().required("Unit price is required").positive("Price can't be negative"),
            grossWeight: yup.number().required("Gross weight is required").positive("Weight can't be negative"),
            packingMaterialWeight: yup.number().required("Packing material weight is required").positive("Weight can't be negative"),
            purchaseDate: yup.date().required('Purchase Date is required'),
            dispatchDate: yup.date().required('Dispatch Date is required'),
            deliveryDate: yup.date().required('Delivery Date is required'),
            deliveryLocation: yup.string().required('Delivery Location is required'),
            expectedHarvestDate: yup.date().nullable(),
            rtv: yup.boolean().required("Select is product rtv or not"),
        })
    ).required("At lease one product required"),
    freight: yup.number().nullable().positive("Amount can't be negative"),
    otherCharges: yup.number().nullable().positive("Amount can't be negative"),
    purchasedBy: yup.string().nullable().matches(REGEX.IS_STRING, "Name should only contain alphabets."),
    receivedThrough: yup.string().nullable().matches(REGEX.IS_STRING, "Name should only contain alphabets."),
    securityPerson: yup.string().nullable().matches(REGEX.IS_STRING, "Name should only contain alphabets."),
    vehicleNo: yup.string().nullable().matches(REGEX.IS_VEHICLE_NO, "Please enter valid vehicle number."),
    cratesIn: yup.number().nullable().positive("Count of crates can't be negative"),
    deliveryReceivingPerson: yup.string().required("Delivery receiving person name is required").matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
    rmn: yup.string().required("RM name is required").matches(REGEX.IS_STRING, "Name should only contain alphabets."),
})