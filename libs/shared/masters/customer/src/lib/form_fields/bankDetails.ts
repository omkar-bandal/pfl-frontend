export const BankDetails = {
    "tabname": "Billing Details",
    "value": 4,
    "fields": [
        {
            "name": "cancelledChequeCopy",
            "label": "Attach a copy of cancelled cheque",
            "type": "file",
            "placeholder": "",
            "length": 4
        },
        {
            "name": "notCancelledChequeReason",
            "label": "If cancelled cheque not attached please specify reason",
            "type": "text",
            "placeholder": "Specify Here",
            "length": 8
        },
        {
            "name": "",
            "label": "Bank Account Holder Name",
            "type": "divider",
        },
        {
            "name": "bankAccHolderFName",
            "label": "*First Name",
            "type": "text",
            "placeholder": "First Name",
            "length": 4
        },
        {
            "name": "bankAccHolderMName",
            "label": "Middle Name",
            "type": "text",
            "placeholder": "Middle Name",
            "length": 4
        },
        {
            "name": "bankAccHolderLName",
            "label": "*Last Name",
            "type": "text",
            "placeholder": "Last Name",
            "length": 4
        },
        {
            "name": "bankName",
            "label": "Bank Name",
            "type": "text",
            "placeholder": "Name of Bank",
            "length": 6
        },
        {
            "name": "bankBranch",
            "label": "Branch Name",
            "type": "text",
            "placeholder": "Name of Branch of Bank",
            "length": 6
        },
        {
            "name": "bankAccNo",
            "label": "Account Number",
            "type": "text",
            "placeholder": "Account Number",
            "length": 3
        },
        {
            "name": "ifscCode",
            "label": "IFSC Code",
            "type": "text",
            "placeholder": "IFSC Code",
            "length": 3
        },
        {
            "name": "accType",
            "label": "Type of Account",
            "type": "select",
            "placeholder": "",
            "length": 3,
            "options": [
                {value: "Savings", label: "Savings"},
                {value: "Current", label: "Current"},
                {value: "Cash Credit", label: "Cash Credit"},
                {value: "Over Draft Account", label: "Over Draft Account"},
                {value: "other", label: "Other"},
            ]
        },
        {
            "name": "otherAccType",
            "label": "Any Other Account Type",
            "type": "text",
            "placeholder": "Specify Here",
            "length": 3
        },
        {
            "name": "",
            "label": "Address of Bank & Branch",
            "type": "divider",
        },
        {
            "name": "bankAddress.address1",
            "label": "Address 1",
            "type": "text",
            "placeholder": "Enter Street Name, Area",
            "length": 12
        },
        {
            "name": "bankAddress.address2",
            "label": "Address 2",
            "type": "text",
            "placeholder": "Enter Landmark",
            "length": 12
        },
        {
            "name": "bankAddress.location",
            "label": "Location",
            "type": "text",
            "placeholder": "Enter location name",
            "length": 3
        },
        {
            "name": "bankAddress.city",
            "label": "City",
            "type": "text",
            "placeholder": "Enter city name",
            "length": 3
        },
        {
            "name": "bankAddress.state",
            "label": "State",
            "type": "text",
            "placeholder": "Enter state name",
            "length": 3
        },
        {
            "name": "bankAddress.pincode",
            "label": "Pincode",
            "type": "text",
            "placeholder": "Enter pincode",
            "length": 3
        },
    ]
}