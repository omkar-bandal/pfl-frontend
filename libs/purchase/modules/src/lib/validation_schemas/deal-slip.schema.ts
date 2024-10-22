import * as Yup from 'yup';

export const dealSlipSchema = Yup.object().shape({
    location: Yup.string().required('Location is required.'),
    loadingLoctn: Yup.string().required('Loading location is required.')
})