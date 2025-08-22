/* eslint-disable @typescript-eslint/no-explicit-any */
import { FarmerPartialData, GetAllDeliveryChallanNums, GetAllGRNNums, ProductPartialData, UOMPartialData, VendorPartialData } from "@prime-fresh/common_api";
import { IInwardRegister } from "@prime-fresh/inventory_api";

export const normalizeData = (data: IInwardRegister,
  allProducts: ProductPartialData[],
  allUoMs: UOMPartialData[],
  grnNo: GetAllGRNNums[],
  dcNo: GetAllDeliveryChallanNums[],
  allVendors: VendorPartialData[],
  allFarmers: FarmerPartialData[]
) => {
  return {
    ...data,
    grnNo: grnNo ? grnNo.find(no => no.id === data.grnNo)?.grnNo : '',
    deliveryChallanNo: dcNo ? dcNo?.find(no => no.id === data.deliveryChallanNo)?.challanNo : '',
    selectedParty: data.source === 'vendor' ?
      (allVendors ? allVendors?.find(vendor => vendor.id === data.selectedParty) : null) :
      (allFarmers ? allFarmers?.find(farmer => farmer.id === data.selectedParty) : null),
    inwardProducts: data.inwardProducts.map(product => ({
      ...product,
      productName: allProducts ? allProducts?.find(item => item.id === product.productName)?.name : '',
      uom: allUoMs ? allUoMs?.find(item => item.id === product.uom)?.unit : '',
    })),
  };
};


const recalcTotalWeight = (products: IInwardRegister["inwardProducts"]): number =>
  products.reduce((sum, prod) => sum + (Number(prod.netWeight) || 0), 0);

const recalcTotal = (products: IInwardRegister["inwardProducts"]): number =>
  products.reduce((sum, prod) => sum + (Number(prod.amount) || 0), 0);

export const handleRemoveProduct = (
  index: number,
  formik: any
): void => {
  const updatedProducts = formik.values.inwardProducts.filter((_: any, i: number) => i !== index);
  const newTotWt = recalcTotalWeight(updatedProducts);
  formik.setFieldValue("inwardProducts", updatedProducts, false);
  formik.setFieldValue("totalWeightInKg", newTotWt, false);
};

export const handlePushProduct = (
  newProduct: IInwardRegister["inwardProducts"][0],
  formik: any
): void => {
  const updatedProducts = [...formik.values.inwardProducts, newProduct];
  const newTotWt = recalcTotalWeight(updatedProducts);
  formik.setFieldValue("inwardProducts", updatedProducts, false);
  formik.setFieldValue("totalWeightInKg", newTotWt, false);
};

export const handleInwardProductsChange = (
  index: number | null,
  fieldName: 'quantity' | 'unitPrice' | "packingMaterialWeight" | "grossWeight",
  newValue: any,
  formik: any
): void => {
  if (index !== null) {
    const updatedProducts = [...formik.values.inwardProducts];
    const product = { ...updatedProducts[index] };
    product[fieldName] = newValue;
    product.amount = product.quantity * product.unitPrice;
    product.netWeight = product.packingMaterialWeight
      ? Number(product.grossWeight) - ((product.packingMaterialWeight * Number(product.quantity)) / 1000)
      : product.grossWeight;

    updatedProducts[index] = product;
    formik.setFieldValue("inwardProducts", updatedProducts, false);

    const newTotWt = recalcTotalWeight(updatedProducts).toFixed(2);
    formik.setFieldValue("inwardQtyInKg", newTotWt, false);

    const newTotAmt = recalcTotal(updatedProducts).toFixed(2);
    formik.setFieldValue("inwardCost", newTotAmt, false);
  }
}

// const calculateNetWeight = useCallback((values: PostInwardRegister | GetInwardRegister, setFieldValue: (field: any, value: any | undefined) => void) => {
//     const updatedProducts = values.inwardProducts.map((product) => ({
//         ...product,
//         netWeight: Number(product.grossWeight) - ((Number(product.productContainerWeight) / 1000) * Number(product.qty)),
//     }));
//     const totalWeight = updatedProducts.reduce((sum, prod) => sum + (Number(prod.netWeight) || 0), 0);
//     setFieldValue("inwardProducts", updatedProducts);
//     setFieldValue("totalWeightInKg", totalWeight);
// }, []);