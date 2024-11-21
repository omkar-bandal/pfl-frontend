import { useMutation, UseMutationResult } from "@tanstack/react-query";
import ApiServices from "../configuration/ApiServices";

export const useCreateData = <Req, Res>(
    url: string,
): UseMutationResult<Res, Error, Req, unknown> => {
    const service = new ApiServices<Req, Res>();
    return useMutation<Res, Error, Req, unknown>({mutationFn:(data) => service.createData(url, data)});
};
