import * as yup from 'yup';

export const multicashVoucherSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    debitCreditTo: yup.string().required('Name required for debit / credit to.'),
    payReceivedFrom: yup.string().required('Name required for pay / received from'),
    location: yup.string().required('Location is required'),
    paymentMode: yup.string().required('Payment mode is required'),
    receiverName: yup.string().required('Receiver name is required'),
    particulars: yup.array(
        yup.object({
            description: yup.string().required('Description is required').min(5, 'Minimum 5 characters required'),
            amt: yup.number().required('Amount is required').positive('Amount cannot be negative'),
        })
    )
})