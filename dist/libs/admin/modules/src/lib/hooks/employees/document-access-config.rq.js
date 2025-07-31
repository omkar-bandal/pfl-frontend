"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetDocumentAccessConfig = useGetDocumentAccessConfig;
const admin_api_1 = require("@prime-fresh/admin_api");
const react_query_1 = require("@tanstack/react-query");
function useGetDocumentAccessConfig() {
    return (0, react_query_1.useQuery)({
        queryKey: ['get-all-data-access-config'],
        queryFn: () => admin_api_1.DocumentAccessConfigService.getInstance().getDocumentAccessConfig(),
    });
}
//# sourceMappingURL=document-access-config.rq.js.map