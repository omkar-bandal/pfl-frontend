import * as yup from 'yup';

export const paymentRequestSchema = yup.object().shape({
  paymentDate: yup.date().required('Payment Date is required'),
  partyName: yup.string().required('Party Name is required'),
  amount: yup.number().required('Amount is required').positive('Amount must be positive'),
  bankAccNo: yup.string().required('Bank Account Number is required'),
  ifscCode: yup.string().required('IFSC Code is required'),
  paymentMode: yup.string().required('Payment Mode is required'),
  typesOfTransaction: yup.string().required('Types of Transaction is required'),
  otherTransaction: yup.string().required('Other Transaction is required'),
  vehicleNo: yup.string().required('Vehicle No is required'),
  placeOfPurchase: yup.string().required('Place of Purchase is required'),
  contactpersonRec: yup.string().required('Contact Person Receiving is required'),
  contactpersonSen: yup.string().required('Contact Person Sending is required'),
  costCenter: yup.string().required('Cost Center is required'),
  kycByEmail: yup.string().required('KYC by Email is required'),
  remark: yup.string().required('Remark is required'),
});