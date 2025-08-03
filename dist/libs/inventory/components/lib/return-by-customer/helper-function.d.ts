import { GetReturnByCustomer, PostReturnByCustomer } from '../../../../../api/sales_api/src/index.ts';
import { FormikHelpers } from 'formik';

export declare const handleRemoveProduct: (index: number, values: PostReturnByCustomer | GetReturnByCustomer, setFieldValue: FormikHelpers<PostReturnByCustomer>["setFieldValue"]) => void;
export declare const handlePushProduct: (newProduct: PostReturnByCustomer["returnedProducts"][0], values: PostReturnByCustomer | GetReturnByCustomer, setFieldValue: FormikHelpers<PostReturnByCustomer>["setFieldValue"]) => void;
export type ReturnedProductField = "quantity" | "unitPrice" | "packingMaterialWeight" | "grossWeight";
export declare const handleReturnedProductsChange: (index: number | null, fieldName: ReturnedProductField, newValue: any, formik: any) => void;
