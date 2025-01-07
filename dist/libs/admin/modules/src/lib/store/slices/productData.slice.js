"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDataReducer = exports.productSubCatState = exports.productCatState = exports.productsState = exports.productsDataState = exports.setSelectedProduct = exports.setProductSubCat = exports.setProductCat = exports.setProducts = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    allProducts: [],
    selectedProduct: undefined,
    productCat: [],
    productSubCat: []
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
    }
});
_a = productDataSlice.actions, exports.setProducts = _a.setProducts, exports.setProductCat = _a.setProductCat, exports.setProductSubCat = _a.setProductSubCat, exports.setSelectedProduct = _a.setSelectedProduct;
const productsDataState = (state) => state.productData;
exports.productsDataState = productsDataState;
const productsState = (state) => state.productData.allProducts;
exports.productsState = productsState;
const productCatState = (state) => state.productData.productCat;
exports.productCatState = productCatState;
const productSubCatState = (state) => state.productData.productSubCat;
exports.productSubCatState = productSubCatState;
exports.productDataReducer = productDataSlice.reducer;
//# sourceMappingURL=productData.slice.js.map