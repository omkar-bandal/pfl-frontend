import { openForState } from "@prime-fresh/admin/modules";
import { ADMIN_API_URL, GetRole, useGetAllRoles } from "@prime-fresh/admin_api";
import { useAppSelector } from "@prime-fresh/modules";
import { mapToValueLabelArray } from "@prime-fresh/ui_shared";

export const EmployeeFormFields = () => {
    const oepnFormFor = useAppSelector(openForState);
    const {data: Roles} = useGetAllRoles(ADMIN_API_URL.GET_ALL_ROLES);
    
    return (
        {
            "title": oepnFormFor === 'create' ? "Add Employee" : "Update Employee",
            "subtitle": oepnFormFor === 'create' ? "Create a new employee data by filling below form." :
                        "Update the employee data by editing below form.",
            "fields": [
                {
                    "name": "firstName",
                    "label": "First Name",
                    "type": "text",
                    "placeholder": "Enter first name.",
                    "length": 4
                },
                {
                    "name": "middleName",
                    "label": "Middle Name",
                    "type": "text",
                    "placeholder": "Enter first name.",
                    "length": 4
                },
                {
                    "name": "lastName",
                    "label": "Last Name",
                    "type": "text",
                    "placeholder": "Enter last name.",
                    "length": 4
                },
                {
                    "name": "username",
                    "label": "Username",
                    "type": "text",
                    "placeholder": "Enter unique username.",
                    "length": 4
                },
                {
                    "name": "phoneNumber",
                    "label": "Contact Number",
                    "type": "text",
                    "placeholder": "+91----------",
                    "length": 4
                },
                {
                    "name": "cugNo",
                    "label": "CUG Number",
                    "type": "text",
                    "placeholder": "+91----------",
                    "length": 4
                },
                {
                    "name": "email",
                    "label": "Email",
                    "type": "email",
                    "placeholder": "xxxxxxxx@host_name.domain_name",
                    "length": 6
                },
                {
                    "name": "companyEmail",
                    "label": "Company Email",
                    "type": "email",
                    "placeholder": "xxxxxxxx@prime.com",
                    "length": 6
                },
                {
                    "name": "designation",
                    "label": "Designation",
                    "type": "text",
                    "placeholder": "Enter your designation",
                    "length": 6
                },
                {
                    "name": "role",
                    "label": "Role",
                    "type": "select",
                    "placeholder": "Select role for employee",
                    "options": Roles ? mapToValueLabelArray<GetRole>(Roles, 'id', 'name') : [],
                    "length": 6
                },
                {
                    "name": "address.street",
                    "label": "Address",
                    "type": "text",
                    "placeholder": "Enter street and area",
                    "length": 12
                },
                {
                    "name": "address.city",
                    "label": "District",
                    "type": "text",
                    "placeholder": "Enter your city name",
                    "length": 3
                },
                {
                    "name": "address.state",
                    "label": "State",
                    "type": "text",
                    "placeholder": "Enter your state name",
                    "length": 3
                },
                {
                    "name": "address.postalCode",
                    "label": "Pincode",
                    "type": "text",
                    "placeholder": "Enter your pincode",
                    "length": 3
                },
                {
                    "name": "address.country",
                    "label": "Country",
                    "type": "text",
                    "placeholder": "Enter your country",
                    "length": 3
                },
                {
                    "name": "joiningDate",
                    "label": "Date of Joining",
                    "type": "date",
                    "placeholder": "",
                    "length": 4
                },
                {
                    "name": "relocationDate",
                    "label": "Date of Relocation",
                    "type": "date",
                    "placeholder": "",
                    "length": 4
                },
                {
                    "name": "relocationPlace",
                    "label": "Place of Relocation",
                    "type": "text",
                    "placeholder": "Enter place of relocation.",
                    "length": 4
                },
                {
                    "name": "recommendedBy",
                    "label": "Recommended By",
                    "type": "text",
                    "placeholder": "Recommended By",
                    "length": 4
                },
                {
                    "name": "reportingAuthorityFunctional",
                    "label": "Reporting Authority (Functional)",
                    "type": "text",
                    "placeholder": "Functional Reporting Authority Name",
                    "length": 4
                },
                {
                    "name": "reportingAuthorityAdministrative",
                    "label": "Reporting Authority (Administrative)",
                    "type": "text",
                    "placeholder": "Administrative Reporting Authority Name",
                    "length": 4
                },
            ]
        }
    );
}