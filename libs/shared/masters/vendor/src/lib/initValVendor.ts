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
    beneficiaryFName: '',
    beneficiaryMName: '',
    beneficiaryLName: '',
    bankName: '',
    branchAddress: initValAddress,
    typeOfAcc: '',
    ifscCode: '',
    swiftNo: '',
    invoiceCurrency: '',
    cancelledChequeCopy: null,
}

export const initValVendor: PostVendor = {
    companyName: '',
    category: '',
    subcategory: '',
    inFandVBusinessSince: '',
    dateOfIncorporation: '',
    officeAddress: initValAddress,
    officeContactNo: '',
    officeEmail: '',
    website: '',
    //Other Details
    mainProduct: '',
    listOfAllProducts: [],
    dispatchCenter: '',
    warehouseLocations: '',
    packingCenterLocation: '',
    ifGstnCopy: false,
    gstn: '',
    gstnCopy: null,
    ifPanCardCopy: false,
    panNo: '',
    panCardCopy: null,
    msmeCopy: null,
    ifMsmeCopy: false,
    msmeNo: '',
    tradeLicenseNumber: '',
    proposedPaymentTerms: '',
    creditTerms: '',
    anyDetailsTeamAndInfra: '',

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
