/* eslint-disable @typescript-eslint/no-explicit-any */
import { BankDetails, BillingDetails, DeliveryDetails, Empanelment, KeyMobileNo, PaymentTerms, StatutoryDetails, declaration, officeUseOnly, productSpecifications, references } from "./form_fields";

export const CustomerFormFields = (customerTypes: any, customerCategories: any) => {
     return (
        {
            "title": "Customer",
            "tabs": ["Empanelment", "Key Mobile No", "References", "Billing Details", "Delivery Details", "Statutory Details", "Bank Details", "Product Specification", "Payment Terms", "Declaration", "Office Use Only"],
            "tabpanels": [
                Empanelment(customerTypes, customerCategories),
                KeyMobileNo,
                references,
                BillingDetails,
                DeliveryDetails,
                StatutoryDetails,
                BankDetails,
                productSpecifications,
                PaymentTerms,
                declaration,
                officeUseOnly
            ]
        }
    );
}