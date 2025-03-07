import { RootState } from "../store.admin";
import { GetProduct, GetProductCategory, GetProductSubcategory, ProductPartialData } from "@prime-fresh/admin_api";
type ProductDataState = {
    allProducts: GetProduct[];
    selectedProduct: GetProduct | null | undefined;
    productCat: GetProductCategory[];
    productSubCat: GetProductSubcategory[];
    productPartialData: ProductPartialData[];
};
export declare const setProducts: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetProduct[], "productData/setProducts">, setProductCat: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetProductCategory[], "productData/setProductCat">, setProductSubCat: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetProductSubcategory[], "productData/setProductSubCat">, setSelectedProduct: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetProduct | null | undefined, "productData/setSelectedProduct">, addProductPartialData: import("@reduxjs/toolkit").ActionCreatorWithPayload<ProductPartialData | null, "productData/addProductPartialData">, removeProductPartialData: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "productData/removeProductPartialData">;
export declare const productsDataState: (state: RootState) => ProductDataState;
export declare const productsState: (state: RootState) => GetProduct[];
export declare const productCatState: (state: RootState) => GetProductCategory[];
export declare const productSubCatState: (state: RootState) => GetProductSubcategory[];
export declare const productPartialDataState: (state: RootState) => ProductPartialData[];
export declare const productDataReducer: import("@reduxjs/toolkit").Reducer<ProductDataState>;
export {};
