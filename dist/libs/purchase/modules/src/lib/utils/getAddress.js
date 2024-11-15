"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayAddress = void 0;
const displayAddress = (value) => {
    return `${(value === null || value === void 0 ? void 0 : value.address1) || ''}, ${(value === null || value === void 0 ? void 0 : value.address2) || ''}, ${(value === null || value === void 0 ? void 0 : value.location) || ''}, ${(value === null || value === void 0 ? void 0 : value.city) || ''}, ${(value === null || value === void 0 ? void 0 : value.state) || ''}, ${(value === null || value === void 0 ? void 0 : value.pincode) || ''}`;
};
exports.displayAddress = displayAddress;
//# sourceMappingURL=getAddress.js.map