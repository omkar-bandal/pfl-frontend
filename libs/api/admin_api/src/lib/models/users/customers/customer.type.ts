import { Address, GetAddress } from "@prime-fresh/common_api";
import { GetBankDetails, PostBankDetails } from "./bankDetails.type"
import { GetBillingDetails, PostBillingDetails } from "./billingDetails.type"
import { GetDeliveryDetails, PostDeliveryDetails } from "./deliveryDetails.type"
import { GetKeyMobileNumbers, PostKeyMobileNumbers } from "./keyMobileNumbers.type"
import { GetOfficeUseOnly, PostOfficeUseOnly } from "./officeUseOnly.type"
import { GetPaymentTerms, PostPaymentTerms } from "./paymentTerms.type"
import { GetProductSpecification, PostProductSpecification } from "./productSpecification.type"
import { GetStatutoryDetails, PostStatutoryDetails } from "./statutoryDetails.type"
import { GetCustomerType } from "./customer-type.type";
import { GetCustomerCategory } from "./customer-category.type";

export type GetCustomer = {
    id: string,
    organisationName: string,
    customerCode: string,
    customerTypes: GetCustomerType,
    customerCategory: GetCustomerCategory,
    organisationType: string,
    otherType: string,
    customerAddress: GetAddress,
    primaryContactNo: string,
    secondaryContactNo: string,
    emailPrimary: string,
    emailSecondary: string,
    keyMobileNumbers: GetKeyMobileNumbers,
    billingDetails: GetBillingDetails,
    deliveryDetails: GetDeliveryDetails,
    statutoryDetails: GetStatutoryDetails,
    bankDetails: GetBankDetails,
    productSpecification: GetProductSpecification[],
    paymentTerms: GetPaymentTerms,
    officeUseOnly: GetOfficeUseOnly,
}
export type PostCustomer = {
    organisationName: string,
    customerTypes: string,
    customerCategory: string,
    organisationType: string,
    otherType: string,
    customerAddress: Address,
    primaryContactNo: string,
    secondaryContactNo: string,
    emailPrimary: string,
    emailSecondary: string,
    keyMobileNumbers: PostKeyMobileNumbers,
    billingDetails: PostBillingDetails,
    deliveryDetails: PostDeliveryDetails,
    statutoryDetails: PostStatutoryDetails,
    bankDetails: PostBankDetails,
    productSpecification: PostProductSpecification[],
    paymentTerms: PostPaymentTerms,
    officeUseOnly: PostOfficeUseOnly,
}

export type GetCustomerDataPartial = {
    id:string,
    organisationName:string,
    billingAddress: Address,
    deliveryAddress:Address,
    gstNumber: string,
    panNumber: string
}
