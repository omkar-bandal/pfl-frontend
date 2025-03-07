import * as Yup from 'yup';
import { addressSchema } from './address.schema';
import { contactNoSchema } from './contactNo.schema';
import { REGEX } from './regex';

export const farmerValidationSchema = Yup.object().shape({
    farmerfName: Yup.string().required('First Name is required').matches(REGEX.IS_STRING, "Name should only contains alphabets."),
    farmermName: Yup.string().nullable().matches(REGEX.IS_STRING, "Name should only contains alphabets."),
    farmerlName: Yup.string().required('Last Name is required').matches(REGEX.IS_STRING, "Name should only contains alphabets."),
    residensialAddress: addressSchema,
    primaryMobileNo: contactNoSchema,
    secondaryMobileNo: Yup.string().nullable().matches(REGEX.CONTACT_NO, "Please enter valid contact number."),
    email: Yup.string().email("Please enter valid emial"),
    dob: Yup.date().required('Date of Birth is required'),
    farmAddress: addressSchema,
    totalLandArea: Yup.number().nullable().positive("Area cannot be negative."),
    cultivationArea: Yup.number().nullable().positive("Area cannot be negative."),
    crops: Yup.array(
        Yup.object({
            crop: Yup.string().required('Crop name is required'),
            noOfPlants: Yup.number().nullable().positive('Number of plants cannot be negative'),
            pruningDate: Yup.date().required("Pruning date is required."),
            expectedHarvestDate: Yup.date().required("Expected harvest date is required."),
            expectedQuantityInTonnes: Yup.number().required("Expected quantity in metric tones are required.").positive('Quantity cannot be negative'),
        }).required('At least one crop is required'),
    )
});