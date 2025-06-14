import { addressSchema, REGEX } from '@prime-fresh/shared/modules';
import * as yup from 'yup';

export const vehicleDispatchRegisterSchema = yup.object().shape({
    companyName: yup
        .string()
        .required("Company name is required."),
    dcNumber: yup
        .string()
        .required("Please select challan number."),
    date: yup
        .string()
        .nullable(),
    vehicleNo: yup
        .string()
        .required("Vehicle number is required."),
    vehicleType: yup
        .string()
        .required("Vehicle type is required."),
    driverName: yup
        .string()
        .required("Full name of driver is required.")
        .matches(REGEX.IS_STRING, "Name should only contain alphabets."),
    driverMobNo: yup
        .string()
        .required("Driver's mobile number is required.")
        .matches(REGEX.IS_NUMBER, "Please enter valid mobile number."),
    paymentDiscussed: yup
        .number()
        .required("Please enter payment amount discussed.")
        .min(0, "Amount cannot be negative."),
    transportationBillAmt: yup
        .number()
        .required("Please enter transportation bill amount.")
        .min(0, "Amount cannot be negative."),
    advancePaid: yup
        .number()
        .nullable()
        .min(0, "Amount cannot be negative."),
    clientName: yup
        .string()
        .required("Client name is required."),
    clientGRNNo: yup
        .string()
        .nullable(),
    clientAddress: addressSchema,
    receivingPerson: yup
        .string()
        .required("Receiving person name is required.")
        .matches(REGEX.IS_STRING, "Name should only contain alphabets."),
    outTime: yup
        .string()
        .required("Out time is required."),
    reachingTime: yup
        .string()
        .required("Reaching time is required."),
    accDeptVerification: yup
        .string()
        .required("Please select one option."),
    remarksPFL: yup
        .string()
        .nullable(),
    feedbackbyTransporterOwner: yup
        .string()
        .nullable(),
    paymentTerms: yup
        .string()
        .nullable(),
    netInwardQty: yup
        .number()
        .nullable()
        .min(0, "Quantity cannot be negative."),
    rejection: yup
        .number()
        .nullable()
        .min(0, "Quantity cannot be negative."),
    shrinkageDump: yup
        .number()
        .nullable()
        .min(0, "Quantity cannot be negative."),
})