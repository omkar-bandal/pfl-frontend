"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initValFarmer = void 0;
const admin_api_1 = require("@prime-fresh/admin_api");
const initValAddress_1 = require("./initValAddress");
const initValCrop = {
    crop: '',
    variety: '',
    noOfPlants: '',
    pruningDate: new Date(),
    expectedHarvestDate: new Date(),
    expectedQuantityInTonnes: 0,
};
exports.initValFarmer = {
    //Farmer Details
    farmerfName: '',
    farmermName: '',
    farmerlName: '',
    residensialAddress: initValAddress_1.initValAddress,
    primaryMobileNo: '',
    secondaryMobileNo: '',
    email: '',
    gender: '',
    dob: '',
    idProofNo: '',
    idProofCopy: null,
    howDoYouSell: '',
    farmerCode: '',
    farmerType: '',
    farmerGrading: '',
    //Farm Details
    landHoldingStatus: admin_api_1.LandHoldingStatus.OWNED,
    landStatus: admin_api_1.LandStatus.NON_IRRIGATED,
    farmAddress: initValAddress_1.initValAddress,
    totalLandArea: 0,
    cultivationArea: 0,
    sevenTwelveNo: '',
    sevenTwelveCopy: '',
    farmerPhoto: null,
    farmPhoto: null,
    crops: [initValCrop],
    dateOfVisit: new Date(),
    registerBy: '',
    registerDate: new Date(),
};
//# sourceMappingURL=initValFarmer.js.map