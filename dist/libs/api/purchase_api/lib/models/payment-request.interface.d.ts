export type PostPaymentRequest = {
    paymentDate: Date;
    partyName: string;
    amount: number;
    bankAccNo: string;
    ifscCode: string;
    paymentMode: string;
    typesOfTransaction: string;
    vehicleNo: string;
    placeOfPurchase: string;
    contactperson: string;
    costCenter: string;
    kycByEmail: string;
    remark: string;
};
export type GetPaymentRequest = {
    id: string;
} & PostPaymentRequest;
