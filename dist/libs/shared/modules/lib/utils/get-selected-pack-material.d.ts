import { GetPackagingMaterial } from '../../../../../api/admin_api/src/index.ts';

export declare const getSelectedPackMatData: (packMatId: string | null, packMatData: GetPackagingMaterial[] | null | undefined) => GetPackagingMaterial | null | undefined;
