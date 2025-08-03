/* eslint-disable @typescript-eslint/no-explicit-any */
import { numToWords } from "@prime-fresh/purchase/modules";
import { FormikHelpers } from "formik";
import { GetReturnByCustomer, PostReturnByCustomer, ReturnedProducts } from "@prime-fresh/sales_api";

const recalcTotalAmt = (products: PostReturnByCustomer["returnedProducts"]): number =>
  products.reduce((sum: number, prod: ReturnedProducts) => sum + (Number(prod.amount) || 0), 0);

const recalcTotalQty = (products: PostReturnByCustomer["returnedProducts"]): number =>
  products.reduce((sum: number, prod: ReturnedProducts) => sum + (Number(prod.netWeight) || 0), 0);


export const handleRemoveProduct = (
  index: number,
  values: PostReturnByCustomer | GetReturnByCustomer,
  setFieldValue: FormikHelpers<PostReturnByCustomer>["setFieldValue"]
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
  newProduct: PostReturnByCustomer["returnedProducts"][0],
  values: PostReturnByCustomer | GetReturnByCustomer,
  setFieldValue: FormikHelpers<PostReturnByCustomer>["setFieldValue"]
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
