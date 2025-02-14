import { UseMutationResult } from '@tanstack/react-query';

export declare const useCreateData: <Req, Res>(url: string) => UseMutationResult<Res, Error, Req, unknown>;
