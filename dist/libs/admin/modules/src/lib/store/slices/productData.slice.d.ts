import { RootState } from "../store.admin";
import { GetProduct, GetProductCategory, GetProductSubcategory } from "@prime-fresh/admin_api";
type ProductDataState = {
    allProducts: GetProduct[];
    selectedProduct: GetProduct | null | undefined;
    productCat: GetProductCategory[];
    productSubCat: GetProductSubcategory[];
};
export declare const setProducts: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetProduct[], "productData/setProducts">, setProductCat: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetProductCategory[], "productData/setProductCat">, setProductSubCat: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetProductSubcategory[], "productData/setProductSubCat">, setSelectedProduct: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetProduct | null | undefined, "productData/setSelectedProduct">;
export declare const productsDataState: (state: RootState) => ProductDataState;
export declare const productsState: (state: RootState) => GetProduct[];
export declare const productCatState: (state: RootState) => GetProductCategory[];
export declare const productSubCatState: (state: RootState) => GetProductSubcategory[];
export declare const productDataReducer: import("@reduxjs/toolkit").Reducer<ProductDataState>;
export {};
