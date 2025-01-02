import { PostVendor, PostVendorBankDetails, PostVendorSalesContact } from "@prime-fresh/admin_api";

const initValAddress = {
    address1: '',
    address2: '',
    location: '',
    city: '',
    state: '',
    pincode: '',
}

const initValVendorSalesContact: PostVendorSalesContact = {
    contactFName: '',
    contactMName: '',
    contactLName: '',
    directContactNumber: '',
    mobileNumber: '',
    email: '',
}
const initValVendorBankDetails: PostVendorBankDetails = {
    beneficiaryFName: null,
    beneficiaryMName: null,
    beneficiaryLName: null,
    bankName: null,
    branchAddress: initValAddress,
    typeOfAcc: null,
    ifscCode: null,
    swiftNo: null,
    invoiceCurrency: null,
    cancelledChequeCopy: null,
}

export const initValVendor: PostVendor = {
    companyName: null,
    category: null,
    subcategory: null,
    inFandVBusinessSince: null,
    dateOfIncorporation: null,
    officeAddress: initValAddress,
    officeContactNo: null,
    email: null,
    website: null,
    //Other Details
    mainProduct: null,
    listOfAllProducts: null,
    dispatchCenter: null,
    warehouseLocations: null,
    packingCenterLocation: null,
    ifGstnCopy: false,
    gstn: null,
    gstnCopy: null,
    ifPanCardCopy: false,
    panNo: null,
    panCardCopy: null,
    msmeCopy: null,
    ifMsmeCopy: false,
    msmeNo: null,
    tradeLicenseNumber: null,
    proposedPaymentTerms: null,
    creditTerms: null,
    anyDetailsTeamAndInfra: null,
    submittedBy: null,
    registeredBy: null,
    registeredDate: null,

    //Vendor Sales Contact
    vendorSaleInfo: initValVendorSalesContact,

    //Vendor Bank Details
    vendorBankDetails: initValVendorBankDetails,

    //Vendor References
    ref1FName: null,
    ref1MName: null,
    ref1LName: null,
    ref1PrimaryCNumb:null,
    ref1AltrCNumb: null,
    ref1Address: initValAddress,
    ref1Email: null,
    ref2FName: null,
    ref2MName: null,
    ref2LName: null,
    ref2PrimaryCNumb: null,
    ref2AltrCNumb: null,
    ref2Address: initValAddress,
    ref2Email: null,
}
