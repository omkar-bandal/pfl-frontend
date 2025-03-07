export const officeUseOnly = {
    "tabname": "Office Use Only",
    "value": 5,
    "fields": [
        {
            "name": "proposerBDName",
            "label": "Proposer / BD Name",
            "type": "text",
            "placeholder": "Proposer / BD Name",
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
            "name": "approvedBy",
            "label": "Approved By",
            "type": "text",
            "placeholder": "Approved By",
            "length": 4
        },
        {
            "name": "pflCoordinator",
            "label": "PFL Co-ordinator",
            "type": "text",
            "placeholder": "PFL Co-ordinator",
            "length": 4
        },
        {
            "name": "dispatchLocationPfl",
            "label": "Dispatch Location - PFL",
            "type": "text",
            "placeholder": "Dispatch Location - PFL",
            "length": 4
        },
        {
            "name": "relationshipManager",
            "label": "Relationship Manager",
            "type": "text",
            "placeholder": "Relationship Manager",
            "length": 4
        },
        {
            "name": "avgBillingMonthly",
            "label": "Expected Average Monthly Billing",
            "type": "number",
            "placeholder": "0",
            "length": 6
        },
        {
            "name": "volumeMonthly",
            "label": "Volume In Tonnes Per Month",
            "type": "number",
            "placeholder": "0",
            "length": 6
        },
        {
            "name": "customerVerification",
            "label": "Customer verification completed?",
            "type": "select",
            "placeholder": "",
            "length": 3,
            "options": [
                { value: true, label: "Yes" },
                { value: false, label: "No" },
            ]
        },
        {
            "name": "verificationAgency",
            "label": "Verification Agency Name",
            "type": "text",
            "placeholder": "Verification Agency Name",
            "length": 3
        },
        {
            "name": "validityPeriod",
            "label": "Validity Period",
            "type": "date",
            "placeholder": "",
            "length": 3
        },
        {
            "name": "dueDiligenceDone",
            "label": "Due diligence done?",
            "type": "select",
            "placeholder": "",
            "length": 3,
            "options": [
                { value: true, label: "Yes" },
                { value: false, label: "No" },
            ]
        },
        {
            "name": "creditWorthinessDue",
            "label": "Renewal of Credit Worthiness Due",
            "type": "select",
            "placeholder": "",
            "length": 4,
            "options": [
                { value: "6 Months", label: "6 Months" },
                { value: "12 Months", label: "12 Months" },
            ]
        },
        {
            "name": "keyAccountPersonAssigned",
            "label": "Key Account Person Assigned",
            "type": "text",
            "placeholder": "Key Account Person Assigned",
            "length": 4,
        },
        {
            "name": "sinceWhen",
            "label": "Since When",
            "type": "text",
            "placeholder": "Since When",
            "length": 4,
        },
        {
            "name": "ledgerCreatedDate",
            "label": "Ledger Created Date",
            "type": "date",
            "placeholder": "",
            "length": 4,
        },
        {
            "name": "ledgerCreatedBy",
            "label": "Ledger Created By",
            "type": "text",
            "placeholder": "Ledger Created By",
            "length": 4,
        },
        {
            "name": "ledgerVerifiedApprovedBy",
            "label": "Ledger verified & Approved By",
            "type": "text",
            "placeholder": "Ledger verified & Approved By",
            "length": 4,
        },
        {
            "name": "additionalNotes",
            "label": "Any other description & brief of the customer requirement",
            "type": "text",
            "placeholder": "Specify Here",
            "length": 12,
        },
    ]
}