import * as yup from 'yup';
import { REGEX } from './regex';

export const empanelmentSchema = yup.object().shape({
    organisationName: yup
        .string()
        .required('Organization name is required.'),
    customerTypes: yup
        .string()
        .required('Customer type is required.'),
    customerCategory: yup
        .string()
        .required('Customer category is required.'),
    organisationType: yup
        .string()
        .required('Organization type is required.'),
    customerAddress: yup.object().shape({
        address1: yup.string().required('Address Line 1 is required'),
        // address2: yup.string().nullable(),
        location: yup.string().required('Location is required'),
        city: yup.string().required('City is required').matches(REGEX.IS_STRING, "City name should only contains alphabets."),
        state: yup.string().required('State is required').matches(REGEX.IS_STRING, "State name should only contains alphabets."),
        pincode: yup.string().required('Pincode is required').matches(REGEX.PINCODE, 'Pincode must be exactly 6 digits'),
    }),
    primaryContactNo: yup
        .string()
        .required('Please enter contact number.')
        .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
    secondaryContactNo: yup
        .string()
        .notRequired()
        .nullable()
        .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
    emailPrimary: yup
        .string()
        .required('Please enter email.')
        .email("Please enter valid email"),
    emailSecondary: yup
        .string()
        .notRequired()
        .nullable()
        .email("Please enter valid email"),
})

const keyMobileNumberSchema = yup.object().shape({
    keyMobileNumbers: yup.object().shape({
        accDeptFName: yup
            .string()
            .required('First name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        accDeptMName: yup
            .string()
            .notRequired()
            .nullable()
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        accDeptLName: yup
            .string()
            .required('Last name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        accDeptMobileNo: yup
            .string()
            .required('Please enter contact number.')
            .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
        ownerFName: yup
            .string()
            .required('First name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        ownerMName: yup
            .string()
            .notRequired().nullable()
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        ownerLName: yup
            .string()
            .required('Last name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        ownerMobileNo: yup
            .string()
            .required('Please enter contact number.')
            .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
        mandiLicenceNo: yup
            .string()
            .notRequired()
            .nullable(),
        // mandiLicenceCopy: yup.,
        regiNo: yup
            .string()
            .notRequired()
            .nullable(),
        // regiCopy: File | null,
        electricityBill: yup
            .boolean()
            .required('Please select yes or no.'),
        consumenrNo: yup
            .string()
            .when('electricityBill', {
                is: true,
                then: (schema) => schema.required("Consumer number is required if electricity bill available."),
                otherwise: (schema) => schema.notRequired().nullable(),
            }),
        electricityBillCopy: yup
            .mixed()
            .when('electricityBill', {
                is: true,
                then: (schema) => schema.required("Electricity bill copy required if it is available."),
                otherwise: (schema) => schema.notRequired().nullable(),
            }),
        notElectricityBillReason: yup
            .string()
            .when('electricityBill', {
                is: false,
                then: (schema) => schema.required("Please specify reason to not attach electricity bill."),
                otherwise: (schema) => schema.notRequired().nullable(),
            }),
        customerBlacklisted: yup
            .boolean()
            .required('Please select yes or no.'),
        blackListedBy: yup
            .string()
            .when('customerBlacklisted', {
                is: true,
                then: (schema) => schema.required("Please specify name who blacklisted the customer."),
                otherwise: (schema) => schema.notRequired().nullable(),
            }),
        ifBlacklistedReason: yup
            .string()
            .when('customerBlacklisted', {
                is: true,
                then: (schema) => schema.required("please specify reason for blacklisting customer."),
                otherwise: (schema) => schema.notRequired().nullable(),
            }),
        visitingCard: yup
            .boolean()
            .required('Please select yes or no.'),
        visitinContactNo: yup
            .string()
            .when('visitingCard', {
                is: true,
                then: (schema) => schema.required("Consumer number is required ff visiting card available."),
                otherwise: (schema) => schema.notRequired().nullable(),
            }),
        visitingCardCopy: yup
            .mixed()
            .when('visitingCard', {
                is: true,
                then: (schema) => schema.required("Visiting card copy required if it is available."),
                otherwise: (schema) => schema.notRequired().nullable(),
            }),
        notVisitingCardReason: yup
            .string()
            .when('visitingCard', {
                is: false,
                then: (schema) => schema.required("Please specify reason to not attach visiting card."),
                otherwise: (schema) => schema.notRequired().nullable(),
            }),
    })
})

const referencesSchema = yup.object().shape({
    keyMobileNumbers: yup.object().shape({
        ref1FName: yup
            .string()
            .required('First name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        ref1MName: yup
            .string()
            .notRequired()
            .nullable()
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        ref1LName: yup
            .string()
            .required('Last name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        ref1Address: yup.object().shape({
            address1: yup.string().required('Address Line 1 is required'),
            address2: yup.string().nullable(),
            location: yup.string().required('Location is required'),
            city: yup.string().required('City is required').matches(REGEX.IS_STRING, "City name should only contains alphabets."),
            state: yup.string().required('State is required').matches(REGEX.IS_STRING, "State name should only contains alphabets."),
            pincode: yup.string().required('Pincode is required').matches(REGEX.PINCODE, 'Pincode must be exactly 6 digits'),
        }),
        ref1ContactNo: yup
            .string()
            .required('Please enter contact number.')
            .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
        ref1Email: yup
            .string()
            .required('Please enter email.')
            .email("Please enter valid email"),
        ref2FName: yup
            .string()
            .notRequired()
            .nullable()
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        ref2MName: yup
            .string()
            .notRequired()
            .nullable()
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        ref2LName: yup
            .string()
            .notRequired()
            .nullable()
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        ref2ContactNo: yup
            .string()
            .notRequired()
            .nullable()
            .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
        ref2Email: yup
            .string()
            .notRequired()
            .nullable()
            .email("Please enter valid email"),
    })
})

const billingDetailsSchema = yup.object().shape({
    billingDetails: yup.object().shape({
        billingName: yup
            .string()
            .required('Billing name is required.'),
        commonlyKnownAs: yup
            .string()
            .notRequired()
            .nullable(),
        contactPersonFName: yup
            .string()
            .required('First name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        contactPersonMName: yup
            .string()
            .notRequired()
            .nullable()
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        contactPersonLName: yup
            .string()
            .required('Last name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        billingAddress: yup.object().shape({
            address1: yup.string().required('Address Line 1 is required'),
            address2: yup.string().nullable(),
            location: yup.string().required('Location is required'),
            city: yup.string().required('City is required').matches(REGEX.IS_STRING, "City name should only contains alphabets."),
            state: yup.string().required('State is required').matches(REGEX.IS_STRING, "State name should only contains alphabets."),
            pincode: yup.string().required('Pincode is required').matches(REGEX.PINCODE, 'Pincode must be exactly 6 digits'),
        }),
        primaryContactNo: yup
            .string()
            .required('Please enter contact number.')
            .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
        secondaryContactNo: yup
            .string()
            .notRequired()
            .nullable()
            .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
        emailPrimary: yup
            .string()
            .required('Please enter email.')
            .email("Please enter valid email"),
        emailSecondary: yup
            .string()
            .notRequired()
            .nullable()
            .email("Please enter valid email"),
    })
})

const deliveryDetailsSchema = yup.object().shape({
    deliveryDetails: yup.object().shape({
        deliveryAddress: yup.object().shape({
            address1: yup.string().required('Address Line 1 is required'),
            address2: yup.string().nullable(),
            location: yup.string().required('Location is required'),
            city: yup.string().required('City is required').matches(REGEX.IS_STRING, "City name should only contains alphabets."),
            state: yup.string().required('State is required').matches(REGEX.IS_STRING, "State name should only contains alphabets."),
            pincode: yup.string().required('Pincode is required').matches(REGEX.PINCODE, 'Pincode must be exactly 6 digits'),
        }),
        receivingPersonFName: yup
            .string()
            .required('First name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        receivingPersonMName: yup
            .string()
            .notRequired()
            .nullable()
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        receivingPersonLName: yup
            .string()
            .required('Last name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        primaryContactNo: yup
            .string()
            .required('Please enter contact number.')
            .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
        secondaryContactNo: yup
            .string()
            .notRequired()
            .nullable()
            .matches(REGEX.CONTACT_NO, 'Contact number must be 10 digits'),
        emailPrimary: yup
            .string()
            .required('Please enter email.')
            .email("Please enter valid email"),
        emailSecondary: yup
            .string()
            .notRequired()
            .nullable()
            .email("Please enter valid email"),
    }),
})

const statutoryDetailsSchema = yup.object().shape({
    statutoryDetails: yup.object().shape({
        panNo: yup.string().notRequired().nullable(),
        panCopy: yup.mixed().notRequired().nullable(),
        aadharNo: yup.string().notRequired().nullable(),
        addharCopy: yup.mixed().notRequired().nullable(),
        gstn: yup.string().notRequired().nullable(),
        regiCertificateCopy: yup.mixed().notRequired().nullable(),
        billBookCopy: yup.mixed().notRequired().nullable(),
        certificationsDetails: yup.string().notRequired().nullable(),
        otherCertifications: yup.string().notRequired().nullable(),
        corpRegiDetails: yup.string().notRequired().nullable(),
        otherCorpRegiDetails: yup.string().notRequired().nullable(),
        incorpoCertificateCopy: yup.mixed().notRequired().nullable(),
        cinNo: yup.string().notRequired().nullable()
    }),
})

const bankDetailsSchema = yup.object().shape({
    bankDetails: yup.object().shape({
        bankAccHolderFName: yup
            .string()
            .required('First name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        bankAccHolderLName: yup
            .string()
            .required('Last name is required')
            .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
        bankName: yup
            .string()
            .required('Bank name is required.'),
        bankBranch: yup
            .string()
            .required('Branch name is required.'),
        accType: yup
            .string()
            .required('Account type is required.'),
        bankAccNo: yup
            .string()
            .required('Account number is required.'),
        ifscCode: yup
            .string()
            .required('IFSC code is required.'),
        bankAddress: yup.object().shape({
            address1: yup.string().required('Address Line 1 is required'),
            address2: yup.string().nullable(),
            location: yup.string().required('Location is required'),
            city: yup.string().required('City is required').matches(REGEX.IS_STRING, "City name should only contains alphabets."),
            state: yup.string().required('State is required').matches(REGEX.IS_STRING, "State name should only contains alphabets."),
            pincode: yup.string().required('Pincode is required').matches(REGEX.PINCODE, 'Pincode must be exactly 6 digits'),
        }),
    }),
})

const productSpecificationSchema = yup.object().shape({
})

const paymentTermsSchema = yup.object().shape({
    paymentTerms: yup.object().shape({
        paymentMade: yup
            .string()
            .required('Required. Please select an option.'),
        paymentMode: yup
            .string()
            .required('Payment mode is required.'),
        rtv: yup
            .boolean()
            .required('Please select yes or no.'),
        agreementExecuted: yup
            .boolean()
            .required('Please select yes or no.'),
    }),
})

const officeUseOnlySchema = yup.object().shape({
})

export const customerValidationSchema = [
    empanelmentSchema,
    keyMobileNumberSchema,
    referencesSchema,
    billingDetailsSchema,
    deliveryDetailsSchema,
    statutoryDetailsSchema,
    bankDetailsSchema,
    productSpecificationSchema,
    paymentTermsSchema,
    officeUseOnlySchema
]