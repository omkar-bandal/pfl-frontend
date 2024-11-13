import { PostPaymentRequest } from "@prime-fresh/purchase_api";

export const initValPaymentRequest: PostPaymentRequest = {
    paymentDate: new Date(),
    partyName: '',
    amount: 0,
    bankAccNo: '',
    ifscCode: '',
    paymentMode: '',
    typesOfTransaction: '',
    vehicleNo: '',
    placeOfPurchase: '',
    contactperson: '',
    costCenter: '',
    kycByEmail: 'no',
    remark:'',
}