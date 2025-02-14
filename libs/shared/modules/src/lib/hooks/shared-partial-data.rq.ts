import { useQuery, UseQueryResult } from '@tanstack/react-query';
import {
    ApiBaseState,
    ErrorModel,
    SharedService,
    CompanyNamesData,
    UOMPartialData,
    FarmerPartialData,
    ProductPartialData,
    VendorPartialData,
    BranchPartialData
} from '@prime-fresh/common_api';

export function useGetCompanyNames():
    UseQueryResult<ApiBaseState<CompanyNamesData[]>, ErrorModel> {
    return useQuery<ApiBaseState<CompanyNamesData[]>, ErrorModel>({
        queryKey: ['get-company-names'],
        queryFn: () => SharedService.getInstance().getCompanyNames(),
    });
}

export function useGetFarmersPartialData():
    UseQueryResult<ApiBaseState<FarmerPartialData[]>, ErrorModel> {
    return useQuery<ApiBaseState<FarmerPartialData[]>, ErrorModel>({
        queryKey: ['get-farmers-partial-data'],
        queryFn: () => SharedService.getInstance().getFarmersPatrialData(),
    });
}

export function useGetProductsPartialData():
    UseQueryResult<ApiBaseState<ProductPartialData[]>, ErrorModel> {
    return useQuery<ApiBaseState<ProductPartialData[]>, ErrorModel>({
        queryKey: ['get-products-partial-data'],
        queryFn: () => SharedService.getInstance().getProductsPatrialData(),
    });
}


export function useGetUOMPartialData():
    UseQueryResult<ApiBaseState<UOMPartialData[]>, ErrorModel> {
    return useQuery<ApiBaseState<UOMPartialData[]>, ErrorModel>({
        queryKey: ['get-uom-partial-data'],
        queryFn: () => SharedService.getInstance().getUOMPartialData(),
    });
}

export function useGetVendorsPartialData():
    UseQueryResult<ApiBaseState<VendorPartialData[]>, ErrorModel> {
    return useQuery<ApiBaseState<VendorPartialData[]>, ErrorModel>({
        queryKey: ['get-vendors-partial-data'],
        queryFn: () => SharedService.getInstance().getVendorsPatrialData(),
    });
}

export function useGetBranchesPartialData():
    UseQueryResult<ApiBaseState<BranchPartialData[]>, ErrorModel> {
    return useQuery<ApiBaseState<BranchPartialData[]>, ErrorModel>({
        queryKey: ['get-branches-partial-data'],
        queryFn: () => SharedService.getInstance().getBranchPartialData(),
    });
}