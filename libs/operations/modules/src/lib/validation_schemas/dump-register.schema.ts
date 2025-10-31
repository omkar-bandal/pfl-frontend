import * as yup from 'yup';

export const dumpRegisterSchema = yup.object().shape({
  companyName: yup.string().required('Company name is required.'),
  location: yup.string().required('Location is required'),
  date: yup.string().required('Date is required'),
  batchNo: yup.string().nullable(),
  grn: yup.string().nullable(),
  dumpProducts: yup.array(
    yup.object({
      productName: yup.string().required('Product name is required'),
      uom: yup.string().required('UOM No is required'),
      quantity: yup.number().required('Quantity is required').min(0, 'Quantity cannot be negative.'),
      unitPrice: yup.number().required('Unit price is required.').min(0, 'Unit price cannot be negative'),
    })
  ),
  remark: yup.string().nullable(),
});
