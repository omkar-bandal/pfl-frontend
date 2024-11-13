import { openForState } from "@prime-fresh/admin/modules";
import { useAppSelector } from "@prime-fresh/modules";

export const BranchesFormFields = () => {
    const oepnFormFor = useAppSelector(openForState);

    return({
        "title": oepnFormFor === 'create' ? "Add Branch" : "Update Branch",
        "subtitle": oepnFormFor === 'create' ? "Create a new branch data by filling below form." : "Update the branch data by editing below form.",
        "fields": [
            {
                "isRequired": true,
                "name": "name",
                "label": "Name of Branch",
                "type": "text",
                "placeholder": "Branch Name",
                "length": 12
            },
            {
                "isRequired": true,
                "name": "address.address1",
                "label": "Address Line 1",
                "type": "text",
                "placeholder": "Enter Street Name, Area",
                "length": 6
            },
            {
                "name": "address.address2",
                "label": "Address Line 2",
                "type": "text",
                "placeholder": "Enter Landmark",
                "length": 6
            },
            {
                "isRequired": true,
                "name": "address.location",
                "label": "Location",
                "type": "text",
                "placeholder": "Enter Location Name",
                "length": 3
            },
            {
                "isRequired": true,
                "name": "address.city",
                "label": "District",
                "type": "text",
                "placeholder": "Enter District Name",
                "length": 3
            },
            {
                "isRequired": true,
                "name": "address.state",
                "label": "State",
                "type": "text",
                "placeholder": "Enter State Name",
                "length": 3
            },
            {
                "isRequired": true,
                "name": "address.pincode",
                "label": "Pincode",
                "type": "text",
                "placeholder": "Enter Pincode",
                "length": 3
            },
            {
                "isRequired": true,
                "name": "cFirstName",
                "label": "First Name",
                "type": "text",
                "placeholder": "First Name",
                "length": 3
            },
            {
                "name": "cMiddleName",
                "label": "Middle Name",
                "type": "text",
                "placeholder": "Middle Name",
                "length": 3
            },
            {
                "isRequired": true,
                "name": "cLastName",
                "label": "Last Name",
                "type": "text",
                "placeholder": "Last Name",
                "length": 3
            },
            {
                "isRequired": true,
                "name": "contactNumber",
                "label": "Contact No",
                "type": "text",
                "placeholder": "+91----------",
                "length": 3
            },
            {
                "name": "totalCapacity",
                "label": "Total Capacity",
                "type": "number",
                "placeholder": "Total Capacity",
                "length": 4
            },
            {
                "name": "currentCapacity",
                "label": "Current Capacity",
                "type": "number",
                "placeholder": "Current Capacity",
                "length": 4
            },
            {
                "name": "balanceCapacity",
                "label": "Balance Capacity",
                "type": "number",
                "placeholder": "Balance Capacity",
                "length": 4
            },
            {
                "name": "notes",
                "label": "Notes",
                "type": "text",
                "placeholder": "Any notes",
                "length": 12
            },
        ]
    })
}