"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateProduct = useCreateProduct;
exports.useUpdateProductById = useUpdateProductById;
exports.useDeleteProductById = useDeleteProductById;
exports.useGetAllProducts = useGetAllProducts;
exports.useGetProductById = useGetProductById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateProduct() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-product'],
        mutationFn: (data) => admin_api_1.ProductsService.getInstance().createProduct(data),
    });
}
function useUpdateProductById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-product-by-id'],
        mutationFn: (data) => admin_api_1.ProductsService.getInstance().updateProduct(id, data),
    });
}
function useDeleteProductById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-product-by-id'],
        mutationFn: () => admin_api_1.ProductsService.getInstance().deleteProductById(id),
    });
}
function useGetAllProducts(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-products', queryParams],
        queryFn: () => admin_api_1.ProductsService.getInstance().getAllProducts(queryParams),
    });
}
function useGetProductById(id) {
    const enabled = id.length > 1 ? true : false;
    return (0, react_query_1.useQuery)({
        queryKey: ['get-product-by-id', id],
        queryFn: () => admin_api_1.ProductsService.getInstance().getProductById(id),
        enabled: enabled,
    });
}
//# sourceMappingURL=products.rq.js.map