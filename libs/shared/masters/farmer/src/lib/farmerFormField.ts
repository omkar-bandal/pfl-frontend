import { useAppSelector } from "@prime-fresh/modules";
import { ADMIN_ARRAYS, openForState } from "@prime-fresh/admin/modules";

export const FarmerFormFields = () => {
    const oepnFormFor = useAppSelector(openForState);
    return (
        {
            "title": oepnFormFor === 'create' ? "Add Farmer" : "Update Farmer",
            "subtitle": oepnFormFor === 'create' ? "Create a new farmer data by filling below form." : "Update the farmer data by editing below form.",
            "tabs": ["Farmer Details", "Farm Details", "Crop Details"],
            "tabpanels": [
                {
                    "tabname": "Farmer Details",
                    "value": 0,
                    "fields": [
                        {
                            "isRequired": true,
                            "name": "farmerfName",
                            "label": "First Name",
                            "type": "text",
                            "placeholder": "Farmer's First Name",
                            "length": 4
                        },
                        {
                            "name": "farmermName",
                            "label": "Middle Name",
                            "type": "text",
                            "placeholder": "Farmer's Middle Name",
                            "length": 4
                        },
                        {
                            "isRequired": true,
                            "name": "farmerlName",
                            "label": "Last Name",
                            "type": "text",
                            "placeholder": "Farmer's Last Name",
                            "length": 4
                        },
                        {
                            "isRequired": true,
                            "name": "residensialAddress.address1",
                            "label": "Address Line 1",
                            "type": "text",
                            "placeholder": "House No, Street, Area,",
                            "length": 6
                        },
                        {
                            "name": "residensialAddress.address2",
                            "label": "Address Line 2",
                            "type": "text",
                            "placeholder": "Any Landmarks, Village Name, Town Name",
                            "length": 6
                        },
                        {
                            "isRequired": true,
                            "name": "residensialAddress.location",
                            "label": "Location",
                            "type": "text",
                            "placeholder": "Location",
                            "length": 3
                        },
                        {
                            "isRequired": true,
                            "name": "residensialAddress.city",
                            "label": "District",
                            "type": "text",
                            "placeholder": "District",
                            "length": 3
                        },
                        {
                            "isRequired": true,
                            "name": "residensialAddress.state",
                            "label": "State",
                            "type": "text",
                            "placeholder": "State",
                            "length": 3
                        },
                        {
                            "isRequired": true,
                            "name": "residensialAddress.pincode",
                            "label": "Pincode",
                            "type": "text",
                            "placeholder": "Pincode",
                            "length": 3
                        },
                        {
                            "isRequired": true,
                            "name": "primaryMobileNo",
                            "label": "Mobile Number",
                            "type": "text",
                            "placeholder": "+91----------",
                            "length": 4
                        },
                        {
                            "name": "secondaryMobileNo",
                            "label": "Alternate Number",
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
                        {
                            "name": "gender",
                            "label": "Gender",
                            "type": "radio",
                            "length": 2,
                            "options": [
                                {value: 'male', label: 'Male'},
                                {value: 'female', label: 'Female'},
                            ]
                        },
                        {
                            "isRequired": true,
                            "name": "dob",
                            "label": "DOB",
                            "type": "date",
                            "length": 3
                        },
                        {
                            "name": "idProofNo",
                            "label": "Aadhar/ PAN/ License Number",
                            "type": "text",
                            "placeholder": "Aadhar/ PAN/ License Number",
                            "length": 3
                        },
                        {
                            "name": "idProofCopy",
                            "label": "Attach a ID proof copy",
                            "type": "file",
                            "length": 4
                        },
                        {
                            "name": "howDoYouSell",
                            "label": "How do you sell your product?",
                            "type": "text",
                            "length": 12
                        },
                    ]
                },
                {
                    "tabname": "Farm Details",
                    "value": 1,
                    "fields": [
                        {
                            "name": "",
                            "label": "Address of Farm",
                            "type": "divider"
                        },
                        {
                            "isRequired": true,
                            "name": "farmAddress.address1",
                            "label": "Address Line 1",
                            "type": "text",
                            "placeholder": "House No, Street, Area,",
                            "length": 6
                        },
                        {
                            "name": "farmAddress.address2",
                            "label": "Address Line 2",
                            "type": "text",
                            "placeholder": "Any Landmarks, Village Name, Town Name",
                            "length": 6
                        },
                        {
                            "isRequired": true,
                            "name": "farmAddress.location",
                            "label": "Location",
                            "type": "text",
                            "placeholder": "Location",
                            "length": 3
                        },
                        {
                            "isRequired": true,
                            "name": "farmAddress.city",
                            "label": "District",
                            "type": "text",
                            "placeholder": "District",
                            "length": 3
                        },
                        {
                            "isRequired": true,
                            "name": "farmAddress.state",
                            "label": "State",
                            "type": "text",
                            "placeholder": "State",
                            "length": 3
                        },
                        {
                            "isRequired": true,
                            "name": "farmAddress.pincode",
                            "label": "Pincode",
                            "type": "text",
                            "placeholder": "Pincode",
                            "length": 3
                        },
                        {
                            "name": "landHoldingStatus",
                            "label": "Land Holding Status",
                            "type": "select",
                            "length": 3,
                            "options": ADMIN_ARRAYS.landHoldingStatus,
                        },
                        {
                            "name": "landStatus",
                            "label": "Land Status",
                            "type": "select",
                            "length": 3,
                            "options": ADMIN_ARRAYS.landStatus
                        },
                        {
                            "name": "totalLandArea",
                            "label": "Total Land Area (in Acres)",
                            "type": "number",
                            "placeholder": "0",
                            "length": 3
                        },
                        {
                            "name": "cultivationArea",
                            "label": "Cultivation Area (in Acres)",
                            "type": "number",
                            "placeholder": "0",
                            "length": 3
                        },
                        {
                            "name": "sevenTwelveNo",
                            "label": "7/12 Number",
                            "type": "text",
                            "placeholder": "7 / 12 Number",
                            "length": 4
                        },
                        {
                            "name": "sevenTwelveCopy",
                            "label": "7/12 Copy",
                            "type": "file",
                            "placeholder": "Attach 7/12 Copy",
                            "length": 8
                        },
                        {
                            "name": "farmerPhoto",
                            "label": "Photo of Farmer",
                            "type": "image",
                            "length": 6
                        },
                        {
                            "name": "farmPhoto",
                            "label": "Photo of Farm",
                            "type": "image",
                            "length": 6
                        },
                    ]
                },
                {
                    "tabname": "Crop Details",
                    "value": 1,
                    "fields": [
                        {
                        "name": "crops",
                        "label": "Crops",
                        "type": "objArray",
                        "length": 12,
                        "subFields": [
                            {
                                "isRequired": true,
                                "name": "crop",
                                "label": "Crop",
                                "type": "text",
                                "placeholder": "Crop Name",
                                "length": 4
                            },
                            {
                                "isRequired": true,
                                "name": "variety",
                                "label": "Variety",
                                "type": "text",
                                "placeholder": "Variety of Crop",
                                "length": 4
                            },
                            {
                                "name": "noOfPlants",
                                "label": "Number Of Plants",
                                "type": "number",
                                "placeholder": "Number Of Plants",
                                "length": 4
                            },
                            {
                                "isRequired": true,
                                "name": "pruningDate",
                                "label": "Pruning Date",
                                "type": "date",
                                "placeholder": "Pruning Date",
                                "length": 4
                            },
                            {
                                "isRequired": true,
                                "name": "expectedHarvestDate",
                                "label": "Expected Harvest Date",
                                "type": "date",
                                "placeholder": "Expected Harvest Date",
                                "length": 4
                            },
                            {
                                "isRequired": true,
                                "name": "expectedQuantityInTonnes",
                                "label": "Expected Quantity In Tonnes",
                                "type": "number",
                                "placeholder": "-- Tonnes",
                                "length": 4
                            },
                        ]
                    },
                    {
                        "name": "dateOfVisit",
                        "label": "Date of Visit",
                        "type": "date",
                        "length": 3
                    },
                    {
                        "name": "registerBy",
                        "label": "Registered By",
                        "type": "text",
                        "placeholder": "Registered By",
                        "length": 3
                    },
                    {
                        "name": "registerDate",
                        "label": "Registered Date",
                        "type": "date",
                        "placeholder": "Registered Date",
                        "length": 3
                    },
                    ]
                }
            ]
        }
    )
}