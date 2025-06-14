/* eslint-disable @typescript-eslint/no-explicit-any */
import { numToWords } from '@prime-fresh/purchase/modules';
import { GetGRN, GRNProducts, IGRN, PostGRN } from '@prime-fresh/purchase_api';
import { ProductPartialData } from '@prime-fresh/admin_api';
import { FormikHelpers, FormikProps } from 'formik';
import { ChangeEvent } from 'react';
import { useGetProductById } from '@prime-fresh/admin/modules';

export const getProductCount = (productId: string | null, products: ProductPartialData[] | null | undefined) => {
  if (products !== null && productId !== null) {
    const counts = products?.find((product) => product.id === productId)?.count;
    return counts?.map((count) => {
      return { label: count, value: count };
    });
  } else {
    return [];
  }
};

export const getProductSizes = (productId: string | null, products: ProductPartialData[] | null | undefined) => {
  if (products !== null && productId !== null) {
    const sizes = products?.find((product) => product.id === productId)?.size;
    return sizes?.map((size) => {
      return { label: size, value: size };
    });
  } else {
    return [];
  }
};

export const getProductOrigin = (productId: string | null, products: ProductPartialData[] | null | undefined) => {
  if (products !== null && productId !== null) {
    return products?.find((product) => product.id === productId)?.productOrigin;
  } else {
    return '';
  }
};
export const getSelectedProductData = (productId: string | null, products: ProductPartialData[] | null | undefined) => {
  if (products !== null && productId !== null) {
    return products?.find((product) => product.id === productId);
  } else {
    return null;
  }
};

const recalcTotal = (products: PostGRN['grnProducts']): number =>
  products.reduce((sum, prod) => sum + (Number(prod.amount) || 0), 0);

export const handleRemoveProduct = (
  index: number,
  values: PostGRN | GetGRN | Omit<IGRN, 'id'>,
  setFieldValue: FormikHelpers<PostGRN>['setFieldValue']
): void => {
  const updatedProducts = values.grnProducts.filter((_, i) => i !== index);
  const newSubtotal = recalcTotal(updatedProducts);
  const newTotal = newSubtotal + (Number(values.freight) || 0) + (Number(values.otherCharges) || 0);
  setFieldValue('grnProducts', updatedProducts, false);
  setFieldValue('subTotalAmt', newSubtotal, false);
  setFieldValue('totalAmt', newTotal, false);
  setFieldValue('amtWords', numToWords(newTotal), true);
};

export const handlePushProduct = (
  newProduct: PostGRN['grnProducts'][0],
  values: PostGRN | GetGRN | Omit<IGRN, 'id'>,
  setFieldValue: FormikHelpers<PostGRN>['setFieldValue']
): void => {
  const updatedProducts = [...values.grnProducts, newProduct];
  const newSubtotal = recalcTotal(updatedProducts);
  const newTotal = newSubtotal + (Number(values.freight) || 0) + (Number(values.otherCharges) || 0);
  setFieldValue('grnProducts', updatedProducts, false);
  setFieldValue('subTotalAmt', newSubtotal, false);
  setFieldValue('totalAmt', newTotal, false);
  setFieldValue('amtWords', numToWords(newTotal), true);
};
// Allowed fields for product items (excluding non-numeric fields such as "productName")
export type GrnProductField = 'quantity' | 'unitPrice' | 'packingMaterialWeight' | 'grossWeight';
export type GrnProductFieldUpdate = 'revisedQuantity' | 'revisedRate';

// Allowed top-level fields
export type TopLevelField = 'freight' | 'otherCharges';

// Combined union type
export type AllowedField = GrnProductField | TopLevelField;

export type AllowedFieldUpdate = GrnProductFieldUpdate | AllowedField;

export const handleGRNProductsChange = (
  index: number | null,
  fieldName: AllowedField,
  newValue: any,
  values: PostGRN | Omit<IGRN, 'id'>,
  setFieldValue: FormikHelpers<PostGRN>['setFieldValue']
): void => {
  if (index !== null) {
    // Update a product field.
    const updatedProducts = [...values.grnProducts];
    // Here we assert that fieldName is one of GrnProductField.
    const productField = fieldName as GrnProductField;
    const product = { ...updatedProducts[index] };

    // Update the product's field.
    product[productField] = newValue;

    // Recalculate product.amount if quantity or unitPrice changed.
    if (productField === 'quantity' || productField === 'unitPrice') {
      product.amount = Number(product.quantity) * Number(product.unitPrice);
    }
    // Recalculate netWeight.
    // netWeight = grossWeight + ((packingMaterialWeight * quantity) / 1000)
    product.netWeight = product.packingMaterialWeight
      ? Number(product.grossWeight) - (product.packingMaterialWeight * Number(product.quantity)) / 1000
      : product.grossWeight;

    updatedProducts[index] = product;
    setFieldValue('grnProducts', updatedProducts, false);

    // Recalculate subtotal from updated products.
    const newSubTotal = recalcTotal(updatedProducts);
    setFieldValue('subTotalAmt', newSubTotal, false);

    // Calculate totalAmt from subtotal plus top-level freight and otherCharges.
    const currentFreight = Number(values.freight) || 0;
    const currentOtherCharges = Number(values.otherCharges) || 0;
    const newTotal = newSubTotal + currentFreight + currentOtherCharges;
    setFieldValue('totalAmt', newTotal, false);
    setFieldValue('amtWords', numToWords(newTotal), true);
  } else {
    // Update top-level field: freight or otherCharges.
    // Assert that fieldName is one of TopLevelField.
    const topField = fieldName as TopLevelField;
    setFieldValue(topField, newValue, false);

    const updatedFreight = topField === 'freight' ? newValue : Number(values.freight) || 0;
    const updatedOtherCharges = topField === 'otherCharges' ? newValue : Number(values.otherCharges) || 0;
    const newTotal = (values.subTotalAmt || 0) + updatedFreight + updatedOtherCharges;
    setFieldValue('totalAmt', newTotal, false);
    setFieldValue('amtWords', numToWords(newTotal), true);
  }
};
export const handleGRNProductsUpdateChange = (
  index: number | null,
  fieldName: AllowedFieldUpdate,
  newValue: any,
  values: PostGRN | GetGRN,
  setFieldValue: FormikHelpers<GetGRN>['setFieldValue']
): void => {
  if (index !== null) {
    // Update a product field.
    const updatedProducts = [...values.grnProducts];
    // Here we assert that fieldName is one of GrnProductField.
    const productField = fieldName as GrnProductFieldUpdate | GrnProductField;
    const product = { ...updatedProducts[index] };

    // Update the product's field.
    product[productField] = newValue;

    // Recalculate product.amount if quantity or unitPrice changed.
    if (product.amount !== null && (productField === 'revisedQuantity' || productField === 'revisedRate')) {
      product.amount = Number(product.revisedQuantity) * Number(product.revisedRate);
    }

    if (product.amount === null && (productField === 'quantity' || productField === 'unitPrice')) {
      product.amount = Number(product.quantity) * Number(product.unitPrice);
    }
    // Recalculate netWeight.
    // netWeight = grossWeight + ((packingMaterialWeight * quantity) / 1000)
    product.netWeight = product.packingMaterialWeight
      ? Number(product.grossWeight) - (product.packingMaterialWeight * Number(product.quantity)) / 1000
      : product.grossWeight;

    updatedProducts[index] = product;
    setFieldValue('grnProducts', updatedProducts, false);

    // Recalculate subtotal from updated products.
    const newSubTotal = recalcTotal(updatedProducts);
    setFieldValue('subTotalAmt', newSubTotal, false);

    // Calculate totalAmt from subtotal plus top-level freight and otherCharges.
    const currentFreight = Number(values.freight) || 0;
    const currentOtherCharges = Number(values.otherCharges) || 0;
    const newTotal = newSubTotal + currentFreight + currentOtherCharges;
    setFieldValue('totalAmt', newTotal, false);
    setFieldValue('amtWords', numToWords(newTotal), true);
  } else {
    // Update top-level field: freight or otherCharges.
    // Assert that fieldName is one of TopLevelField.
    const topField = fieldName as TopLevelField;
    setFieldValue(topField, newValue, false);

    const updatedFreight = topField === 'freight' ? newValue : Number(values.freight) || 0;
    const updatedOtherCharges = topField === 'otherCharges' ? newValue : Number(values.otherCharges) || 0;
    const newTotal = (values.subTotalAmt || 0) + updatedFreight + updatedOtherCharges;
    setFieldValue('totalAmt', newTotal, false);
    setFieldValue('amtWords', numToWords(newTotal), true);
  }
};

export const calculateDueDate = (paymentDate: string | null, paymentTerms: number | null): string => {
  if (!paymentDate) return '';
  const date = new Date(paymentDate);
  if (paymentTerms !== null && paymentTerms !== undefined) {
    date.setDate(date.getDate() + paymentTerms);
  }
  return date.toISOString().split('T')[0];
};

// export const handleGRNProductsUpdateChange = (
//   index: number,
//   field: 'revisedQuantity' | 'revisedRate' | "packingMaterialWeight" | "grossWeight",
//   value: any,
//   values: GetGRN | PostGRN,
//   setFieldValue: FormikHelpers<GetGRN>['setFieldValue']
// ) => {
//   // Update the changed field
//   setFieldValue(`grnProducts[${index}].${field}`, Number(value));

//   // Get the current values for quantity and unitPrice
//   const currentProduct = values.grnProducts[index];
//   const revisedQuantity =
//     field === 'revisedQuantity' ? Number(value) : Number(currentProduct.revisedQuantity);
//   const revisedRate =
//     field === 'revisedRate' ? Number(value) : Number(currentProduct.revisedRate);
//   const packingMaterialWeight =
//     field === 'packingMaterialWeight' ? Number(value) : Number(currentProduct.packingMaterialWeight);
//   const grossWeight =
//     field === 'grossWeight' ? Number(value) : Number(currentProduct.grossWeight);

//   // Calculate the new amount for the product
//   const newAmount = revisedQuantity * revisedRate;
//   setFieldValue(`grnProducts[${index}].amount`, newAmount);

//   const newNetWeight = grossWeight - ((packingMaterialWeight * revisedQuantity) / 1000);
//   setFieldValue(`grnProducts[${index}].netWeight`, newNetWeight);

//   // Recalculate the subtotal by summing up all product amounts
//   const newSubtotal = values.grnProducts.reduce((sum, prod, i) => {
//     // If we are at the current index, use the newAmount instead of the existing value
//     const prodAmount = i === index ? newAmount : prod.amount;
//     return sum + (Number(prodAmount) || 0);
//   }, 0);
//   setFieldValue('subTotalAmt', newSubtotal);

//   // Recalculate the totalAmt using the updated subtotal, current freight, and otherCharges
//   const freight = Number(values.freight) || 0;
//   const otherCharges = Number(values.otherCharges) || 0;
//   const newTotal = newSubtotal + freight + otherCharges;
//   setFieldValue('totalAmt', newTotal);
//   const newTotalAmountInWords = numToWords(newTotal);
//   setFieldValue('amtWords', newTotalAmountInWords);
// };

// // Handler for changing freight or otherCharges
// export const calculateTotalAmount = (
//   field: 'freight' | 'otherCharges',
//   value: any,
//   values: PostGRN | GetGRN,
//   setFieldValue: FormikHelpers<PostGRN | GetGRN>['setFieldValue']
// ) => {
//   setFieldValue(field, Number(value));

//   // Recalculate totalAmt using the current subtotalAmt plus freight and otherCharges
//   const subtotal = Number(values.subTotalAmt) || 0;
//   // Depending on which field changed, update that value and use the current value of the other
//   const freight = field === 'freight' ? Number(value) : Number(values.freight);
//   const otherCharges =
//     field === 'otherCharges' ? Number(value) : Number(values.otherCharges);
//   const totalAmount = subtotal + freight + otherCharges;
//   setFieldValue('totalAmt', subtotal + freight + totalAmount);
//   const newTotalAmountInWords = numToWords(totalAmount);
//   setFieldValue('amtWords', newTotalAmountInWords);
// };
