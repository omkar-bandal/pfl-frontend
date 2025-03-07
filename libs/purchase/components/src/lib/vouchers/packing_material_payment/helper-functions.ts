/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetPMPvoucher, PostPMPvoucher } from "@prime-fresh/purchase_api";
import { numToWords } from "@prime-fresh/shared/modules";

export const calculateAmounts = (
  index: number,
  field: 'itemQty' | 'rate',
  value: any,
  values: GetPMPvoucher | PostPMPvoucher,
  setFieldValue: any
) => {
  // Update the changed field
  setFieldValue(`materials[${index}].${field}`, Number(value));

  // Get the current values for quantity and unitPrice
  const currentProduct = values.materials[index];
  const itemQty =
    field === 'itemQty' ? Number(value) : Number(currentProduct.itemQty);
  const rate =
    field === 'rate' ? Number(value) : Number(currentProduct.rate);

  // Calculate the new amount for the product
  const newAmount = itemQty * rate;
  setFieldValue(`materials[${index}].amt`, newAmount);


  // Recalculate the subtotal by summing up all product amounts
  const newTotal = values.materials.reduce((sum, prod, i) => {
    // If we are at the current index, use the newAmount instead of the existing value
    const prodAmount = i === index ? newAmount : prod.amt;
    return sum + (Number(prodAmount) || 0);
  }, 0);
  setFieldValue('totalAmt', newTotal);
  const newTotalAmountInWords = numToWords(newTotal);
  setFieldValue('amtWords', newTotalAmountInWords);
};
