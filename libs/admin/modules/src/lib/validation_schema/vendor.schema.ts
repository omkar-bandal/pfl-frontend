import * as Yup from 'yup';
import { addressSchema } from '@prime-fresh/shared/modules';

// Vendor validation schema
const vendorValidationSchema = Yup.object().shape({
    companyName: Yup.string().required('Party Name is required'),
    category: Yup.string().required('Please select category of vendor'),
    subcategory: Yup.string().required('Please select subcategory of vendor'),
    inFandVBusinessSince: Yup.string(),
    dateOfIncorporation: Yup.string(),
    officeAddress: addressSchema, 
    officeContactNo: Yup.string().matches(/^\d{10}$/, 'Contact number must be 10 digits'),
    // website: Yup.string().notRequired(),
    // email: Yup.string().email('Invalid email format').required('Email is required'),
    // mainProductsToBeSupplied: Yup.string().required('Main Products to be Supplied are required'),
    // dispatchCenter: Yup.string().required('Please add location of dispatch center'),
    // warehouseLocations: Yup.string().required('Please add location of warehouse location'),
    // packingCenterLocation: Yup.string().required('Please add packing of packing center'),
    // ifGstnCopy: Yup.boolean().required('Please select Yes or No'),
    // ifPanCardCopy: Yup.boolean().required('Please select Yes or No'),
    // ifMsmeCopy: Yup.boolean().required('Please select Yes or No'),
    // proposedPaymentTerms: Yup.string().required('Please select a proposed payment term'),
    // creditTerms: Yup.string().required('Please select a credit term'),
    // contactPersonFirstName: Yup.string().required('Contact Person First Name is required'),
    // contactPersonMiddleName: Yup.string(),
    // contactPersonLastName: Yup.string().required('Contact Person Last Name is required'),
    // primaryContactNumber: Yup.string().required('Primary Contact Number is required').matches(/^\d{10}$/, 'Contact number must be 10 digits'),
    // alternateContactNumber: Yup.string().matches(/^\d{10}$/, 'Contact number must be 10 digits'),
    // // PANNumber: Yup.string().required('PAN Number is required').matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN number'),
    // tradeLicenseNumber: Yup.string(),
    // proposedLicenseTerms: Yup.string(),
    // anyOtherDetailsRegardingTeamAndInfrastructure: Yup.string(),
    // submittedBy: Yup.string(),
    // registeredBy: Yup.string(),
    // registeredDate: Yup.string(),
    // // gstn: Yup.string().required('GSTN is required').matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}$/, 'Invalid GSTN format'),
    // description: Yup.string(),
    // vendorCode: Yup.string(),
    // vendorGrade: Yup.string().required('Vendor Grade is required').oneOf(['A', 'B', 'C'], 'Vendor Grade must be A, B, or C'),
    // forWhichProduct: Yup.string(),
    // address: addressSchema, // Referencing the address schema
});

export default vendorValidationSchema;
