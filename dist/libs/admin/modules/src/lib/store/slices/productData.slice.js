"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDataReducer = exports.productPartialDataState = exports.productSubCatState = exports.productCatState = exports.productsState = exports.productsDataState = exports.removeProductPartialData = exports.addProductPartialData = exports.setSelectedProduct = exports.setProductSubCat = exports.setProductCat = exports.setProducts = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    allProducts: [],
    selectedProduct: undefined,
    productCat: [],
    productSubCat: [],
    productPartialData: [],
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
        addProductPartialData: (state, action) => {
            console.log("payload", action.payload);
            if (action.payload !== null)
                state.productPartialData.push(action.payload);
            console.log("state:", state.productPartialData);
        },
        removeProductPartialData: (state, action) => {
            state.productPartialData.splice(action.payload, 1);
        },
    }
});
_a = productDataSlice.actions, exports.setProducts = _a.setProducts, exports.setProductCat = _a.setProductCat, exports.setProductSubCat = _a.setProductSubCat, exports.setSelectedProduct = _a.setSelectedProduct, exports.addProductPartialData = _a.addProductPartialData, exports.removeProductPartialData = _a.removeProductPartialData;
const productsDataState = (state) => state.productData;
exports.productsDataState = productsDataState;
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