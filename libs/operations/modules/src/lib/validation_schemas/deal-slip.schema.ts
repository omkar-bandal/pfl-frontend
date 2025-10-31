import * as Yup from 'yup';

export const dealSlipSchema = Yup.object().shape({
    rfpa: Yup.string().required('Please select RFPA number.'),
    loadingLocation: Yup.string().required('Loading location is required.'),
    lotNo: Yup.string().required('Lot number is required.')
})