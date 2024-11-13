import * as Yup from 'yup';

export const farmerValidationSchema = Yup.object().shape({
    farmerfName: Yup.string().required('First Name is required'),
    farmermName: Yup.string().notRequired(),
    farmerlName: Yup.string().required('Last Name is required'),
    primaryMobileNo: Yup.string().required('Contact No is required'),
});