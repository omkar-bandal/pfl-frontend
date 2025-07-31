"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initValEmployee = void 0;
const address_initial_value_1 = require("./address.initial-value");
exports.initValEmployee = {
    firstName: null,
    middleName: null,
    lastName: null,
    username: null,
    primaryMobNo: null,
    primaryEmail: null,
    secondaryMobNo: null,
    secondaryEmail: null,
    residentialAddress: address_initial_value_1.initValAddress,
    permanentAddress: address_initial_value_1.initValAddress,
    companyName: null,
    department: null,
    designation: null,
    joiningDate: null,
    joiningLocation: null,
    currentWorkLocation: null,
    otherWorkLocationInput: null,
    accessLocation: [],
    cugNo: null,
    workEmail: null,
    permissions: [
        {
            documentDefinition: null,
            canCreate: false,
            canView: false,
            canEdit: false,
            canDelete: false,
            canDownload: false,
        }
    ]
};
//# sourceMappingURL=employee.initial-value.js.map