export const StatutoryDetails = {
    "tabname": "Statutory Details",
    "value": 4,
    "fields": [
        {
            "name": "panNo",
            "label": "PAN Number",
            "type": "text",
            "placeholder": "PAN Number",
            "length": 4
        },
        {
            "name": "panCopy",
            "label": "Copy of PAN Card",
            "type": "file",
            "placeholder": "Upload a Copy of PAN Card",
            "length": 8
        },
        {
            "name": "aadharNo",
            "label": "Aadhar Number",
            "type": "text",
            "placeholder": "Aadhar Number",
            "length": 4
        },
        {
            "name": "addharCopy",
            "label": "Copy of Aadhar Card",
            "type": "file",
            "placeholder": "Upload a Copy of Aadhar Card",
            "length": 8
        },
        {
            "name": "gstn",
            "label": "GST Registration Number",
            "type": "text",
            "placeholder": "GSTN",
            "length": 4
        },
        {
            "name": "regiCertificateCopy",
            "label": "Copy of Registration certificate",
            "type": "file",
            "placeholder": "Upload a Copy of Registration certificate",
            "length": 8
        },
        {
            "name": "certificationsDetails",
            "label": "Details of certifications",
            "type": "select",
            "placeholder": "",
            "length": 4,
            "options": [
                {value: "ISO", label: "ISO"},
                {value: "APEDA", label: "APEDA"},
                {value: "FSSAI", label: "FSSAI"},
                {value: "other", label: "Other"},
            ]
        },
        {
            "name": "otherCertifications",
            "label": "Any other certifications",
            "type": "text",
            "placeholder": "If Any",
            "length": 8
        },
        {
            "name": "corpRegiDetails",
            "label": "Corporate Registration details ",
            "type": "select",
            "placeholder": "",
            "length": 4,
            "options": [
                {value: "MSME", label: "MSME"},
                {value: "other", label: "Other"},
            ]
        },
        {
            "name": "otherCorpRegiDetails",
            "label": "Details of other registrations",
            "type": "text",
            "placeholder": "If Any",
            "length": 8
        },
        {
            "name": "billBookCopy",
            "label": "Copy of Bill Book or Bilty attached",
            "type": "file",
            "placeholder": "Upload a Copy of Bill Book or Bilty attached",
            "length": 12
        },
        {
            "name": "cinNo",
            "label": "CIN No",
            "type": "text",
            "placeholder": "CIN No",
            "length": 4
        },
        {
            "name": "incorpoCertificateCopy",
            "label": "Copy of incorporation certificate duly signed by the director if it is a corporate client",
            "type": "file",
            "placeholder": "Upload a Copy of incorporation certificate",
            "length": 8
        },
    ]
}