import { addressSchema } from './address.schema';
import * as Yup from 'yup';
import { REGEX } from './regex';

// Vendor validation schema
export const vendorValidationSchema = Yup.object().shape({
    companyName: Yup.string().required('Party Name is required'),
    category: Yup.string().required('Please select category of vendor'),
    subcategory: Yup.string().required('Please select subcategory of vendor'),
    officeAddress: addressSchema,
    officeContactNo: Yup.string().required('Please enter contact number.').matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
    officeEmail: Yup.string().nullable().email("Please enter valid email"),
    mainProduct: Yup.string().nullable().matches(REGEX.IS_STRING, "Product name should only include alphabets."),
    dispatchCenter: Yup.string().nullable().matches(REGEX.IS_STRING,'Please add valid location of dispatch center'),
    warehouseLocations: Yup.string().nullable().matches(REGEX.IS_STRING, 'Please add valid location of warehouse location'),
    packingCenterLocation: Yup.string().nullable().matches(REGEX.IS_STRING, 'Please add valid location packing center'),
    proposedPaymentTerms: Yup.string().nullable(),
    creditTerms: Yup.string().nullable(),
    ifGstnCopy: Yup.boolean().required(),
    gstn: Yup.string().when('ifGstnCopy', {
        is: true,
        then: (schema) => schema.required("GSTN number required if GSTN is available."),
        otherwise: (schema) => schema.nullable(),
    }),
    gstnCopy: Yup.mixed().when('ifGstnCopy', {
        is: true,
        then: (schema) => schema.required("GSTN copy required if GSTN is available."),
        otherwise: (schema) => schema.nullable(),
    }),
    ifPanCardCopy: Yup.boolean().required(),
    panNo: Yup.string().when('ifPanCardCopy', {
        is: true,
        then: (schema) => schema.required("PAN number required if PAN is available."),
        otherwise: (schema) => schema.nullable(),
    }),
    panCardCopy: Yup.mixed().when('ifPanCardCopy', {
        is: true,
        then: (schema) => schema.required("PAN card copy required if PAN is available."),
        otherwise: (schema) => schema.nullable(),
    }),
    ifMsmeCopy: Yup.boolean().required(),
    msmeNo: Yup.string().when('ifMsmeCopy', {
        is: true,
        then: (schema) => schema.required("MSME number required if MSME is available."),
        otherwise: (schema) => schema.nullable(),
    }),
    msmeCopy: Yup.mixed().when('ifMsmeCopy', {
        is: true,
        then: (schema) => schema.required("MSME copy required if MSME is available."),
        otherwise: (schema) => schema.nullable(),
    }),
    vendorSaleInfo: Yup.object().shape({
        contactFName: Yup.string().required("Contact person first name is required.").matches(REGEX.IS_STRING, "Name should include only alphabets."),
        contactMName: Yup.string().nullable().matches(REGEX.IS_STRING, "Name should include only alphabets."),
        contactLName: Yup.string().required("Contact person last name is required.").matches(REGEX.IS_STRING, "Name should include only alphabets."),
        directContactNumber: Yup.string().required("Contact person phone number is required").matches(REGEX.CONTACT_NO, "Please enter a valid contact number."),
        mobileNumber: Yup.string().nullable().matches(REGEX.CONTACT_NO, "Please enter a valid contact number."),
        email: Yup.string().nullable().email("Please enter valid email"),
    }),
    vendorBankDetails: Yup.object().shape({
        beneficiaryFName: Yup.string().required("Beneficiary person first name is required.").matches(REGEX.IS_STRING, "Name should include only alphabets."),
        beneficiaryMName: Yup.string().nullable().matches(REGEX.IS_STRING, "Name should include only alphabets."),
        beneficiaryLName: Yup.string().required("Beneficiary person last name is required.").matches(REGEX.IS_STRING, "Name should include only alphabets."),
        bankName: Yup.string().required("Bank name is required.").matches(REGEX.IS_STRING, "Bank name should include only alphabets."),
        branchAddress: addressSchema,
        typeOfAcc: Yup.string().required("Account type is required."),
        ifscCode: Yup.string().required("IFSC code of bank is required."),
        swiftNo: Yup.string().nullable(),
        invoiceCurrency: Yup.string().nullable(),
        cancelledChequeCopy: Yup.string().nullable(),
    }),
    ref1FName: Yup.string().required("Reference person first name is required.").matches(REGEX.IS_STRING, "Name should include only alphabets."),
    ref1MName: Yup.string().nullable().matches(REGEX.IS_STRING, "Name should include only alphabets."),
    ref1LName: Yup.string().required("Reference person first name is required.").matches(REGEX.IS_STRING, "Name should include only alphabets."),
    ref1PrimaryCNumb: Yup.string().required("Contact number is required").matches(REGEX.CONTACT_NO, "Please enter valid contact number."),
    ref1AltrCNumb: Yup.string().nullable().matches(REGEX.CONTACT_NO, "Please enter valid contact number."),
    ref1Address: addressSchema,
    ref1Email: Yup.string().nullable().email("Please enter valid email."),
    ref2FName: Yup.string().nullable().matches(REGEX.IS_STRING, "Name should include only alphabets."),
    ref2MName: Yup.string().nullable().matches(REGEX.IS_STRING, "Name should include only alphabets."),
    ref2LName: Yup.string().nullable().matches(REGEX.IS_STRING, "Name should include only alphabets."),
    ref2PrimaryCNumb: Yup.string().nullable().matches(REGEX.CONTACT_NO, "Please enter valid contact number."),
    ref2AltrCNumb: Yup.string().nullable().matches(REGEX.CONTACT_NO, "Please enter valid contact number."),
    // ref2Address: initValAddress,
    ref2Email: Yup.string().nullable().email("Please enter valid email."),
});

export default vendorValidationSchema;
