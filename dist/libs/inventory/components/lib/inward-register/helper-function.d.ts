import { IInwardRegister } from '../../../../../api/inventory_api/src/index.ts';

export declare const handleRemoveProduct: (index: number, formik: any) => void;
export declare const handlePushProduct: (newProduct: IInwardRegister["inwardProducts"][0], formik: any) => void;
export declare const handleInwardProductsChange: (index: number | null, fieldName: "quantity" | "unitPrice" | "packingMaterialWeight" | "grossWeight", newValue: any, formik: any) => void;
