import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store.admin";
import { GetProduct, GetProductCategory, GetProductSubcategory, PostProduct, ProductPartialData } from "@prime-fresh/admin_api";

type ProductDataState = {
    allProducts: GetProduct[],
    selectedProduct: GetProduct | null | undefined,
    productCat: GetProductCategory[],
    productSubCat: GetProductSubcategory[],
    productPartialData: ProductPartialData[],
    productFormPreview: PostProduct | null,
}
const initialState: ProductDataState = {
    allProducts: [],
    selectedProduct: undefined,
    productCat: [],
    productSubCat: [],
    productPartialData: [],
    productFormPreview: null,
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
        clearProductPartialData: (state) => {
            state.productPartialData = [];
        },
        addorupdateProductPartialData: (state, action: PayloadAction<{ index: number; object: ProductPartialData }>) => {
            const { index, object } = action.payload;
            // If an object exists at the given index, replace it
            if (state.productPartialData[index] !== undefined) {
                state.productPartialData[index] = object;
            } else {
                // Otherwise, insert the new object at the specified index
                state.productPartialData.splice(index, 0, object);
            }
        },
        removeProductPartialData: (state, action: PayloadAction<number>) => {
            const index = action.payload;
            state.productPartialData.splice(index, 1);
        },
        setProductFormPreview: (state, action: PayloadAction<PostProduct>) => {
            state.productFormPreview = action.payload;
        }
    }
});

export const { 
    setProducts, 
    setProductCat, 
    setProductSubCat, 
    setSelectedProduct, 
    addorupdateProductPartialData, 
    removeProductPartialData, 
    clearProductPartialData,
    setProductFormPreview
 } = productDataSlice.actions;

export const productsDataStates = (state: RootState) => state.productData;
export const productsState = (state: RootState) => state.productData.allProducts;
export const productCatState = (state: RootState) => state.productData.productCat;
export const productSubCatState = (state: RootState) => state.productData.productSubCat;
export const productPartialDataState = (state: RootState) => state.productData.productPartialData;

export const productDataReducer = productDataSlice.reducer;

