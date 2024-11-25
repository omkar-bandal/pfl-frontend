
export const OfficesFormFields = (openFormFor: 'create' | 'update') => {
    return (
        {
            "title": openFormFor === 'create' ? "Add Office" : "Update Office",
            "subtitle": openFormFor === 'create' ? "Create a new office data by filling below form." : "Update the office data by editing below form.",
            "fields": [
                {
                    "isRequired": true,
                    "name": "name",
                    "label": "Name of office",
                    "type": "text",
                    "placeholder": "Customer First Name",
                    "length": 12
                },
                {
                    "isRequired": true,
                    "name": "address.address1",
                    "label": "Address Line 1",
                    "type": "text",
                    "placeholder": "Enter Street Name, Area",
                    "length": 12
                },
                {
                    "name": "address.address2",
                    "label": "Address Line 2",
                    "type": "text",
                    "placeholder": "Enter Landmark",
                    "length": 12
                },
                {
                    "isRequired": true,
                    "name": "address.location",
                    "label": "Location",
                    "type": "text",
                    "placeholder": "Enter location name",
                    "length": 3
                },
                {
                    "isRequired": true,
                    "name": "address.city",
                    "label": "City",
                    "type": "text",
                    "placeholder": "Enter city name",
                    "length": 3
                },
                {
                    "isRequired": true,
                    "name": "address.state",
                    "label": "State",
                    "type": "text",
                    "placeholder": "Enter state name",
                    "length": 3
                },
                {
                    "isRequired": true,
                    "name": "address.pincode",
                    "label": "Pincode",
                    "type": "text",
                    "placeholder": "Enter pincode",
                    "length": 3
                },
                {
                    "isRequired": true,
                    "name": "cFirstName",
                    "label": "*First Name",
                    "type": "text",
                    "placeholder": "First Name",
                    "length": 4
                },
                {
                    "name": "cMiddleName",
                    "label": "Middle Name",
                    "type": "text",
                    "placeholder": "Middle Name",
                    "length": 4
                },
                {
                    "isRequired": true,
                    "name": "cLastName",
                    "label": "Last Name",
                    "type": "text",
                    "placeholder": "Last Name",
                    "length": 4
                },
                {
                    "isRequired": true,
                    "name": "contactNumber",
                    "label": "Contact No",
                    "type": "text",
                    "placeholder": "+91----------",
                    "length": 6
                },
                {
                    "name": "officeEmail",
                    "label": "Office Email",
                    "type": "email",
                    "placeholder": "xxxxxxxx@host_name.domain_name",
                    "length": 6
                },
                {
                    "name": "notes",
                    "label": "Note",
                    "type": "text",
                    "placeholder": "Any note",
                    "length": 12
                },
            ]
        }
    );
}