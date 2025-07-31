import { RootState } from '../store.admin';
import { PostPackagingMaterial } from '@prime-fresh/admin_api';
type PackagingMaterialDataState = {
    packagingMaterialFormPreview: PostPackagingMaterial | null;
};
export declare const setPackagingMaterialFormPreview: import("@reduxjs/toolkit").ActionCreatorWithPayload<PostPackagingMaterial, "packagingMaterialData/setPackagingMaterialFormPreview">;
export declare const packagingMaterialDataStates: (state: RootState) => PackagingMaterialDataState;
export declare const packagingMaterialDataReducer: import("@reduxjs/toolkit").Reducer<PackagingMaterialDataState>;
export {};
