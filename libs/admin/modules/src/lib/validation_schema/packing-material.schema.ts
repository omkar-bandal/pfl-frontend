import * as yup from 'yup'

export const packingMaterailValidationSchema = yup.object().shape({
    packagingMaterialName: yup.string().required('Name is required.'),
    packagingMaterialWeight: yup.number().min(0, 'Weight cannot be negative.'),
    containsQuantity: yup.number().min(0, 'Quantity cannot be negative.'),
})