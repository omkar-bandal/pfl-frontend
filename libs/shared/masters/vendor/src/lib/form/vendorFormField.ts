import { useGetAllVendorCat, useGetAllVendorSubCat, ADMIN_API_URL, GetVendorSubcategory, GetVendorCategory } from '@prime-fresh/admin_api';
import { useAppSelector } from "@prime-fresh/modules";
import { openForState } from "@prime-fresh/admin/modules";
import { mapToValueLabelArray } from '@prime-fresh/shared/utils';

export const VendorFormFields = () => {
  const oepnFormFor = useAppSelector(openForState);
  const { data: VendorCat } = useGetAllVendorCat(ADMIN_API_URL.GET_ALL_VENDOR_CAT);
  const { data: VendorSubCat } = useGetAllVendorSubCat(ADMIN_API_URL.GET_ALL_VENDOR_SUBCAT);
  return (
    {
      "title": oepnFormFor === 'create' ? "Register New Vendor" : "Update Vendor",
      "tabs": ["Primary Details", "Other Details", "Sales Contact", "Bank Details", "References", "Office Use"],
      "tabpanels": [
        {
          "tabname": "Primary Details",
          "value": 0,
          "fields": [
            {
              "isRequired": true,
              "name": "companyName",
              "label": "Company Name",
              "type": "text",
              "placeholder": "Enter name of vendor.",
              "length": 12
            },
            {
              "isRequired": true,
              "name": "category",
              "label": "Category of Vendor",
              "type": "select",
              "length": 3,
              "options": VendorCat ? mapToValueLabelArray<GetVendorCategory>(VendorCat, 'id', 'name') : [],
            },
            {
              "isRequired": true,
              "name": "subcategory",
              "label": "Subcategory of Vendor",
              "type": "select",
              "length": 3,
              "options": VendorSubCat ? mapToValueLabelArray<GetVendorSubcategory>(VendorSubCat, 'id', 'name') : [],
            },
            {
              "name": "inFandVBusinessSince",
              "label": "In F&V Business Since",
              "type": "select",
              "length": 3,
              "options": [
                { value: "Less than 1 year", label: "Less than 1 year" },
                { value: "Less than 3 year", label: "Less than 3 year" },
                { value: "Less than 5 year", label: "Less than 5 year" },
                { value: "More than 5 year", label: "More than 5 year" },
                { value: "More than 10 year", label: "More than 10 year" },
                { value: "More than 15 year", label: "More than 15 year" },
              ]
            },
            {
              "name": "dateOfIncorporation",
              "label": "Date Of Incorporation",
              "type": "date",
              "length": 3
            },
            {
              "name": "",
              "label": "Office Address",
              "type": "divider",
            },
            {
              "name": "officeAddress.address1",
              "label": "Address Line 1",
              "type": "text",
              "placeholder": "Enter Office Number, Office Building Name",
              "length": 6
            },
            {
              "name": "officeAddress.address2",
              "label": "Address Line 2",
              "type": "text",
              "placeholder": "Enter street and area",
              "length": 6
            },
            {
              "name": "officeAddress.location",
              "label": "Location",
              "type": "text",
              "placeholder": "Enter your location",
              "length": 3
            },
            {
              "name": "officeAddress.city",
              "label": "City",
              "type": "text",
              "placeholder": "Enter your city",
              "length": 3
            },
            {
              "name": "officeAddress.state",
              "label": "State",
              "type": "text",
              "placeholder": "Enter your state name",
              "length": 3
            },
            {
              "name": "officeAddress.pincode",
              "label": "Pincode",
              "type": "text",
              "placeholder": "Enter your pincode",
              "length": 3
            },
            {
              "name": "officeContactNo",
              "label": "Office Contact Number",
              "type": "text",
              "placeholder": "Contact Number",
              "length": 3
            },
            {
              "name": "email",
              "label": "Email",
              "type": "email",
              "placeholder": "xxxxxxxx@host_name.domain_name",
              "length": 4
            },
            {
              "name": "website",
              "label": "Website",
              "type": "text",
              "placeholder": "Website of vendor if any",
              "length": 5
            },
          ]
        },
        {
          "tabname": "Other Details",
          "value": 1,
          "fields": [
            {
              "isRequired": true,
              "name": "mainProduct",
              "label": "Main Products To Be Supplied",
              "type": "text",
              "placeholder": "Landline Number",
              "length": 6
            },
            {
              "isRequired": true,
              "name": "listOfAllProducts",
              "label": "List Of All Products",
              "type": "text",
              "placeholder": "List Of All Products",
              "length": 6
            },
            {
              "isRequired": true,
              "name": "dispatchCenter",
              "label": "Dispatch Center",
              "type": "text",
              "placeholder": "Dispatch Center",
              "length": 4
            },
            {
              "name": "warehouseLocations",
              "label": "Warehouse Locations",
              "type": "text",
              "placeholder": "Warehouse Locations",
              "length": 4
            },
            {
              "isRequired": true,
              "name": "packingCenterLocation",
              "label": "Packing Center Location",
              "type": "text",
              "placeholder": "Packing Center Location",
              "length": 4
            },
            {
              "name": "ifGstnCopy",
              "label": "GSTN available?",
              "type": "radio",
              "length": 2,
              "options": [
                { value: true, label: "Yes" },
                { value: false, label: "No" }
              ]
            },
            {
              "name": "gstn",
              "label": "GSTN (if available)",
              "type": "text",
              "placeholder": "Type NA if not available",
              "length": 4
            },
            {
              "name": "gstnCopy",
              "label": "Attach copy of GST Regn. Cert. (if available)",
              "type": "file",
              "length": 6
            },
            {
              "name": "ifPanCardCopy",
              "label": "PAN Card available?",
              "type": "radio",
              "length": 2,
              "options": [
                { value: true, label: "Yes" },
                { value: false, label: "No" }
              ]
            },
            {
              "name": "panNo",
              "label": "PAN Number",
              "type": "text",
              "placeholder": "PAN Number",
              "length": 4
            },
            {
              "name": "panCardCopy",
              "label": "Attach copy of PAN card",
              "type": "file",
              "length": 6
            },
            {
              "name": "ifMsmeCopy",
              "label": "MSME Cert. available?",
              "type": "radio",
              "length": 2,
              "options": [
                { value: true, label: "Yes" },
                { value: false, label: "No" }
              ]
            },
            {
              "name": "msmeNo",
              "label": "MSME Number",
              "type": "text",
              "placeholder": "PAN Number",
              "length": 4
            },
            {
              "name": "msmeCopy",
              "label": "Attach copy of UDYAM (MSME) card",
              "type": "file",
              "length": 6
            },
            {
              "name": "tradeLicenseNumber",
              "label": "Trade License Number",
              "type": "text",
              "placeholder": "Trade License Number",
              "length": 4
            },
            {
              "isRequired": true,
              "name": "proposedPaymentTerms",
              "label": "Proposed Payment Terms",
              "type": "select",
              "length": 4,
              "options": [
                { "value": "After Unloading", "label": "After Unloading" },
                { "value": "After Loading", "label": "After Loading" },
                { "value": "Between 3 to 5 Days", "label": "Between 3 to 5 Days" },
                { "value": "1 Week", "label": "1 Week" },
                { "value": "15 Days", "label": "15 Days" }
              ]
            },
            {
              "isRequired": true,
              "name": "creditTerms",
              "label": "Vendor Credit Terms",
              "type": "select",
              "length": 4,
              "options": [
                { "value": "5/10 net 30", "label": "5/10 net 30" },
                { "value": "3/15 net 60", "label": "3/15 net 60" },
                { "value": "2/20 net 90", "label": "2/20 net 90" },
                { "value": "EOM", "label": "EOM" },
              ]
            },
            {
              "name": "anyDetailsTeamAndInfra",
              "label": "Any Other Details Regarding Team And Infrastructure",
              "type": "text",
              "placeholder": "Specify Here",
              "length": 12
            },
          ]
        },
        {
          "tabname": "Sales Contact",
          "value": 2,
          "fields": [
            {
              "isRequired": true,
              "name": "contactFName",
              "label": "First Name",
              "type": "text",
              "placeholder": "Contact Person First Name",
              "length": 4
            },
            {
              "name": "contactMName",
              "label": "Middle Name",
              "type": "text",
              "placeholder": "Contact Person Middle Name",
              "length": 4
            },
            {
              "isRequired": true,
              "name": "contactLName",
              "label": "Last Name",
              "type": "text",
              "placeholder": "Contact Person Last Name",
              "length": 4
            },
            {
              "isRequired": true,
              "name": "directContactNumber",
              "label": "Contact No",
              "type": "text",
              "placeholder": "+91----------",
              "length": 4
            },
            {
              "name": "mobileNumber",
              "label": "Contact No (Alternate)",
              "type": "text",
              "placeholder": "+91----------",
              "length": 4
            },
            {
              "name": "email",
              "label": "Email",
              "type": "email",
              "placeholder": "xxxxxxxx@host_name.domain_name",
              "length": 4
            },
          ]
        },
        {
          "tabname": "Bank Details",
          "value": 3,
          "fields": [
            {
              "name": "",
              "label": "Beneficiary Name",
              "type": "divider"
            },
            {
              "isRequired": true,
              "name": "beneficiaryFName",
              "label": "First Name",
              "type": "text",
              "placeholder": "First Name",
              "length": 4
            },
            {
              "name": "beneficiaryMName",
              "label": "Middle Name",
              "type": "text",
              "placeholder": "Middle Name",
              "length": 4
            },
            {
              "isRequired": true,
              "name": "beneficiaryLName",
              "label": "Last Name",
              "type": "text",
              "placeholder": "Last Name",
              "length": 4
            },
            {
              "isRequired": true,
              "name": "bankName",
              "label": "Bank Name",
              "type": "text",
              "placeholder": "Bank Name",
              "length": 3
            },
            {
              "isRequired": true,
              "name": "typeOfAcc",
              "label": "Type of Account",
              "type": "select",
              "length": 3,
              "options": [
                { value: "Savings", label: "Savings" },
                { value: "Current", label: "Current" },
                { value: "Cash Credit", label: "Cash Credit" },
                { value: "Over Draft Account", label: "Over Draft Account" },
                { value: "other", label: "Other" },
              ]
            },
            {
              "isRequired": true,
              "name": "ifscCode",
              "label": "IFSC Code",
              "type": "text",
              "placeholder": "IFSC",
              "length": 3
            },
            {
              "name": "swiftNo",
              "label": "Swift Number (if applicable)",
              "type": "text",
              "placeholder": "Swift Number",
              "length": 3
            },
            {
              "name": "",
              "label": "Bank Address",
              "type": "divider",
            },
            {
              "name": "branchAddress.address1",
              "label": "Address Line 1",
              "type": "text",
              "placeholder": "Enter Office Number, Office Building Name",
              "length": 6
            },
            {
              "name": "branchAddress.address2",
              "label": "Address Line 2",
              "type": "text",
              "placeholder": "Enter street and area",
              "length": 6
            },
            {
              "name": "branchAddress.location",
              "label": "Location",
              "type": "text",
              "placeholder": "Enter your location",
              "length": 3
            },
            {
              "name": "branchAddress.city",
              "label": "City",
              "type": "text",
              "placeholder": "Enter your city",
              "length": 3
            },
            {
              "name": "branchAddress.state",
              "label": "State",
              "type": "text",
              "placeholder": "Enter your state name",
              "length": 3
            },
            {
              "name": "branchAddress.pincode",
              "label": "Pincode",
              "type": "text",
              "placeholder": "Enter your pincode",
              "length": 3
            },
            {
              "name": "invoiceCurrency",
              "label": "Invoice Currency",
              "type": "text",
              "placeholder": "Invoice Currency",
              "length": 4
            },
            {
              "name": "cancelledChequeCopy",
              "label": "Attach a copy of Cancelled Cheque",
              "type": "file",
              "length": 8
            },
          ]
        },
        {
          "tabname": "References",
          "value": 4,
          "fields": [
            {
              "name": "",
              "label": "Reference 1",
              "type": "divider"
            },
            {
              "isRequired": true,
              "name": "ref1FName",
              "label": "First Name",
              "type": "text",
              "placeholder": "First Name",
              "length": 4
            },
            {
              "name": "ref1MName",
              "label": "Middle Name",
              "type": "text",
              "placeholder": "Middle Name",
              "length": 4
            },
            {
              "isRequired": true,
              "name": "ref1LName",
              "label": "Last Name",
              "type": "text",
              "placeholder": "Last Name",
              "length": 4
            },
            {
              "isRequired": true,
              "name": "ref1PrimaryCNumb",
              "label": "Mobile No",
              "type": "text",
              "placeholder": "+91----------",
              "length": 4
            },
            {
              "name": "ref1AltrCNumb",
              "label": "Alternate Mobile No",
              "type": "text",
              "placeholder": "+91----------",
              "length": 4
            },
            {
              "isRequired": true,
              "name": "ref1Email",
              "label": "Email",
              "type": "email",
              "placeholder": "xxxxxxxx@host_name.domain_name",
              "length": 4
            },
            {
              "isRequired": true,
              "name": "ref1Address.address1",
              "label": "Address 1",
              "type": "text",
              "placeholder": "Enter Street Name, Area",
              "length": 6
            },
            {
              "name": "ref1Address.address2",
              "label": "Address 2",
              "type": "text",
              "placeholder": "Enter Landmark",
              "length": 6
            },
            {
              "isRequired": true,
              "name": "ref1Address.location",
              "label": "Location",
              "type": "text",
              "placeholder": "Enter location name",
              "length": 3
            },
            {
              "isRequired": true,
              "name": "ref1Address.city",
              "label": "District",
              "type": "text",
              "placeholder": "Enter city name",
              "length": 3
            },
            {
              "isRequired": true,
              "name": "ref1Address.state",
              "label": "State",
              "type": "text",
              "placeholder": "Enter state name",
              "length": 3
            },
            {
              "isRequired": true,
              "name": "ref1Address.pincode",
              "label": "Pincode",
              "type": "text",
              "placeholder": "Enter pincode",
              "length": 3
            },
            {
              "name": "",
              "label": "References 2",
              "type": "divider"
            },
            {
              "name": "ref2FName",
              "label": "First Name",
              "type": "text",
              "placeholder": "First Name",
              "length": 4
            },
            {
              "name": "ref2MName",
              "label": "Middle Name",
              "type": "text",
              "placeholder": "Middle Name",
              "length": 4
            },
            {
              "name": "ref2LName",
              "label": "Last Name",
              "type": "text",
              "placeholder": "Last Name",
              "length": 4
            },
            {
              "name": "ref2PrimaryCNumb",
              "label": "Mobile No",
              "type": "text",
              "placeholder": "+91----------",
              "length": 4
            },
            {
              "name": "ref2AltrCNumb",
              "label": "Alternate Mobile No",
              "type": "text",
              "placeholder": "+91----------",
              "length": 4
            },
            {
              "name": "ref2Email",
              "label": "Email",
              "type": "email",
              "placeholder": "xxxxxxxx@host_name.domain_name",
              "length": 4
            },
            {
              "name": "ref2Address.address1",
              "label": "Address 1",
              "type": "text",
              "placeholder": "Enter Street Name, Area",
              "length": 6
            },
            {
              "name": "ref2Address.address2",
              "label": "Address 2",
              "type": "text",
              "placeholder": "Enter Landmark",
              "length": 6
            },
            {
              "name": "ref2Address.location",
              "label": "Location",
              "type": "text",
              "placeholder": "Enter location name",
              "length": 3
            },
            {
              "name": "ref2Address.city",
              "label": "District",
              "type": "text",
              "placeholder": "Enter city name",
              "length": 3
            },
            {
              "name": "ref2Address.state",
              "label": "State",
              "type": "text",
              "placeholder": "Enter state name",
              "length": 3
            },
            {
              "name": "ref2Address.pincode",
              "label": "Pincode",
              "type": "text",
              "placeholder": "Enter pincode",
              "length": 3
            },
          ]
        },
        {
          "tabname": "Office Use",
          "value": 5,
          "fields": [
            {
              "name": "submittedBy",
              "label": "Submitted By",
              "type": "text",
              "placeholder": "Your Name",
              "length": 4
            },
            {
              "name": "registeredBy",
              "label": "Registered By",
              "type": "text",
              "placeholder": "Registered By",
              "length": 4
            },
            {
              "name": "registeredDate",
              "label": "Registered Date",
              "type": "date",
              "placeholder": "Registered Date",
              "length": 4
            },
          ]
        }
      ]
    }
  )
}