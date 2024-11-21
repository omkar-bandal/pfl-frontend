import * as yup from 'yup';

export const grnSchema = yup.object().shape({
    companyName: yup.string().required('Company Name is required'),
    billNo: yup.string().required("Bill number is required"),
    serialNo: yup.string().required("Serial number is required"),
    purchaseRequestByWhom: yup.string().required("Requesting person name required"),
    purchaseLocation: yup.string().required('Purchase Location is required'),
    purchaseForWhich: yup.string().required('Purchase For Which is required'),
    source: yup.string().required("Source required"),
    selectedParty: yup.string().required("Please select one option"),
    products: yup.array().of(
        yup.object().shape({
            product: yup.string().required("Select at least one product"),
            count: yup.string().required("Select at least one counnt"),
            quantity: yup.number().required("Quantity is required").positive("Quantity can't be negative"),
            rate: yup.number().required("Rate is required").positive("Rate can't be negative"),
            rtv: yup.string().required("Select is product rtv or not"),
        })
    ).required("At lease one product required"),
    deliveryReceivingPerson: yup.string().required("Delivery receiving person name is required"),
    rmn: yup.string().required("RM name is required"),
})