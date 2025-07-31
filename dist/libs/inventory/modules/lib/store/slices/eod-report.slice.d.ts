import { RootState } from '../store.inventory';
import { IEODReport } from '../../../../../../api/inventory_api/src/index.ts';

type EODReportState = {
    eodReportFormPreview: Omit<IEODReport, 'id'> | undefined;
};
export declare const setEODReportFormPreview: import('@reduxjs/toolkit').ActionCreatorWithOptionalPayload<Omit<IEODReport, "id"> | undefined, "eodReport/setEODReportFormPreview">;
export declare const eodReportStates: (store: RootState) => EODReportState;
export declare const eodReportReducer: import('redux').Reducer<EODReportState>;
export {};
