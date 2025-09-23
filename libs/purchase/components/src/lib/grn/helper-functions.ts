/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductPartialData } from '@prime-fresh/common_api';
import { numToWords } from '@prime-fresh/purchase/modules';
import { IGRN } from '@prime-fresh/purchase_api';
import { FormikHelpers} from 'formik';

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

const recalcTotal = (products: IGRN['grnProducts']): number =>
  products.reduce((sum, prod) => sum + (Number(prod.amount) || 0), 0);

export const handleRemoveProduct = (
  index: number,
  formik: any,
  // values: Omit<IGRN, 'id'>,
  // setFieldValue: FormikHelpers<IGRN>['setFieldValue']
): void => {
  const updatedProducts = formik.values.grnProducts.filter((_: any, i: number) => i !== index);
  const newSubtotal = recalcTotal(updatedProducts);
  const newTotal = newSubtotal + (Number(formik.values.freight) || 0) + (Number(formik.values.otherCharges) || 0);
  formik.setFieldValue('grnProducts', updatedProducts, false);
  formik.setFieldValue('subTotalAmt', newSubtotal, false);
  formik.setFieldValue('totalAmt', newTotal, false);
  formik.setFieldValue('amtWords', numToWords(newTotal), true);
};

export const handlePushProduct = (
  newProduct: Omit<IGRN, 'id'>['grnProducts'][0],
  formik: any,
  // values: Omit<IGRN, 'id'>,
  // setFieldValue: FormikHelpers<IGRN>['setFieldValue']
): void => {
  const updatedProducts = [...formik.values.grnProducts, newProduct];
  const newSubtotal = recalcTotal(updatedProducts);
  const newTotal = newSubtotal + (Number(formik.values.freight) || 0) + (Number(formik.values.otherCharges) || 0);
  formik.setFieldValue('grnProducts', updatedProducts, false);
  formik.setFieldValue('subTotalAmt', newSubtotal, false);
  formik.setFieldValue('totalAmt', newTotal, false);
  formik.setFieldValue('amtWords', numToWords(newTotal), true);
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
  formik: any
  // values: Omit<IGRN, 'id'>,
  // setFieldValue: FormikHelpers<IGRN>['setFieldValue']
): void => {
  if (index !== null) {
    // Update a product field.
    const updatedProducts = [...formik.values.grnProducts];
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
    formik.setFieldValue('grnProducts', updatedProducts, false);

    // Recalculate subtotal from updated products.
    const newSubTotal = recalcTotal(updatedProducts);
    formik.setFieldValue('subTotalAmt', newSubTotal, false);

    // Calculate totalAmt from subtotal plus top-level freight and otherCharges.
    const currentFreight = Number(formik.values.freight) || 0;
    const currentOtherCharges = Number(formik.values.otherCharges) || 0;
    const newTotal = newSubTotal + currentFreight + currentOtherCharges;
    formik.setFieldValue('totalAmt', newTotal, false);
    formik.setFieldValue('amtWords', numToWords(newTotal), true);
  } else {
    // Update top-level field: freight or otherCharges.
    // Assert that fieldName is one of TopLevelField.
    const topField = fieldName as TopLevelField;
    formik.setFieldValue(topField, newValue, false);

    const updatedFreight = topField === 'freight' ? newValue : Number(formik.values.freight) || 0;
    const updatedOtherCharges = topField === 'otherCharges' ? newValue : Number(formik.values.otherCharges) || 0;
    const newTotal = (formik.values.subTotalAmt || 0) + updatedFreight + updatedOtherCharges;
    formik.setFieldValue('totalAmt', newTotal, false);
    formik.setFieldValue('amtWords', numToWords(newTotal), true);
  }
};
export const handleGRNProductsUpdateChange = (
  index: number | null,
  fieldName: AllowedFieldUpdate,
  newValue: any,
  values: IGRN,
  setFieldValue: FormikHelpers<IGRN>['setFieldValue']
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

export const handleCalculateRemainingAmt = (newValue: any, formik: any) => {
  formik.setFieldValue('paymentInfo.advancePaidAmt', newValue);
  const remainingAmt = Number(formik.values.totalAmt) - newValue;
  formik.setFieldValue('paymentInfo.remainingAmt', remainingAmt);
}