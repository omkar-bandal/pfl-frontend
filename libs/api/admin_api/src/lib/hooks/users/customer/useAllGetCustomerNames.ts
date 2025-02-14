import { useGetAllData } from "@prime-fresh/common_api";

type CustomerNames = {
    id: string;
    organisationName: string;
}
export const useGetAllCustomerNames = (url: string) => {
  return useGetAllData<null, CustomerNames[]>(url, ['getAllCustomerNames']);
};