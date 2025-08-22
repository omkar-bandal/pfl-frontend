/* eslint-disable @typescript-eslint/no-explicit-any */
import { numToWords } from "@prime-fresh/purchase/modules";
import { FormikHelpers } from "formik";
import { IReturnedProducts, IReturnByCustomer } from "@prime-fresh/inventory_api";

const recalcTotalAmt = (products: IReturnByCustomer["returnedProducts"]): number =>
  products.reduce((sum: number, prod: IReturnedProducts) => sum + (Number(prod.returnedQtyAmt) || 0), 0);

const recalcTotalQty = (products: IReturnByCustomer["returnedProducts"]): number =>
  products.reduce((sum: number, prod: IReturnedProducts) => sum + (Number(prod.returnedNetWt) || 0), 0);


export const handleRemoveProduct = (
  index: number,
  values: IReturnByCustomer,
  setFieldValue: FormikHelpers<IReturnByCustomer>["setFieldValue"]
): void => {
  const updatedProducts = values.returnedProducts.filter((_, i) => i !== index);
  const newTotalAmt = recalcTotalAmt(updatedProducts);
  const newTotalQty = recalcTotalQty(updatedProducts);
  setFieldValue("returnedProducts", updatedProducts, false);
  setFieldValue("totalPrice", newTotalAmt.toFixed(2), false);
  setFieldValue("amtInWords", numToWords(newTotalAmt), true);
  setFieldValue("totalQty", newTotalQty.toFixed(2), false);
};

export const handlePushProduct = (
  newProduct: IReturnByCustomer["returnedProducts"][0],
  values: IReturnByCustomer,
  setFieldValue: FormikHelpers<IReturnByCustomer>["setFieldValue"]
): void => {
  const updatedProducts = [...values.returnedProducts, newProduct];
  const newTotalAmt = recalcTotalAmt(updatedProducts);
  const newTotalQty = recalcTotalQty(updatedProducts);
  setFieldValue("returnedProducts", updatedProducts, false);
  setFieldValue("totalPrice", newTotalAmt.toFixed(2), false);
  setFieldValue("amtInWords", numToWords(newTotalAmt), true);
  setFieldValue("totalQty", newTotalQty.toFixed(2), false);
};

// Allowed fields for product items (excluding non-numeric fields such as "productName")
export type ReturnedProductField = "quantity" | "unitPrice" | "packingMaterialWeight" | "grossWeight";

export const handleReturnedProductsChange = (
  index: number | null,
  fieldName: ReturnedProductField,
  newValue: any,
  formik: any
): void => {
  if (index !== null) {
    // Update a product field.
    const updatedProducts = [...formik.values.returnedProducts];
    // Here we assert that fieldName is one of GrnProductField.
    const productField = fieldName as ReturnedProductField;
    const product = { ...updatedProducts[index] };

    // Update the product's field.
    product[productField] = newValue;

    // Recalculate product.amount if quantity or unitPrice changed.
    if (productField === "quantity" || productField === "unitPrice") {
      product.amount = Number(product.quantity) * Number(product.unitPrice);
    }
    // Recalculate netWeight.
    product.netWeight = product.packingMaterialWeight
      ? (Number(product.grossWeight) - Number(product.packingMaterialWeight))
      : product.grossWeight;

    updatedProducts[index] = product;
    formik.setFieldValue("returnedProducts", updatedProducts, false);

    // Recalculate total amount from updated products.
    const newTotalQty = recalcTotalQty(updatedProducts);
    formik.setFieldValue("totalQty", newTotalQty.toFixed(2), false);

    // Recalculate total amount from updated products.
    const newTotalAmt = recalcTotalAmt(updatedProducts);
    formik.setFieldValue("totalPrice", newTotalAmt.toFixed(2), false);
    formik.setFieldValue("amtInWords", numToWords(newTotalAmt), true);
  }
};

export const calculateReturnedQtyAmt = (event: React.ChangeEvent<HTMLInputElement>, index: number, formik: any) => {
  const { name, value } = event.target;
  formik.setFieldValue(name, value)
  const returnedQtyAmt = formik.values.returnedProducts[index].unitPrice * Number(value);
  formik.setFieldValue(`returnedProducts.${index}.returnedQtyAmt`, Number(returnedQtyAmt));
}

export const calculateReturnedNetWt = (event: React.ChangeEvent<HTMLInputElement>, index: number, formik: any) => {
  const { name, value } = event.target;
  formik.setFieldValue(name, value)
  const returnedNetWt = formik.values.returnedProducts[index].returnedGrossWt - formik.values.returnedProducts[index].returnedQty * formik.values.returnedProducts[index].returnedPackingMaterialWt;
  formik.setFieldValue(`returnedProducts.${index}.returnedNetWt`, Number(returnedNetWt));
}

export const calculateReturnedProductDetails = (
  event: React.ChangeEvent<HTMLInputElement>,
  index: number,
  formik: any
) => {
  const { name, value } = event.target;

  const fieldName = name.split('.').pop() as keyof IReturnedProducts;

  if (!fieldName) return;

  const updatedProducts = [...formik.values.returnedProducts];
  const product = updatedProducts[index];

  if (!product) return;

  if (
    [
      'returnedQty',
      'returnedUnitPrice',
      'returnedPackingMaterialWt',
      'returnedGrossWt',
    ].includes(fieldName)
  ) {
    const numericValue = isNaN(Number(value)) ? 0 : Number(value);
    if (fieldName === 'returnedQty')
      product.returnedQty = numericValue;
    // if (fieldName === 'returnedUnitPrice')
    //   product.returnedUnitPrice = numericValue;
    if (fieldName === 'returnedPackingMaterialWt')
      product.returnedPackingMaterialWt = numericValue;
    if (fieldName === 'returnedGrossWt')
      product.returnedGrossWt = numericValue;

  }
  product.returnedQtyAmt = (Number(product.returnedQty) || 0) * (Number(formik.values.returnedProducts[index].unitPrice) || 0);
  console.log('returned qty amt', product.returnedQtyAmt)
  formik.setFieldValue(
    `returnedProducts.${index}.returnedQtyAmt`,
    Number(product.returnedQtyAmt)
  );

  product.returnedNetWt = product.returnedGrossWt - ((product.returnedPackingMaterialWt / 1000) * product.returnedQty);
  formik.setFieldValue(
    `returnedProducts.${index}.returnedNetWt`,
    Number(product.returnedNetWt)
  );
};

export const calculateRejectedProductDetails = (
  event: React.ChangeEvent<HTMLInputElement>,
  index: number,
  formik: any
) => {
  const { name, value } = event.target;

  const fieldName = name.split('.').pop() as keyof IReturnedProducts;

  if (!fieldName) return;

  const updatedProducts = [...formik.values.returnedProducts];
  const product = updatedProducts[index];

  if (!product) return;

  if (
    [
      'rejectedQty',
      'rejectedUnitPrice',
      'rejectedPackingMaterialWt',
      'rejectedGrossWt',
    ].includes(fieldName)
  ) {
    const numericValue = isNaN(Number(value)) ? 0 : Number(value);
    if (fieldName === 'rejectedQty')
      product.rejectedQty = numericValue;
    // if (fieldName === 'rejectedUnitPrice')
    //   product.rejectedUnitPrice = numericValue;
    if (fieldName === 'rejectedPackingMaterialWt')
      product.rejectedPackingMaterialWt = numericValue;
    if (fieldName === 'rejectedGrossWt')
      product.rejectedGrossWt = numericValue;

  }
  product.rejectedQtyAmt = (Number(product.rejectedQty) || 0) * (Number(formik.values.returnedProducts[index].unitPrice) || 0);
  formik.setFieldValue(
    `returnedProducts.${index}.rejectedQtyAmt`,
    Number(product.rejectedQtyAmt)
  );

  product.rejectedNetWt = product.rejectedGrossWt - ((product.rejectedPackingMaterialWt / 1000) * product.rejectedQty);
  formik.setFieldValue(
    `returnedProducts.${index}.rejectedNetWt`,
    Number(product.rejectedNetWt)
  );
};