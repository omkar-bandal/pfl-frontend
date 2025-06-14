import { GetPackagingMaterial } from "@prime-fresh/admin_api";

export const getSelectedPackMatData = (packMatId: string | null, packMatData: GetPackagingMaterial[] | null | undefined) => {
    if (packMatData !== null && packMatId !== null) {
      return packMatData?.find(product => product.id === packMatId);
    } else {
      return null;
    }
  }