import { useAppSelector } from "@prime-fresh/modules";
import { useGetAllCustomerCategories, useGetAllCustomerTypes,ADMIN_API_URL } from "@prime-fresh/admin_api";
import { openForState } from "@prime-fresh/admin/modules";
import { BankDetails, BillingDetails, DeliveryDetails, Empanelment, KeyMobileNo, PaymentTerms, StatutoryDetails, declaration, officeUseOnly, productSpecifications, references } from "./form_fields";

export const CustomerFormFields = () => {
    const oepnFormFor = useAppSelector(openForState);
    const { data: CustomerTypes } = useGetAllCustomerTypes(ADMIN_API_URL.GET_ALL_CUSTOMER_TYPE);
    const { data: CustomerCategories } = useGetAllCustomerCategories(ADMIN_API_URL.GET_ALL_CUSTOMER_CATEGORY);
    console.log(CustomerTypes);
    console.log(CustomerCategories);
    return (
        {
            "title": oepnFormFor === 'create' ? "Add Customer" : "Update Customer",
            "subtitle": oepnFormFor === 'create' ? "Create a new customer data by filling below form." : "Update the customer data by editing below form.",
            "tabs": ["Empanelment", "Key Mobile No", "References", "Billing Details", "Delivery Details", "Statutory Details", "Bank Details", "Product Specification", "Payment Terms", "Declaration", "Office Use Only"],
            "tabpanels": [
                Empanelment(CustomerTypes, CustomerCategories),
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