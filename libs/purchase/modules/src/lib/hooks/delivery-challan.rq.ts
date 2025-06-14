import { GetOffices, GetPackagingMaterial, OfficeService, PackagingMaterialService } from '@prime-fresh/admin_api';
import {
  ApiBaseState,
  BranchPartialData,
  CompanyNamesData,
  CustomerNames,
  ErrorModel,
  GetAllGRNNums,
  QueryParams,
  ResultModel,
  SharedService,
  UOMPartialData,
} from '@prime-fresh/common_api';
import {
  DeliveryChallanServices,
  GetDeliveryChallan,
} from '@prime-fresh/purchase_api';
import {
  useMutation,
  UseMutationResult,
  useQueries,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';

export function useCreateDeliveryChallan(): UseMutationResult<
  ResultModel,
  ErrorModel,
  FormData,
  unknown
> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['create-delivery-challan'],
    mutationFn: (data) =>
      DeliveryChallanServices.getInstance().createDeliveryChallan(data),
  });
}

export function useUpdateDeliveryChallanById(
  id: string
): UseMutationResult<ResultModel, ErrorModel, FormData, unknown> {
  return useMutation<ResultModel, ErrorModel, FormData, unknown>({
    mutationKey: ['update-delivery-challan-by-id'],
    mutationFn: (data) =>
      DeliveryChallanServices.getInstance().updateDeliveryChallan(id, data),
  });
}

export function useDeleteDeliveryChallanById(
  id: string
): UseMutationResult<ResultModel, ErrorModel, unknown, unknown> {
  return useMutation<ResultModel, ErrorModel, unknown, unknown>({
    mutationKey: ['delete-delivery-challan-by-id'],
    mutationFn: () =>
      DeliveryChallanServices.getInstance().deleteDeliveryChallanById(id),
  });
}

export function useGetAllDeliveryChallans(
  queryParams?: QueryParams
): UseQueryResult<ApiBaseState<GetDeliveryChallan[]>, ErrorModel> {
  return useQuery<ApiBaseState<GetDeliveryChallan[]>, ErrorModel>({
    queryKey: ['get-all-delivery-challans', queryParams],
    queryFn: () =>
      DeliveryChallanServices.getInstance().getAllDeliveryChallans(queryParams),
  });
}

export function useGetDeliveryChallanById(
  id: string
): UseQueryResult<ApiBaseState<GetDeliveryChallan>, ErrorModel> {
  const enabled = id.length > 1 ? true : false;
  return useQuery<ApiBaseState<GetDeliveryChallan>, ErrorModel>({
    queryKey: ['get-delivery-challan-by-id', id],
    queryFn: () =>
      DeliveryChallanServices.getInstance().getDeliveryChallanById(id),
    enabled: enabled,
  });
}

export function useCreateProformaInvoice(
  id: string
): UseMutationResult<{ invoiceurl: string }, ErrorModel, unknown, unknown> {
  return useMutation<{ invoiceurl: string }, ErrorModel, unknown, unknown>({
    mutationKey: ['create-proforma-invoice'],
    mutationFn: () =>
      DeliveryChallanServices.getInstance().createProformaInvoice(id),
  });
}

interface MasterDataResult {
    companies: UseQueryResult<ApiBaseState<CompanyNamesData[]>, ErrorModel>;
    offices: UseQueryResult<ApiBaseState<GetOffices[]>, ErrorModel>;
    grnNums: UseQueryResult<ApiBaseState<GetAllGRNNums[]>, ErrorModel>;
    customerlist: UseQueryResult<ApiBaseState<CustomerNames[]>, ErrorModel>;
    uoms: UseQueryResult<ApiBaseState<UOMPartialData[]>, ErrorModel>;
    locations: UseQueryResult<ApiBaseState<BranchPartialData[]>, ErrorModel>;
    pmData: UseQueryResult<ApiBaseState<GetPackagingMaterial[]>, ErrorModel>;
  }
  
  export const useGetDataForDCForm = (): MasterDataResult => {
    const results = useQueries({
      queries: [
        {
          queryKey: ['company-names'],
          queryFn: () => SharedService.getInstance().getCompanyNames(),
        },
        {
          queryKey: ['offices'],
          queryFn: () =>
            OfficeService.getInstance().getAllOffice('registered-office'),
        },
        {
          queryKey: ['grnNums'],
          queryFn: () => SharedService.getInstance().getGRNNums(),
        },
        {
          queryKey: ['customerlist'],
          queryFn: () => SharedService.getInstance().getAllCustomerNames(),
        },
        {
          queryKey: ['uoms'],
          queryFn: () => SharedService.getInstance().getUOMPartialData(),
        },
        {
          queryKey: ['locations'],
          queryFn: () => SharedService.getInstance().getBranchPartialData(),
        },
        {
          queryKey: ['pmData'],
          queryFn: () =>
            PackagingMaterialService.getInstance().getAllPackagingMaterials(),
        },
      ],
    });
  
    const [companies, offices, grnNums, customerlist, uoms, locations, pmData] =
      results as [
        UseQueryResult<ApiBaseState<CompanyNamesData[]>, ErrorModel>,
        UseQueryResult<ApiBaseState<GetOffices[]>, ErrorModel>,
        UseQueryResult<ApiBaseState<GetAllGRNNums[]>, ErrorModel>,
        UseQueryResult<ApiBaseState<CustomerNames[]>, ErrorModel>,
        UseQueryResult<ApiBaseState<UOMPartialData[]>, ErrorModel>,
        UseQueryResult<ApiBaseState<BranchPartialData[]>, ErrorModel>,
        UseQueryResult<ApiBaseState<GetPackagingMaterial[]>, ErrorModel>
      ];
  
    return { companies, offices, grnNums, customerlist, uoms, locations, pmData };
  };
  