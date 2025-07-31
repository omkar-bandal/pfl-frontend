export declare const inventoryReducer: {
    inwardRegister: import('redux').Reducer<{
        inwardRegisterFormPreview: import('../../../../../api/inventory_api/src/index.ts').IInwardRegister | undefined;
    }>;
    dumpRegister: import('redux').Reducer<{
        dumpRegisterFormPreview: import('../../../../../api/inventory_api/src/index.ts').IDumpRegister | undefined;
    }>;
    aqr: import('redux').Reducer<{
        aqrFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IAQR, "id"> | undefined;
    }>;
    secondSaleRegister: import('redux').Reducer<{
        secondSaleRegisterFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').ISecondSaleRegister, "id"> | undefined;
    }>;
    vehicleDispatchRegister: import('redux').Reducer<{
        vehicleDispatchRegisterFormPreview: import('../../../../../api/inventory_api/src/index.ts').PostVehicleDispatchRegister | undefined;
    }>;
    eodReport: import('redux').Reducer<{
        eodReportFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IEODReport, "id"> | undefined;
    }>;
};
