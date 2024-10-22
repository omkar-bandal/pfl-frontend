import { Vendor } from "../models";

const initValAddress = {
    address1: '',
    address2: '',
    location: '',
    city: '',
    state: '',
    pincode: '',
}

const initValVendorSalesContact = {
    contactFName: '',
    contactMName: '',
    contactLName: '',
    directContactNumber: '',
    mobileNumber: '',
    email: '',
}
const initValVendorBankDetails = {
    beneficiaryFName: '',
    beneficiaryMName: '',
    beneficiaryLName: '',
    bankName: '',
    branchAddress: initValAddress,
    typeOfAcc: '',
    ifscCode: '',
    swiftNo: '',
    invoiceCurrency: '',
    cancelledChequeCopy: '',
}

export const initValVendor: Vendor = {
    companyName: '',
    category: '',
    subcategory: '',
    inFandVBusinessSince: '',
    dateOfIncorporation: new Date(2023, 11, 25),
    officeAddress: initValAddress,
    officeContactNo: '',
    email: '',
    website: '',
    //Other Details
    mainProduct: '',
    listOfAllProducts: '',
    dispatchCenter: '',
    warehouseLocations: '',
    packingCenterLocation: '',
    ifGstnCopy: false,
    gstn: '',
    gstnCopy: '',
    ifPanCardCopy: false,
    panNo: '',
    panCardCopy: '',
    msmeCopy: '',
    ifMsmeCopy: false,
    msmeNo: '',
    tradeLicenseNumber: '',
    proposedPaymentTerms: '',
    creditTerms: '',
    anyDetailsTeamAndInfra: '',
    submittedBy: '',
    registeredBy: '',
    registeredDate: new Date(2023, 11, 25),

    //Vendor Sales Contact
    vendorSaleInfo: initValVendorSalesContact,

    //Vendor Bank Details
    vendorBankDetails: initValVendorBankDetails,

    //Vendor References
    ref1FName: '',
    ref1MName: '',
    ref1LName: '',
    ref1PrimaryCNumb:'',
    ref1AltrCNumb: '',
    ref1Address: initValAddress,
    ref1Email: '',
    ref2FName: '',
    ref2MName: '',
    ref2LName: '',
    ref2PrimaryCNumb: '',
    ref2AltrCNumb: '',
    ref2Address: initValAddress,
    ref2Email: '',
}
