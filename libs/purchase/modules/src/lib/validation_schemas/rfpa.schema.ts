import * as Yup from 'yup';

export const rfpaSchema = Yup.object().shape({
    // requestedby: Yup.string().required('Employee name is important.'),
    // requestingDept: Yup.string().required('Department name is important.'),
})