export declare const storeInventory: import('@reduxjs/toolkit').EnhancedStore<{
    inwardRegister: {
        inwardRegisterFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IInwardRegister, "id"> | undefined;
    };
    dumpRegister: {
        dumpRegisterFormPreview: import('../../../../../api/inventory_api/src/index.ts').IDumpRegister | undefined;
    };
    aqr: {
        aqrFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IAQR, "id"> | undefined;
    };
    secondSaleRegister: {
        secondSaleRegisterFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').ISecondSaleRegister, "id"> | undefined;
    };
    vehicleDispatchRegister: {
        vehicleDispatchRegisterFormPreview: import('../../../../../api/inventory_api/src/index.ts').PostVehicleDispatchRegister | undefined;
    };
    eodReport: {
        eodReportFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IEODReport, "id"> | undefined;
    };
    rbc: {
        rbcFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IReturnByCustomer, "id"> | null;
    };
}, import('redux').UnknownAction, import('@reduxjs/toolkit').Tuple<[import('redux').StoreEnhancer<{
    dispatch: import('redux-thunk').ThunkDispatch<{
        inwardRegister: {
            inwardRegisterFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IInwardRegister, "id"> | undefined;
        };
        dumpRegister: {
            dumpRegisterFormPreview: import('../../../../../api/inventory_api/src/index.ts').IDumpRegister | undefined;
        };
        aqr: {
            aqrFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IAQR, "id"> | undefined;
        };
        secondSaleRegister: {
            secondSaleRegisterFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').ISecondSaleRegister, "id"> | undefined;
        };
        vehicleDispatchRegister: {
            vehicleDispatchRegisterFormPreview: import('../../../../../api/inventory_api/src/index.ts').PostVehicleDispatchRegister | undefined;
        };
        eodReport: {
            eodReportFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IEODReport, "id"> | undefined;
        };
        rbc: {
            rbcFormPreview: Omit<import('../../../../../api/inventory_api/src/index.ts').IReturnByCustomer, "id"> | null;
        };
    }, undefined, import('redux').UnknownAction>;
}>, import('redux').StoreEnhancer]>>;
export type RootState = ReturnType<typeof storeInventory.getState>;
export type AppDispatch = typeof storeInventory.dispatch;
