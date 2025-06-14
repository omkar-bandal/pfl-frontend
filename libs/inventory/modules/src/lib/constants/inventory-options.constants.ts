export const inventoryOptions = {
    source: [
        { value: "vendor", label: "Vendor" },
        { value: "farmer", label: "Farmer" },
    ],
    paymentMode: [
        { value: "upi", label: "UPI" },
        { value: "cash", label: "Cash" },
        { value: "cheque", label: "Cheque" },
        { value: "rtgs", label: "RTGS" },
        { value: "neft", label: "NEFT" },
        { value: "other", label: "Other" },
    ],
    deliveryChallanType: [
        { value: "customer", label: "Customer" },
        { value: "cc-dc stock transfer", label: "CC-DC Stock Transfer" },
        { value: "dc-dc stock transfer", label: "DC-DC Stock Transfer" },
        { value: "other", label: "Other" },
    ],
    locationTypes: [
        { value: "cc", label: "CC" },
        { value: "dc", label: "DC" }
    ],
    grnType: [
        { value: "purchase", label: "Purchase" },
        { value: "transfer", label: "Transfer" },
    ],
    purchaseType: [
        { value: "fixed price sales", label: "Fixed Price Sales" },
        { value: "consignment sales / bikri", label: "Consignment Sales / Bikri" },
        { value: "mgp sales", label: "MGP Sales" }
    ],
    QUALITY_PARAMS_TYPE: [
        { label: "Good", value: "good" }, 
        { label: "Bad", value: "bad" },
        { label: "Average", value: "average" }
    ],
    EOD_SUBMISSION_TYPE: [
        { value: "First time submission", label: "First Time Submission" },
        { value: "Re-Submission (after management inputs)", label: "Re-Submission (after management inputs)" },
    ],
    LABOUR_TYPES: [
        { value: "skilled", label: "Skilled" },
        { value: "semi-skilled", label: "Semi-skilled" },
        { value: "unskilled", label: "Unskilled" },
    ],
    LABOR_EMP_TYPES: [
        { value: "temporary", label: "Temporary" },
        { value: "parmanent", label: "Parmanent" },
    ],
    GENDER: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
    ],
    MARITAL_STATUS: [
        { value: "married", label: "Married" },
        { value: "unmarried", label: "Unmarried" },
    ],
    FAMILY_RELATIONS: [
        { value: "father", label: "Father" },
        { value: "mother", label: "Mother" },
        { value: "spouse", label: "Spouse" },
    ],
    BLOOD_GROUPS: ["A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"].map(item => {return { value: item, label: item };}),
    INWARD_TYPE: [
        { value: "purchase", label: "Purchase" },
        { value: "transferred", label: "Transferred" },
    ]
}