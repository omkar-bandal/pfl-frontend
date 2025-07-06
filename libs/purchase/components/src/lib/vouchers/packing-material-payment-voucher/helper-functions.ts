/* eslint-disable @typescript-eslint/no-explicit-any */
import { numToWords } from "@prime-fresh/shared/modules";

export const calculateAmounts = (
  index: number,
  field: 'itemQty' | 'rate',
  value: any,
  formik: any
) => {
  // Update the changed field
  formik.setFieldValue(`materials[${index}].${field}`, Number(value));

  // Get the current values for quantity and unitPrice
  const currentProduct = formik.values.materials[index];
  const itemQty =
    field === 'itemQty' ? Number(value) : Number(currentProduct.itemQty);
  const rate =
    field === 'rate' ? Number(value) : Number(currentProduct.rate);

  // Calculate the new amount for the product
  const newAmount = itemQty * rate;
  formik.setFieldValue(`materials[${index}].amt`, newAmount);


  // Recalculate the subtotal by summing up all product amounts
  const newTotal = formik.values.materials.reduce((sum: number, prod: { amt: any; }, i: number) => {
    // If we are at the current index, use the newAmount instead of the existing value
    const prodAmount = i === index ? newAmount : prod.amt;
    return sum + (Number(prodAmount) || 0);
  }, 0);
  formik.setFieldValue('totalAmt', newTotal);
  const newTotalAmountInWords = numToWords(newTotal);
  formik.setFieldValue('amtWords', newTotalAmountInWords);
};
