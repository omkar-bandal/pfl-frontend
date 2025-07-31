"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDataReducer = exports.productPartialDataState = exports.productSubCatState = exports.productCatState = exports.productsState = exports.productsDataStates = exports.setProductFormPreview = exports.clearProductPartialData = exports.removeProductPartialData = exports.addorupdateProductPartialData = exports.setSelectedProduct = exports.setProductSubCat = exports.setProductCat = exports.setProducts = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    allProducts: [],
    selectedProduct: undefined,
    productCat: [],
    productSubCat: [],
    productPartialData: [],
    productFormPreview: null,
};
const productDataSlice = (0, toolkit_1.createSlice)({
    name: 'productData',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        },
        setProductCat: (state, action) => {
            state.productCat = action.payload;
        },
        setProductSubCat: (state, action) => {
            state.productSubCat = action.payload;
        },
        clearProductPartialData: (state) => {
            state.productPartialData = [];
        },
        addorupdateProductPartialData: (state, action) => {
            const { index, object } = action.payload;
            // If an object exists at the given index, replace it
            if (state.productPartialData[index] !== undefined) {
                state.productPartialData[index] = object;
            }
            else {
                // Otherwise, insert the new object at the specified index
                state.productPartialData.splice(index, 0, object);
            }
        },
        removeProductPartialData: (state, action) => {
            const index = action.payload;
            state.productPartialData.splice(index, 1);
        },
        setProductFormPreview: (state, action) => {
            state.productFormPreview = action.payload;
        }
    }
});
_a = productDataSlice.actions, exports.setProducts = _a.setProducts, exports.setProductCat = _a.setProductCat, exports.setProductSubCat = _a.setProductSubCat, exports.setSelectedProduct = _a.setSelectedProduct, exports.addorupdateProductPartialData = _a.addorupdateProductPartialData, exports.removeProductPartialData = _a.removeProductPartialData, exports.clearProductPartialData = _a.clearProductPartialData, exports.setProductFormPreview = _a.setProductFormPreview;
const productsDataStates = (state) => state.productData;
exports.productsDataStates = productsDataStates;
const productsState = (state) => state.productData.allProducts;
exports.productsState = productsState;
const productCatState = (state) => state.productData.productCat;
exports.productCatState = productCatState;
const productSubCatState = (state) => state.productData.productSubCat;
exports.productSubCatState = productSubCatState;
const productPartialDataState = (state) => state.productData.productPartialData;
exports.productPartialDataState = productPartialDataState;
exports.productDataReducer = productDataSlice.reducer;
//# sourceMappingURL=productData.slice.js.map