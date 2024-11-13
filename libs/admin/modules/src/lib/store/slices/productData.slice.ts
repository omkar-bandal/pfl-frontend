import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetProduct, GetProductCategory, GetProductSubcategory } from "@prime-fresh/admin_api";

type ProductDataState = {
    allProducts: GetProduct[],
    selectedProduct: GetProduct | undefined,
    productCat: GetProductCategory[],
    productSubCat: GetProductSubcategory[],
}
const initialState: ProductDataState = {
    allProducts: [],
    selectedProduct: undefined,
    productCat: [],
    productSubCat: []
}
const productDataSlice = createSlice({
    name: 'productData',
    initialState,
    reducers: {
        setProducts : (state, action: PayloadAction<GetProduct[]>) => {
            state.allProducts = action.payload;
        },
        setSelectedProduct : (state, action: PayloadAction<GetProduct | undefined>) => {
            state.selectedProduct = action.payload;
        },
        setProductCat : (state, action: PayloadAction<GetProductCategory[]>) => {
            state.productCat = action.payload;
        },
        setProductSubCat : (state, action: PayloadAction<GetProductSubcategory[]>) => {
            state.productSubCat = action.payload;
        },
    }
});

export const {setProducts, setProductCat, setProductSubCat, setSelectedProduct } = productDataSlice.actions;

export const productsDataState = (state: RootState) => state.productData;
export const productsState = (state: RootState) => state.productData.allProducts;
export const productCatState = (state: RootState) => state.productData.productCat;
export const productSubCatState = (state: RootState) => state.productData.productSubCat;

export const productDataReducer = productDataSlice.reducer;

