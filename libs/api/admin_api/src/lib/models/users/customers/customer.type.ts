import { Address, GetAddress } from "../../address.type"
import { GetBankDetails, PostBankDetails } from "./bankDetails.type"
import { GetBillingDetails, PostBillingDetails } from "./billingDetails.type"
import { CustomerCategory } from "./customerCategory.type"
import { CustomerTypes } from "./customerTypes.type"
import { GetDeliveryDetails, PostDeliveryDetails } from "./deliveryDetails.type"
import { GetKeyMobileNumbers, PostKeyMobileNumbers } from "./keyMobileNumbers.type"
import { GetOfficeUseOnly, PostOfficeUseOnly } from "./officeUseOnly.type"
import { GetPaymentTerms, PostPaymentTerms } from "./paymentTerms.type"
import { GetProductSpecification, PostProductSpecification } from "./productSpecification.type"
import { GetStatutoryDetails, PostStatutoryDetails } from "./statutoryDetails.type"

export type GetCustomer = {
    id: string,
    organisationName: string,
    customerCode: string,
    customerTypes: CustomerTypes,
    customerCategory: CustomerCategory,
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