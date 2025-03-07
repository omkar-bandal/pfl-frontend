import { GetAllFilteredFarmerData, GetAllFilteredVendorData } from '../../../../../admin_api/src/index.ts';

export declare const useGetVendorOrFarmerBySource: (source: string) => import('@tanstack/react-query').UseQueryResult<GetAllFilteredVendorData | GetAllFilteredFarmerData, Error>;
