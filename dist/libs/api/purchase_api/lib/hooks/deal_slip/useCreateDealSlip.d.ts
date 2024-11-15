import { PostResponse } from '../../../../../admin_api/src/index.ts';
import { PostDealSlip } from '../../models';

export declare const useCreateDealSlip: (url: string) => import('@tanstack/react-query').UseMutationResult<PostResponse, Error, PostDealSlip, unknown>;
