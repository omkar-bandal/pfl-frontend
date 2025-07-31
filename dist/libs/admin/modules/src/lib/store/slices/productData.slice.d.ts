import { RootState } from "../store.admin";
import { GetProduct, GetProductCategory, GetProductSubcategory, PostProduct, ProductPartialData } from "@prime-fresh/admin_api";
type ProductDataState = {
    allProducts: GetProduct[];
    selectedProduct: GetProduct | null | undefined;
    productCat: GetProductCategory[];
    productSubCat: GetProductSubcategory[];
    productPartialData: ProductPartialData[];
    productFormPreview: PostProduct | null;
};
export declare const setProducts: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetProduct[], "productData/setProducts">, setProductCat: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetProductCategory[], "productData/setProductCat">, setProductSubCat: import("@reduxjs/toolkit").ActionCreatorWithPayload<GetProductSubcategory[], "productData/setProductSubCat">, setSelectedProduct: import("@reduxjs/toolkit").ActionCreatorWithOptionalPayload<GetProduct | null | undefined, "productData/setSelectedProduct">, addorupdateProductPartialData: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    index: number;
    object: ProductPartialData;
}, "productData/addorupdateProductPartialData">, removeProductPartialData: import("@reduxjs/toolkit").ActionCreatorWithPayload<number, "productData/removeProductPartialData">, clearProductPartialData: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"productData/clearProductPartialData">, setProductFormPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<PostProduct, "productData/setProductFormPreview">;
export declare const productsDataStates: (state: RootState) => ProductDataState;
export declare const productsState: (state: RootState) => GetProduct[];
export declare const productCatState: (state: RootState) => GetProductCategory[];
export declare const productSubCatState: (state: RootState) => GetProductSubcategory[];
export declare const productPartialDataState: (state: RootState) => ProductPartialData[];
export declare const productDataReducer: import("@reduxjs/toolkit").Reducer<ProductDataState>;
export {};
