import { CustomerCategory, CustomerTypes } from "@prime-fresh/admin_api";

export const Empanelment = () => {
    // function mapToValueLabelArray<T>(arr: T[], valuekey: keyof T, labelkey: keyof T): { value: string, label: string }[] {
    //     return arr.map((item) => ({
    //         value: String(item[valuekey]),
    //         label: String(item[labelkey]),
    //     }))
    // }
    return ({
        "tabname": "Empanelment",
        "value": 0,
        "fields": [
            {
                "name": "organisationName",
                "label": "Name of Organisation",
                "type": "text",
                "placeholder": "Name of Organisation",
                "length": 6,
                "isRequired": true
            },
            {
                "name": "customerTypes",
                "label": "Type of Customer",
                "type": "select",
                // "options": CustomerTypes ? mapToValueLabelArray<CustomerTypes>(CustomerTypes, 'id', 'name') : [],
                "length": 3,
                "isRequired": true
            },
            {
                "name": "customerCategory",
                "label": "Category of Customer",
                "type": "select",
                // "options": CustomerCategory ? mapToValueLabelArray<CustomerCategory>(CustomerCategory, 'id', 'name') : [],
                "length": 3,
                "isRequired": true
            },
            {
                "name": "organisationType",
                "label": "Type of Organisation",
                "type": "select",
                "placeholder": "",
                "length": 4,
                "isRequired": true,
                "options": [
                    {value: "Proprietor", label: "Proprietor"},
                    {value: "Partnership", label: "Partnership"},
                    {value: "Private Ltd.", label: "Private Ltd."},
                    {value: "LLC", label: "LLC"},
                    {value: "Public Ltd.", label: "Public Ltd."},
                    {value: "Other", label: "Other"},
                ]
            },
            {
                "name": "otherType",
                "label": "Any Other Type",
                "type": "text",
                "placeholder": "Please Specify Here",
                "length": 8
            },
            {
                "name": "customerAddress.address1",
                "label": "Address Line 1",
                "type": "text",
                "placeholder": "Enter Street Name, Area",
                "length": 6,
                "isRequired": true
            },
            {
                "name": "customerAddress.address2",
                "label": "Address Line 2",
                "type": "text",
                "placeholder": "Enter Landmark",
                "length": 6
            },
            {
                "name": "customerAddress.location",
                "label": "Location",
                "type": "text",
                "placeholder": "Enter location name",
                "length": 3,
                "isRequired": true
            },
            {
                "name": "customerAddress.city",
                "label": "District",
                "type": "text",
                "placeholder": "Enter city name",
                "length": 3,
                "isRequired": true
            },
            {
                "name": "customerAddress.state",
                "label": "State",
                "type": "text",
                "placeholder": "Enter state name",
                "length": 3,
                "isRequired": true
            },
            {
                "name": "customerAddress.pincode",
                "label": "Pincode",
                "type": "text",
                "placeholder": "Enter pincode",
                "length": 3,
                "isRequired": true
            },
            {
                "name": "primaryContactNo",
                "label": "Contact Number",
                "type": "text",
                "placeholder": "+91----------",
                "length": 4,
                "isRequired": true
            },
            {
                "name": "emailPrimary",
                "label": "Email",
                "type": "email",
                "placeholder": "xxxxxxxx@host_name.domain_name",
                "length": 8
            },
            {
                "name": "secondaryContactNo",
                "label": "Alternate Contact No",
                "type": "text",
                "placeholder": "+91----------",
                "length": 4
            },
            {
                "name": "emailSecondary",
                "label": "Alternate Email",
                "type": "email",
                "placeholder": "xxxxxxxx@host_name.domain_name",
                "length": 8
            },
        ]
    });
}


