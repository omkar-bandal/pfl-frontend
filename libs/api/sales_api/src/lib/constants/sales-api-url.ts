import { QueryParams } from "@prime-fresh/common_api";

export const salesApiUrl = {
    //Returned By Customer
    GET_ALL_RBC: (queryParams?: QueryParams) => {
        if (queryParams) {
            let url = `/returns/?page=${queryParams.page}&limit=${queryParams.limit}`;
            if (queryParams.sort && queryParams.sort.length > 0) {
                url = url + `&sort=${queryParams.sort}`;
            }
            return url;
        } else {
            return `/returns/`;
        }
    },
    GET_RBC_BY_ID: (id: string) => `/returns/${id}`,
    UPDATE_RBC: (id: string) => `/returns/${id}`,
    DELETE_RBC: (id: string) => `/returns/${id}`,
    CREATE_RBC: "/returns/",
}