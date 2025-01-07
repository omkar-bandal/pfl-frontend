import * as yup from 'yup';
export declare const uomConversionMatrixSchema: yup.ObjectSchema<{
    conversionFactor: number;
    fromUOM: string;
    toUOM: string;
}, yup.AnyObject, {
    conversionFactor: undefined;
    fromUOM: undefined;
    toUOM: undefined;
}, "">;
