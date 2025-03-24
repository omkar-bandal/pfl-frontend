"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCreateProductClassification = useCreateProductClassification;
exports.useUpdateProductClassification = useUpdateProductClassification;
exports.useDeleteProductClassificationById = useDeleteProductClassificationById;
exports.useGetAllProductClassifications = useGetAllProductClassifications;
exports.useGetAProductClassificationById = useGetAProductClassificationById;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useCreateProductClassification() {
    return (0, react_query_1.useMutation)({
        mutationKey: ['create-product-classification'],
        mutationFn: (data) => admin_api_1.ProductClassificationService.getInstance().createProductClassification(data),
    });
}
function useUpdateProductClassification(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['update-product-classification-by-id'],
        mutationFn: (data) => admin_api_1.ProductClassificationService.getInstance().updateProductClassification(id, data),
    });
}
function useDeleteProductClassificationById(id) {
    return (0, react_query_1.useMutation)({
        mutationKey: ['delete-product-classification-by-id'],
        mutationFn: () => admin_api_1.ProductClassificationService.getInstance().deleteProductClassificationById(id),
    });
}
function useGetAllProductClassifications(queryParams) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-product-classifications', queryParams],
        queryFn: () => admin_api_1.ProductClassificationService.getInstance().getAllProductClassifications(queryParams),
    });
}
function useGetAProductClassificationById(id) {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-product-classification-by-id'],
        queryFn: () => admin_api_1.ProductClassificationService.getInstance().getProductClassificationById(id),
        enabled: !!id,
    });
}
//# sourceMappingURL=product-classification.rq.js.map