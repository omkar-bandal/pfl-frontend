import { UseMutationResult } from '@tanstack/react-query';

export declare const useDeleteData: <Res>(url: string) => UseMutationResult<Res, Error, string, unknown>;
