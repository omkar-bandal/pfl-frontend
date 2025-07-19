/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISecondSaleRegister, ISecondSaleProducts } from "@prime-fresh/inventory_api";
import { numToWords } from "@prime-fresh/shared/modules";
import { FormikHelpers } from "formik";

// export const normalizeData = (data: ISecondSaleRegister): ISecondSaleRegister => {
//     return {
//       ...data,
//       companyName: data.companyName ? data.companyName.id : null,
//       location: data.location ? data.location.id : null,
//       dcNo: data.dcNo ? data.dcNo.id : null,
//       secondSaleProducts: data.secondSaleProducts.map(product => ({
//         ...product,
//         productName: product.productName ? product.productName.id : null,
//         uom: product.uom ? product.uom.id : null,
//       })),
//     };
//   };

const recalcTotalWeight = (products: ISecondSaleProducts[]): number =>
    products.reduce((sum, prod) => sum + (Number(prod.netWeight) || 0), 0);

const recalcTotalAmt = (products: ISecondSaleProducts[]): number =>
    products.reduce((sum, prod) => sum + (Number(prod.amount) || 0), 0);
  
  export const handleRemoveProduct = (
    index: number,
    values: Omit<ISecondSaleRegister, 'id'>,
    setFieldValue: FormikHelpers<ISecondSaleRegister>["setFieldValue"]
  ): void => {
    const updatedProducts = values.secondSaleProducts.filter((_, i) => i !== index);
    const newTotalNetWt = recalcTotalWeight(updatedProducts);
    const newTotalAmt = recalcTotalAmt(updatedProducts);
    setFieldValue("secondSaleProducts", updatedProducts, false);
    setFieldValue("totalNetWeight", newTotalNetWt, false);
    setFieldValue("totalAmt", newTotalAmt, false);
    setFieldValue("totalAmtInWords", numToWords(newTotalAmt), false);
  };
  
  export const handlePushProduct = (
    newProduct: ISecondSaleRegister["secondSaleProducts"][0],
    values: Omit<ISecondSaleRegister, 'id'>,
    setFieldValue: FormikHelpers<ISecondSaleRegister>["setFieldValue"]
  ): void => {
    const updatedProducts = [...values.secondSaleProducts, newProduct];
    const newTotalNetWt = recalcTotalWeight(updatedProducts);
    const newTotalAmt = recalcTotalAmt(updatedProducts);
    setFieldValue("secondSaleProducts", updatedProducts, false);
    setFieldValue("totalNetWeight", newTotalNetWt, false);
    setFieldValue("totalAmt", newTotalAmt, false);
    setFieldValue("totalAmtInWords", numToWords(newTotalAmt), false);
  };

  export const handleSecondSaleProductsChange = ( 
    index: number | null,
    fieldName: "quantity" | "unitPrice" | "packingMaterialWeight" | "grossWeight",
    newValue: any,
    values: Omit<ISecondSaleRegister, 'id'>,
    setFieldValue: FormikHelpers<ISecondSaleRegister>['setFieldValue']
  ): void => {
    if (index !== null) {
      const updatedProducts = [...values.secondSaleProducts];
      const product = { ...updatedProducts[index] };
      product[fieldName] = newValue;
      product.amount = Number(product.quantity) * Number(product.unitPrice);
      product.netWeight = product.packingMaterialWeight
        ? Number(product.grossWeight) - ((product.packingMaterialWeight * Number(product.quantity)) / 1000)
        : product.grossWeight;
  
      updatedProducts[index] = product;
      setFieldValue("secondSaleProducts", updatedProducts, false);
  
      const newTotalAmt = recalcTotalAmt(updatedProducts);
      setFieldValue("totalAmt", newTotalAmt, false);
      console.log("Total Amt: ", values.totalAmt);
      const newTotalAmtInWords = numToWords(newTotalAmt);
      setFieldValue("totalAmtInWords", newTotalAmtInWords, false);
      console.log("In words: ", values.totalAmtInWords);

      const newTotalNetWt = Number(recalcTotalWeight(updatedProducts).toFixed(2));
      setFieldValue("totalNetWeight", newTotalNetWt, false);
    }
  }