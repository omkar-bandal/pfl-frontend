import * as yup from 'yup';
import { dateSchema, REGEX } from '@prime-fresh/shared/modules';

export const grnSchemaForCreate = yup.object().shape({
  companyName: yup.string().required('Company Name is required'),
  purchaseInstructionsBy: yup
    .string()
    .required('Requesting person name required'),
  purchaseLocation: yup.string().test('is-required-conditional', 'Purchase location is required.', function (value) {
    const { otherPurchaseLoc } = this.parent;
    if (!value && !otherPurchaseLoc) {
      return false;
    }
    return true;
  }),
  otherPurchaseLoc: yup.string().when('purchaseLocation', {
    is: 'other',
    then: (schema) => schema.required("Please specify 'Other' purchase location."),
    otherwise: (schema) => schema.notRequired(),
  }),

  purchaseForSalesLocation: yup
    .string()
    .test('is-required-conditional-sales', 'Purchase for sales location is required.', function (value) {
      const { otherPurchaseForSalesLoc } = this.parent;
      if (!value && !otherPurchaseForSalesLoc) {
        return false;
      }
      return true;
    }),
  otherPurchaseForSalesLoc: yup.string().when('purchaseForSalesLocation', {
    is: 'other',
    then: (schema) => schema.required("Please specify 'Other' purchase for sales location."),
    otherwise: (schema) => schema.notRequired(),
  }),
  selectedParty: yup.string().required('Please select one option'),
  grnProducts: yup
    .array()
    .of(
      yup.object().shape({
        productName: yup.string().required('Select at least one product'),
        quantity: yup.number().required('Quantity is required').min(0, "Quantity can't be negative"),
        unitPrice: yup.number().required('Unit price is required').min(0, "Price can't be negative"),
        grossWeight: yup.number().required('Gross weight is required').min(0, "Weight can't be negative"),
        packingMaterialWeight: yup
          .number()
          .required('Packing material weight is required')
          .min(0, "Weight can't be negative"),
        purchaseDate: dateSchema.required('Purchase Date is required'),
        dispatchDate: dateSchema.required('Dispatch Date is required'),
        deliveryDate: dateSchema.required('Delivery Date is required'),
        deliveryLocation: yup.string().required('Delivery Location is required'),
        expectedHarvestDate: yup.date().nullable(),
        rtv: yup.boolean().required('Select is product rtv or not'),
      })
    )
    .required('At lease one product required'),
  freight: yup.number().nullable().min(0,"Amount can't be negative"),
  otherCharges: yup.number().nullable().min(0,"Amount can't be negative"),
  paymentInfo: yup
    .object()
    .shape({
      paymentMode: yup.string().required('Payment Mode is required'),
      creditPeriod: yup.number().required('Credit Period is required').min(0, 'Credit Period must be positive'),
      paymentDate: dateSchema.required('Payment Date is required'),
      paymentTerms: yup.number().required('Payment Terms is required').positive('Payment Terms must be positive'),
      advancePaidAmt: yup.number().nullable().min(0,'Amount must be positive'),
      remainingAmt: yup.number().nullable().min(0,'Amount must be positive'),
    })
    .required('Payment Information is required'),
  purchasedBy: yup.string().nullable().matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
  receivedThrough: yup.string().nullable().matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
  securityPerson: yup.string().nullable().matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
  vehicleNo: yup.string().nullable().matches(REGEX.IS_VEHICLE_NO, 'Please enter valid vehicle number.'),
  cratesIn: yup.number().nullable().min(0,"Count of crates can't be negative"),
  deliveryReceivingPerson: yup
    .string()
    .required('Delivery receiving person name is required')
    .matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
  rmn: yup.string().required('RM name is required').matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
});

export const grnSchemaForUpdate = yup.object().shape({
  companyName: yup.string().required('Company Name is required'),
  purchaseInstructionsBy: yup
    .string()
    .required('Requesting person name required'),
  purchaseLocation: yup.string().test('is-required-conditional', 'Purchase location is required.', function (value) {
    const { otherPurchaseLoc } = this.parent;
    if (!value && !otherPurchaseLoc) {
      return false;
    }
    return true;
  }),
  otherPurchaseLoc: yup.string().when('purchaseLocation', {
    is: 'other',
    then: (schema) => schema.required("Please specify 'Other' purchase location."),
    otherwise: (schema) => schema.notRequired(),
  }),

  purchaseForSalesLocation: yup
    .string()
    .test('is-required-conditional-sales', 'Purchase for sales location is required.', function (value) {
      const { otherPurchaseForSalesLoc } = this.parent;
      if (!value && !otherPurchaseForSalesLoc) {
        return false;
      }
      return true;
    }),
  otherPurchaseForSalesLoc: yup.string().when('purchaseForSalesLocation', {
    is: 'other',
    then: (schema) => schema.required("Please specify 'Other' purchase for sales location."),
    otherwise: (schema) => schema.notRequired(),
  }),
  selectedParty: yup.string().required('Please select one option'),
  grnProducts: yup
    .array()
    .of(
      yup.object().shape({
        productName: yup.string().required('Select at least one product'),
        quantity: yup.number().required('Quantity is required').min(0, "Quantity can't be negative"),
        unitPrice: yup.number().required('Unit price is required').min(0, "Price can't be negative"),
        grossWeight: yup.number().required('Gross weight is required').min(0, "Weight can't be negative"),
        packingMaterialWeight: yup
          .number()
          .required('Packing material weight is required')
          .min(0, "Weight can't be negative"),
        purchaseDate: yup.string().required('Purchase Date is required'),
        dispatchDate: yup.string().required('Dispatch Date is required'),
        deliveryDate: yup.string().required('Delivery Date is required'),
        deliveryLocation: yup.string().required('Delivery Location is required'),
        // expectedHarvestDate: yup.date().nullable(),
        rtv: yup.boolean().required('Select is product rtv or not'),
      })
    )
    .required('At lease one product required'),
  freight: yup.number().nullable().min(0,"Amount can't be negative"),
  otherCharges: yup.number().nullable().min(0,"Amount can't be negative"),
  paymentInfo: yup
    .object()
    .shape({
      paymentMode: yup.string().required('Payment Mode is required'),
      creditPeriod: yup.number().required('Credit Period is required').min(0, 'Credit Period must be positive'),
      paymentDate: yup.string().required('Payment Date is required'),
      paymentTerms: yup.number().required('Payment Terms is required').positive('Payment Terms must be positive'),
      advancePaidAmt: yup.number().nullable().min(0,'Amount must be positive'),
      remainingAmt: yup.number().nullable().min(0,'Amount must be positive'),
    })
    .required('Payment Information is required'),
  purchasedBy: yup.string().nullable().matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
  receivedThrough: yup.string().nullable().matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
  securityPerson: yup.string().nullable().matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
  vehicleNo: yup.string().nullable().matches(REGEX.IS_VEHICLE_NO, 'Please enter valid vehicle number.'),
  cratesIn: yup.number().nullable().min(0,"Count of crates can't be negative"),
  deliveryReceivingPerson: yup
    .string()
    .required('Delivery receiving person name is required')
    .matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
  rmn: yup.string().required('RM name is required').matches(REGEX.IS_STRING, 'Name should only contain alphabets.'),
});
