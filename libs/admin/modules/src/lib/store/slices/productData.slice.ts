import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetProduct, GetProductCategory, GetProductSubcategory, ProductPartialData } from "@prime-fresh/admin_api";

type ProductDataState = {
    allProducts: GetProduct[],
    selectedProduct: GetProduct | null | undefined,
    productCat: GetProductCategory[],
    productSubCat: GetProductSubcategory[],
    productPartialData: ProductPartialData[],
}
const initialState: ProductDataState = {
    allProducts: [],
    selectedProduct: undefined,
    productCat: [],
    productSubCat: [],
    productPartialData: [],
}
const productDataSlice = createSlice({
    name: 'productData',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<GetProduct[]>) => {
            state.allProducts = action.payload;
        },
        setSelectedProduct: (state, action: PayloadAction<GetProduct | null | undefined>) => {
            state.selectedProduct = action.payload;
        },
        setProductCat: (state, action: PayloadAction<GetProductCategory[]>) => {
            state.productCat = action.payload;
        },
        setProductSubCat: (state, action: PayloadAction<GetProductSubcategory[]>) => {
            state.productSubCat = action.payload;
        },
        addProductPartialData: (state, action: PayloadAction<ProductPartialData | null>) => {
            console.log("payload", action.payload);
            if (action.payload !== null)
                state.productPartialData.push(action.payload);
            console.log("state:", state.productPartialData);
        },
        removeProductPartialData: (state, action: PayloadAction<number>) => {
            state.productPartialData.splice(action.payload, 1);
        },
    }
});

export const { setProducts, setProductCat, setProductSubCat, setSelectedProduct, addProductPartialData, removeProductPartialData } = productDataSlice.actions;

export const productsDataState = (state: RootState) => state.productData;
export const productsState = (state: RootState) => state.productData.allProducts;
export const productCatState = (state: RootState) => state.productData.productCat;
export const productSubCatState = (state: RootState) => state.productData.productSubCat;
export const productPartialDataState = (state: RootState) => state.productData.productPartialData;

export const productDataReducer = productDataSlice.reducer;

