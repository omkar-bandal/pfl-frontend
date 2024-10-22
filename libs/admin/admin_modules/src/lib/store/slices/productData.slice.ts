import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { Product, ProductCategory, ProductSubcategory } from "../../models";

type ProductDataState = {
    allProducts: Product[],
    selectedProduct: Product | undefined,
    productCat: ProductCategory[],
    productSubCat: ProductSubcategory[],
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
        setProducts : (state, action: PayloadAction<Product[]>) => {
            state.allProducts = action.payload;
        },
        setSelectedProduct : (state, action: PayloadAction<Product | undefined>) => {
            state.selectedProduct = action.payload;
        },
        setProductCat : (state, action: PayloadAction<ProductCategory[]>) => {
            state.productCat = action.payload;
        },
        setProductSubCat : (state, action: PayloadAction<ProductSubcategory[]>) => {
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

