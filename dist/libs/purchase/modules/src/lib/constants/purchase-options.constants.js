"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchaseOptionsConstants = void 0;
exports.purchaseOptionsConstants = {
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
    stockTransferType: [
        { value: "cc-dc stock transfer", label: "From CC To DC" },
        { value: "dc-cc stock transfer", label: "From DC To CC" },
        { value: "cc-cc stock transfer", label: "From CC To CC" },
        { value: "dc-dc stock transfer", label: "From DC To DC" },
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
    ]
};
//# sourceMappingURL=purchase-options.constants.js.map