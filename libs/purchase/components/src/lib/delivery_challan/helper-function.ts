/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetPackagingMaterial } from '@prime-fresh/admin_api';
import { IDeliveryChallanProduct } from '@prime-fresh/purchase_api';
import { numToWords } from '@prime-fresh/shared/modules';

export const handleProductChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  index: number,
  formik: any
) => {
  const { name, value } = event.target;

  // Identify the field name dynamically (last part of the field name after the dot)
  const fieldName = name.split('.').pop() as keyof IDeliveryChallanProduct;

  if (!fieldName) return; // Prevent invalid updates if fieldName is not found

  // Clone the products array to avoid direct mutation of state
  const updatedProducts = [...formik.values.deliveryChallanProducts];
  const product = updatedProducts[index];

  if (!product) return; // Ensure product exists

  // Handle numeric fields (quantity, unitPrice, grossWeight, packingMaterialWeight)
  if (
    [
      'packagingMaterialQuantity',
      'packagingMaterialUnitPrice',
      'quantity',
      'unitPrice',
      'grossWeight',
      'packingMaterialWeight',
    ].includes(fieldName)
  ) {
    const numericValue = isNaN(Number(value)) ? 0 : Number(value);
    if (fieldName === 'packagingMaterialQuantity')
      product.packagingMaterialQuantity = numericValue;
    if (fieldName === 'packagingMaterialUnitPrice')
      product.packagingMaterialUnitPrice = numericValue;
    if (fieldName === 'quantity') product.quantity = numericValue;
    if (fieldName === 'unitPrice') product.unitPrice = numericValue;
    if (fieldName === 'grossWeight') product.grossWeight = numericValue;
    if (fieldName === 'packingMaterialWeight')
      product.packingMaterialWeight = numericValue;
  } else {
    // Handle string or nullable fields (productName, count, size, uom)
    if (fieldName === 'productName') product.productName = value || null;
    if (fieldName === 'count') product.count = value || null;
    if (fieldName === 'size') product.size = value || null;
    if (fieldName === 'uom') product.uom = value || null;
  }

  product.packagingMaterialAmount =
    (product.packagingMaterialQuantity || 0) *
    (product.packagingMaterialUnitPrice || 0);
  formik.setFieldValue(
    `deliveryChallanProducts.${index}.packagingMaterialAmount`,
    product.packagingMaterialAmount
  );

  product.packagingMaterialTotalWeight =
    (product.packagingMaterialQuantity || 0) *
    (product.packingMaterialWeight || 0);
  formik.setFieldValue(
    `deliveryChallanProducts.${index}.packagingMaterialTotalWeight`,
    product.packagingMaterialTotalWeight
  );

  // Recalculate amount based on quantity and unitPrice
  product.amount = (Number(product.quantity) || 0) * (Number(product.unitPrice) || 0);
  formik.setFieldValue(
    `deliveryChallanProducts.${index}.amount`,
    Number(product.amount)
  );

  // Recalculate netWeight (grossWeight - packingMaterialWeight in kg)
  product.netWeight =
    (Number(product.grossWeight) || 0) -
    (Number(product.packagingMaterialTotalWeight) || 0) / 1000; // convert grams to kg
  formik.setFieldValue(
    `deliveryChallanProducts.${index}.netWeight`,
    Number(product.netWeight)
  );

  // Calculate the packaging material total amount across all products
  const totalPackagingMaterialAmount = updatedProducts.reduce(
    (sum, prod) => sum + (prod.packagingMaterialAmount || 0),
    0
  );
  formik.setFieldValue(
    'totalPackagingMaterialAmount',
    totalPackagingMaterialAmount
  );

  // Calculate the packaging material total amount across all products
  const totalPackagingMaterialWeight = updatedProducts.reduce(
    (sum, prod) => sum + (prod.packagingMaterialTotalWeight || 0),
    0
  );
  formik.setFieldValue(
    'netPackagingMaterialWeight',
    totalPackagingMaterialWeight
  );

  // Calculate the total product amount across all products
  const netProductWeight = updatedProducts.reduce(
    (sum, prod) => sum + (Number(prod.netWeight) || 0),
    0
  );
  formik.setFieldValue('netProductWeight', Number(netProductWeight));

  // Calculate the total amount across all products
  const totalProductAmount = updatedProducts.reduce(
    (sum, prod) => sum + (prod.amount || 0),
    0
  );
  formik.setFieldValue('totalProductAmount', Number(totalProductAmount)); // Update total amount
  formik.setFieldValue('totalAmtInWords', numToWords(totalProductAmount));
};

export const handlePackagingMaterialChange = (
  newValue: any,
  index: number,
  packMatData: GetPackagingMaterial[] | null | undefined,
  formik: any
) => {
  if (packMatData) {
    const selectedData = packMatData.find((data) => data.id === newValue.value);
    formik.setFieldValue(
      `deliveryChallanProducts.${index}.packagingMaterial`,
      newValue.value
    );
    selectedData?.packagingMaterialWeight !== null
      ? formik.setFieldValue(
          `deliveryChallanProducts.${index}.packingMaterialWeight`,
          selectedData?.packagingMaterialWeight
        )
      : formik.setFieldValue(
          `deliveryChallanProducts.${index}.packingMaterialWeight`,
          null
        );
  } else {
    formik.setFieldValue(
      `deliveryChallanProducts.${index}.packagingMaterial`,
      null
    );
    formik.setFieldValue(
      `deliveryChallanProducts.${index}.packingMaterialWeight`,
      null
    );
  }
};
