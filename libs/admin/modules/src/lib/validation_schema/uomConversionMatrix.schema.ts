import * as yup from 'yup';

export const uomConversionMatrixSchema = yup.object().shape({
    conversionFactor: yup.number().required('Conversion factor is required').positive('Conversion factor cannot be negative.'),
    fromUOM: yup.string().required('UOM name is required'),
    toUOM: yup.string().required('UOM name is required')
})