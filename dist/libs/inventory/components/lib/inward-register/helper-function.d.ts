import { FormikHelpers } from 'formik';
import { PostInwardRegister } from '../../../../../api/inventory_api/src/index.ts';
import { ProductPartialData } from '../../../../../api/common_api/src/index.ts';

export declare const getProductCount: (productId: string | null, products: ProductPartialData[] | null | undefined) => {
    label: string;
    value: string;
}[] | undefined;
export declare const getProductSizes: (productId: string | null, products: ProductPartialData[] | null | undefined) => {
    label: string;
    value: string;
}[] | undefined;
export declare const getProductOrigin: (productId: string | null, products: ProductPartialData[] | null | undefined) => string | null | undefined;
export declare const getProductBrand: (productId: string | null, products: ProductPartialData[] | null | undefined) => string | undefined;
export declare const handleInwardProductsChange: (index: number, field: "qty" | "productContainerWeight" | "grossWeight", value: any, values: PostInwardRegister, setFieldValue: FormikHelpers<PostInwardRegister>["setFieldValue"]) => void;
