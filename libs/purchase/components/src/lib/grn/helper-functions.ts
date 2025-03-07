/* eslint-disable @typescript-eslint/no-explicit-any */
import { numToWords } from "@prime-fresh/purchase/modules";
import { GetGRN, PostGRN } from "@prime-fresh/purchase_api";
import {ProductPartialData} from "@prime-fresh/admin_api";
import { FormikHelpers } from "formik";

export const getProductCount = (productId: string | null, products: ProductPartialData[] | null | undefined  ) => {
  if (products !== null && productId !== null) {
    const counts = products?.find(product => product.id === productId)?.count;
    return counts?.map(count => { return { label: count, value: count } })
  } else {
    return [];
  }
}

export const getProductSizes = (productId: string | null, products: ProductPartialData[] | null | undefined) => {
  if (products !== null && productId !== null) {
    const sizes = products?.find(product => product.id === productId)?.size;
    return sizes?.map(size => { return { label: size, value: size } })
  } else {
    return [];
  }
}

export const getProductOrigin = (productId: string | null, products: ProductPartialData[] | null | undefined) => {
  if (products !== null && productId !== null) {
    return products?.find(product => product.id === productId)?.productOrigin;   
  } else {
    return "";
  }
}

export const handleGRNProductsChange = (
    index: number,
    field: 'quantity' | 'unitPrice' | "packingMaterialWeight" | "grossWeight",
    value: any,
    values: PostGRN,
    setFieldValue: FormikHelpers<PostGRN>['setFieldValue']
  ) => {
    // Update the changed field
    setFieldValue(`grnProducts[${index}].${field}`, Number(value));

    // Get the current values for quantity and unitPrice
    const currentProduct = values.grnProducts[index];
    const quantity =
      field === 'quantity' ? Number(value) : Number(currentProduct.quantity);
    const unitPrice =
      field === 'unitPrice' ? Number(value) : Number(currentProduct.unitPrice);
    const packingMaterialWeight = 
    field === 'packingMaterialWeight' ? Number(value) : Number(currentProduct.packingMaterialWeight);
    const grossWeight =
    field === 'grossWeight' ? Number(value) : Number(currentProduct.grossWeight);
    // Calculate the new amount for the product
    const newAmount = quantity * unitPrice;
    setFieldValue(`grnProducts[${index}].amount`, newAmount);

    const newNetWeight = grossWeight - ((packingMaterialWeight * quantity)/ 1000);
    setFieldValue(`grnProducts[${index}].netWeight`, newNetWeight);

    // Recalculate the subtotal by summing up all product amounts
    const newSubtotal = values.grnProducts.reduce((sum, prod, i) => {
      // If we are at the current index, use the newAmount instead of the existing value
      const prodAmount = i === index ? newAmount : prod.amount;
      return sum + (Number(prodAmount) || 0);
    }, 0);
    setFieldValue('subTotalAmt', newSubtotal);

    // Recalculate the totalAmt using the updated subtotal, current freight, and otherCharges
    const freight = Number(values.freight) || 0;
    const otherCharges = Number(values.otherCharges) || 0;
    const newTotal = newSubtotal + freight + otherCharges;
    setFieldValue('totalAmt', newTotal);
    const newTotalAmountInWords = numToWords(newTotal);
    setFieldValue('amtWords', newTotalAmountInWords);
  };


export const handleGRNProductsUpdateChange = (
    index: number,
    field: 'revisedQuantity' | 'revisedRate' | "packingMaterialWeight" | "grossWeight",
    value: any,
    values: GetGRN | PostGRN,
    setFieldValue: FormikHelpers<GetGRN>['setFieldValue']
  ) => {
    // Update the changed field
    setFieldValue(`grnProducts[${index}].${field}`, Number(value));

    // Get the current values for quantity and unitPrice
    const currentProduct = values.grnProducts[index];
    const revisedQuantity =
      field === 'revisedQuantity' ? Number(value) : Number(currentProduct.revisedQuantity);
    const revisedRate =
      field === 'revisedRate' ? Number(value) : Number(currentProduct.revisedRate);
    const packingMaterialWeight = 
    field === 'packingMaterialWeight' ? Number(value) : Number(currentProduct.packingMaterialWeight);
    const grossWeight =
    field === 'grossWeight' ? Number(value) : Number(currentProduct.grossWeight);

    // Calculate the new amount for the product
    const newAmount = revisedQuantity * revisedRate;
    setFieldValue(`grnProducts[${index}].amount`, newAmount);

    const newNetWeight = grossWeight - ((packingMaterialWeight * revisedQuantity)/ 1000);
    setFieldValue(`grnProducts[${index}].netWeight`, newNetWeight);

    // Recalculate the subtotal by summing up all product amounts
    const newSubtotal = values.grnProducts.reduce((sum, prod, i) => {
      // If we are at the current index, use the newAmount instead of the existing value
      const prodAmount = i === index ? newAmount : prod.amount;
      return sum + (Number(prodAmount) || 0);
    }, 0);
    setFieldValue('subTotalAmt', newSubtotal);

    // Recalculate the totalAmt using the updated subtotal, current freight, and otherCharges
    const freight = Number(values.freight) || 0;
    const otherCharges = Number(values.otherCharges) || 0;
    const newTotal = newSubtotal + freight + otherCharges;
    setFieldValue('totalAmt', newTotal);
    const newTotalAmountInWords = numToWords(newTotal);
    setFieldValue('amtWords', newTotalAmountInWords);
  };

  // Handler for changing freight or otherCharges
  export const calculateTotalAmount = (
    field: 'freight' | 'otherCharges',
    value: any,
    values: PostGRN | GetGRN,
    setFieldValue: FormikHelpers<PostGRN | GetGRN>['setFieldValue']
  ) => {
    setFieldValue(field, Number(value));

    // Recalculate totalAmt using the current subtotalAmt plus freight and otherCharges
    const subtotal = Number(values.subTotalAmt) || 0;
    // Depending on which field changed, update that value and use the current value of the other
    const freight = field === 'freight' ? Number(value) : Number(values.freight);
    const otherCharges =
      field === 'otherCharges' ? Number(value) : Number(values.otherCharges);
    const totalAmount = subtotal + freight + otherCharges;
    setFieldValue('totalAmt', subtotal + freight + totalAmount);
    const newTotalAmountInWords = numToWords(totalAmount);
    setFieldValue('amtWords', newTotalAmountInWords);
  };

