import * as Yup from 'yup';
import { REGEX } from './regex';
import { imageSchema } from './image.schema';

const farmerDetailsValidatons = Yup.object().shape({
  farmerfName: Yup.string()
    .required('First Name is required')
    .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
  farmermName: Yup.string().nullable().matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
  farmerlName: Yup.string()
    .required('Last Name is required')
    .matches(REGEX.IS_STRING, 'Name should only contains alphabets.'),
  residensialAddress: Yup.object().shape({
    address1: Yup.string().required('Address Line 1 is required'),
    address2: Yup.string().notRequired().nullable(),
    location: Yup.string().notRequired().nullable(),
    city: Yup.string().required('City is required'),
    state: Yup.string()
      .required('State is required')
      .matches(REGEX.IS_STRING, 'State name should only contains alphabets.'),
    pincode: Yup.string().required('Pincode is required').matches(REGEX.PINCODE, 'Pincode must be exactly 6 digits'),
  }),
  primaryMobileNo: Yup.string()
    .required('Contact number is required.')
    .matches(REGEX.CONTACT_NO, 'Please enter valid contact number.'),
  gender: Yup.string().required('Please select gender.')
});

const farmDetailsValidation = Yup.object().shape({
  farmAddress: Yup.object().shape({
    address1: Yup.string().required('Address Line 1 is required'),
    address2: Yup.string().notRequired().nullable(),
    location: Yup.string().notRequired().nullable(),
    city: Yup.string().required('City is required'),
    state: Yup.string()
      .required('State is required')
      .matches(REGEX.IS_STRING, 'State name should only contains alphabets.'),
    pincode: Yup.string().required('Pincode is required').matches(REGEX.PINCODE, 'Pincode must be exactly 6 digits'),
  }),
});

const cropDetailsValidation = Yup.object().shape({
  crops: Yup.array(
    Yup.object({
      crop: Yup.string().required('Crop name is required'),
      noOfPlants: Yup.number().nullable().min(0, 'Number of plants cannot be negative'),
      pruningDate: Yup.date().required('Pruning date is required.'),
      expectedHarvestDate: Yup.date().required('Expected harvest date is required.'),
      expectedQuantityInTonnes: Yup.number()
        .required('Expected quantity in metric tones are required.')
        .min(0, 'Quantity cannot be negative'),
    }).required('At least one crop is required')
  ),
});

const farmerImgValidation = Yup.object().shape({
  farmerPhoto: imageSchema,
  farmPhoto: imageSchema,
});

export const farmerValidationSchema = [
  farmerDetailsValidatons,
  farmDetailsValidation,
  cropDetailsValidation,
  farmerImgValidation,
];
