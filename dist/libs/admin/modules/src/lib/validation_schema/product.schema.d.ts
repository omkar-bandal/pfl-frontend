import * as Yup from 'yup';
export declare const productValidationSchema: Yup.ObjectSchema<{
    name: string;
    image: {};
    returnable: NonNullable<boolean | undefined>;
    description: string;
    product_code: string;
    category: string;
    subcategory: string;
    classification: string;
    uom: string;
}, Yup.AnyObject, {
    name: undefined;
    image: undefined;
    returnable: undefined;
    description: undefined;
    product_code: undefined;
    category: undefined;
    subcategory: undefined;
    classification: undefined;
    uom: undefined;
}, "">;
