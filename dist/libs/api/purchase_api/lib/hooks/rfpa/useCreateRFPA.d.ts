import { PostRFPA } from '../../models';
import { PostResponse } from '../../../../../admin_api/src/index.ts';

export declare const useCreateRFPA: (url: string) => import('@tanstack/react-query').UseMutationResult<PostResponse, Error, PostRFPA, unknown>;
