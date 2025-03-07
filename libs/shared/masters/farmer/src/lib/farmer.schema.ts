import * as Yup from 'yup';
import { addressSchema, contactNoSchema } from '@prime-fresh/shared/utils';

export const farmerValidationSchema = Yup.object().shape({
    farmerfName: Yup.string().required('First Name is required'),
    farmermName: Yup.string().notRequired(),
    farmerlName: Yup.string().required('Last Name is required'),
    residensialAddress: addressSchema,
    primaryMobileNo: contactNoSchema,
    dob: Yup.date().required('Date of Birth is required'),
    farmAddress: addressSchema,
    crops: Yup.array().of(
        Yup.object().shape({
            crop: Yup.string().required('Crop name is required'),
            noOfPlants: Yup.number().positive('Number of plants cannot be negative'),
            expectedQuantityInTonnes: Yup.number().positive('Quantity cannot be negative'),
        }).required('At least one crop is required'),
    )
});