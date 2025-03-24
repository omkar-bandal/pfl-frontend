/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductPartialData } from "@prime-fresh/common_api";
import { PostInwardRegister } from "@prime-fresh/inventory_api";
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

  export const getProductBrand = (productId: string | null, products: ProductPartialData[] | null | undefined) => {
    if (products !== null && productId !== null) {
      return products?.find(product => product.id === productId)?.brand;   
    } else {
      return "";
    }
  }

  export const handleInwardProductsChange = (
    index: number,
    field: 'qty' | "productContainerWeight" | "grossWeight",
    value: any,
    values: PostInwardRegister,
    setFieldValue: FormikHelpers<PostInwardRegister>['setFieldValue']
  ) => {
    // Update the changed field
    setFieldValue(`inwardProducts[${index}].${field}`, Number(value));

    // Get the current values for quantity and unitPrice
    const currentProduct = values.inwardProducts[index];
    const quantity =
      field === 'qty' ? Number(value) : Number(currentProduct.qty);
    const packingMaterialWeight = 
    field === 'productContainerWeight' ? Number(value) : Number(currentProduct.productContainerWeight);
    const grossWeight =
    field === 'grossWeight' ? Number(value) : Number(currentProduct.grossWeight);
  
    const newNetWeight = grossWeight - ((packingMaterialWeight * quantity)/ 1000);
    setFieldValue(`inwardProducts.${index}.netWeight`, newNetWeight);
  };
  