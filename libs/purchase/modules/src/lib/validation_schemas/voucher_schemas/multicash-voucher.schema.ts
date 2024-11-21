import * as yup from 'yup';

export const multicashVoucherSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    debitCreditTo: yup.string().required('Name required for debit / credit to.'),
    payReceivedFrom: yup.string().required('Name required for pay / received from'),
    location: yup.string().required('Location is required'),
    paymentMode: yup.string().required('Payment mode is required'),
    receiverName: yup.string().required('Receiver name is required'),
    particulars: yup.array().of(
        yup.object().shape({
            description: yup.string().required('Description is required'),
            amt: yup.number().required('Amount is required').positive('Amount cannot be negative'),
        })
    )
})