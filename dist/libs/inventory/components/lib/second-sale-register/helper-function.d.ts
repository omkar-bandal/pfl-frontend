import { FormikHelpers } from 'formik';
import { ISecondSaleRegister } from '../../../../../api/inventory_api/src/index.ts';

export declare const handleRemoveProduct: (index: number, values: Omit<ISecondSaleRegister, "id">, setFieldValue: FormikHelpers<ISecondSaleRegister>["setFieldValue"]) => void;
export declare const handlePushProduct: (newProduct: ISecondSaleRegister["secondSaleProducts"][0], values: Omit<ISecondSaleRegister, "id">, setFieldValue: FormikHelpers<ISecondSaleRegister>["setFieldValue"]) => void;
export declare const handleSecondSaleProductsChange: (index: number | null, fieldName: "quantity" | "unitPrice" | "packingMaterialWeight" | "grossWeight", newValue: any, values: Omit<ISecondSaleRegister, "id">, setFieldValue: FormikHelpers<ISecondSaleRegister>["setFieldValue"]) => void;
