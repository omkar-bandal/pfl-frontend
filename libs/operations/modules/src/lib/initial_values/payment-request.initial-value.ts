import { PostPaymentRequest } from '@prime-fresh/services';

export const initValPaymentRequest: PostPaymentRequest = {
    paymentDate: new Date(),
    partyName: '',
    amount: 0,
    bankAccNo: '',
    ifscCode: '',
    paymentMode: '',
    typesOfTransaction: '',
    otherTransaction: '',
    vehicleNo: '',
    placeOfPurchase: '',
    contactpersonRec: '',
    contactpersonSen: '',
    costCenter: '',
    kycByEmail: 'no',
    remark:'',
}