export type PostPaymentRequest = {
    paymentDate: Date;
    partyName: string;
    amount: number;
    bankAccNo: string;
    ifscCode: string;
    paymentMode: string;
    typesOfTransaction: string;
    otherTransaction: string;
    vehicleNo: string;
    placeOfPurchase: string;
    contactpersonRec: string;
    contactpersonSen: string;
    costCenter: string;
    kycByEmail: string;
    remark: string;
};
export type GetPaymentRequest = PostPaymentRequest & {
    id: string;
    requestedBy: {
        firstName: string;
        lastName: string;
    };
};
