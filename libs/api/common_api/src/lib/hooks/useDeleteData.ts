import { useMutation, UseMutationResult } from "@tanstack/react-query";
import ApiServices from "../configuration/ApiServices";

export const useDeleteData = <Res>(
    url: string,
): UseMutationResult<Res, Error, string, unknown> => {
    const service = new ApiServices<unknown, Res>();
    return useMutation<Res, Error, string, unknown>({ mutationFn: (id: string) => service.deleteData(url, id) });
};