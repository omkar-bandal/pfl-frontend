import { PostOffices, PostResponse } from '../../../models';

export declare const useUpdateOffice: (url: string, id: string) => import('@tanstack/react-query').UseMutationResult<PostResponse, Error, PostOffices, unknown>;
