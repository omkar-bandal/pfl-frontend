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
    BranchPartialData,
    GetAllRFPANums,
    GetAllGRNNums,
    GetAllDealSlipNums,
    GetAllDeliveryChallanNums,
    CustomerPartialData,
    CustomerNames,
    GetDepartment
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

export function useGetCustomerPartialData(customerId: string):
    UseQueryResult<ApiBaseState<CustomerPartialData>, ErrorModel> {
    return useQuery<ApiBaseState<CustomerPartialData>, ErrorModel>({
        queryKey: ['get-customers-partial-data', customerId],
        queryFn: () => SharedService.getInstance().getCustomerPatrialData(customerId),
        enabled: !!customerId
    });
}

export function useGetCustomerNames():
    UseQueryResult<ApiBaseState<CustomerNames[]>, ErrorModel> {
    return useQuery<ApiBaseState<CustomerNames[]>, ErrorModel>({
        queryKey: ['get-customer-names'],
        queryFn: () => SharedService.getInstance().getAllCustomerNames(),
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

export function useGetAllRFPANums():
    UseQueryResult<ApiBaseState<GetAllRFPANums[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetAllRFPANums[]>, ErrorModel>({
        queryKey: ['get-rfpa-nums'],
        queryFn: () => SharedService.getInstance().getRFPANums(),
    })
}

export function useGetAllGRNNums():
    UseQueryResult<ApiBaseState<GetAllGRNNums[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetAllGRNNums[]>, ErrorModel>({
        queryKey: ['get-grn-nums'],
        queryFn: () => SharedService.getInstance().getGRNNums(),
    })
}

export function useGetAllDealSlipNums():
    UseQueryResult<ApiBaseState<GetAllDealSlipNums[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetAllDealSlipNums[]>, ErrorModel>({
        queryKey: ['get-deal-slip-nums'],
        queryFn: () => SharedService.getInstance().getDealSlipNums(),
    })
}

export function useGetAllDeliveryChallanNums():
    UseQueryResult<ApiBaseState<GetAllDeliveryChallanNums[]>, ErrorModel> {
    return useQuery<ApiBaseState<GetAllDeliveryChallanNums[]>, ErrorModel>({
        queryKey: ['get-delivery-challan-nums'],
        queryFn: () => SharedService.getInstance().getDeliveryChallanNums(),
    })
}
export function useGetDepartmentById(deptId: string):
    UseQueryResult<ApiBaseState<GetDepartment>, ErrorModel> {
        const enabled = deptId.length > 1 ? true : false;
    return useQuery<ApiBaseState<GetDepartment>, ErrorModel>({
        queryKey: ['get-department-by-id'],
        queryFn: () => SharedService.getInstance().getDepartmentById(deptId),
        enabled: enabled,
    })
}
