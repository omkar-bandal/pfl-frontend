import { UseMutationResult } from '@tanstack/react-query';

export declare const useUpdateData: <Req, Res>(url: string, id: string) => UseMutationResult<Res, Error, Req, unknown>;
