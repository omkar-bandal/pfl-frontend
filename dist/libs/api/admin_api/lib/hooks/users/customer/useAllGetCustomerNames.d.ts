type CustomerNames = {
    id: string;
    organisationName: string;
};
export declare const useGetAllCustomerNames: (url: string) => import('@tanstack/react-query').UseQueryResult<CustomerNames[], Error>;
export {};
