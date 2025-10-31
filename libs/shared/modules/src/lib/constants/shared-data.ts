export const sharedData = {
    customerFormTabs: ["Empanelment", "Key Mobile No", "References", "Billing Details", "Delivery Details", "Statutory Details", "Bank Details", "Product Specification", "Payment Terms", "Office Use Only"],
    vendorFormTabs: ["Primary Details", "Other Details", "Sales Contact Details", "Bank Details", "References"],
    farmerFormTabs: ["Farmer Details", "Farm Details", "Crop Details", "Images"],

    vendorClassifications: [
        {value: "fresh fruits", label: "Fresh Fruits" },
        {value: "mangoes", label: "Mangoes"},
        {value: "vegetables", label: "Vegetables"},
        {value: "onion", label: "Onion" },
        {value: "potato", label: "Potato"},
        {value: "tomato", label: "Tomato"},
        {value: "value added product", label: "Value Added Product (Processed & Frozen)"},
        {value: "service", label: "Service"},
        {value: "stationary", label: "Stationary"},
        {value: "packing material", label: "Packing Material"},
        {value: "crockery", label: "Crockery"},
        {value: "marketing product", label: "Maketing"},
        {value: "staff wellfare", label: "Staff Wellfare"},
        {value: "other", label: "Other"},
    ],
    
    accTypes: [
        { value: "savings", label: "Savings" },
        { value: "current", label: "Current" },
        { value: "cash credit", label: "Cash Credit" },
        { value: "over draft account", label: "Over Draft Account" },
        { value: "other", label: "Other" },
    ],
    inFnVBusiness: [
        { value: "less than 1 year", label: "Less than 1 year" },
        { value: "less than 3 year", label: "Less than 3 year" },
        { value: "less than 5 year", label: "Less than 5 year" },
        { value: "more than 5 year", label: "More than 5 year" },
        { value: "more than 10 year", label: "More than 10 year" },
        { value: "more than 15 year", label: "More than 15 year" },
    ],
    fileYesOrNo: [
        { value: true, label: "Yes" },
        { value: false, label: "No" }
    ],
    proposedPaymentTerms: [
        { value: "after unloading", label: "After Unloading" },
        { value: "after loading", label: "After Loading" },
        { value: "between 3 to 5 days", label: "Between 3 to 5 Days" },
        { value: "1 week", label: "1 Week" },
        { value: "15 days", label: "15 Days" }
    ],
    creditTerms: [
        { value: "5/10 net 30", label: "5/10 net 30" },
        { value: "3/15 net 60", label: "3/15 net 60" },
        { value: "2/20 net 90", label: "2/20 net 90" },
        { value: "EOM", label: "EOM" },
    ],
    gender: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
        { value: 'prefer not to disclose', label: 'Prefer not to disclose' },
    ],
    landHoldingStatus: [
        { value: "owned", label: "Owned" },
        { value: "leased", label: "Leased" },
        { value: "shared", label: "Shared" },
        { value: "encumbered", label: "Encumbered" },
    ],
    landStatus: [
        { value: "cultivable", label: "Cultivable" },
        { value: "fallow", label: "Fallow" },
        { value: "irrigated", label: "Irrigated" },
        { value: "non-irrigated", label: "Non-Irrigated" },
    ],
    organizationType: [
        { value: "proprietor", label: "Proprietor" },
        { value: "partnership", label: "Partnership" },
        { value: "private ltd.", label: "Private Ltd." },
        { value: "llc", label: "LLC" },
        { value: "public ltd.", label: "Public Ltd." },
        { value: "other", label: "Other" },
    ],
    certificationDetails: [
        { value: "iso", label: "ISO" },
        { value: "apeda", label: "APEDA" },
        { value: "fssai", label: "FSSAI" },
        { value: "other", label: "Other" },
    ],
    corporateRegistrationDetails: [
        { value: "msme", label: "MSME" },
        { value: "other", label: "Other" },
    ],
    paymentToBeMade: [
        { value: "advance", label: "Advance" },
        { value: "against delivery", label: "Against delivery" },
        { value: "50% advance", label: "50% advance" },
        { value: "other", label: "Other" },
    ],
    paymentMode: [
        { value: "cheque", label: "Cheque" },
        { value: "demand draft", label: "Demand Draft" },
        { value: "neft", label: "NEFT" },
        { value: "rtgs", label: "RTGS" },
        { value: "other", label: "Other" },
    ],
    creditWorthinessDue: [
        { value: "6 Months", label: "6 Months" },
        { value: "12 Months", label: "12 Months" },
    ],
    sources: [
        { value: 'vendor', label: 'Vendor' },
        { value: 'farmer', label: 'Farmer' },
    ],
    dashboardPeriodFilters: [
        { value: 'tillDate', label: 'Till Date' },
        { value: 'year', label: 'Current Year' },
        { value: 'month', label: 'Current Month' },
        { value: 'dateRange', label: 'By Date Range' },
        { value: 'specificDate', label: 'By Date' },
    ]
}