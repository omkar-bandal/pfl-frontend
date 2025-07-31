import { IGRN, IGRNProducts } from '@prime-fresh/purchase_api';
export declare const grnProductsInitialValue: IGRNProducts;
export declare const grnInitialValue: Omit<IGRN, 'id'>;
export declare const grnInitValForFilter: {
    companyName: null;
    purchaseLocation: null;
    purchaseForSalesLocation: null;
    locationType: null;
    grnType: null;
    source: null;
};
