import * as Yup from 'yup';

export const dealSlipSchema = Yup.object().shape({
    loadingLocation: Yup.string().required('Loading location is required.'),
    lotNo: Yup.string().required('Lot number is required.')
})