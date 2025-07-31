import { FC } from 'react';

interface ProductFormFieldsProps {
    productFieldName: string;
    productFieldValue?: any;
    productCountFieldName?: string;
    productSizeFieldName?: string;
    productCountFieldValue?: string;
    productSizeFieldValue?: string;
    formikHandleChange?: any;
}
export declare const ProductFormFields: FC<ProductFormFieldsProps>;
export {};
