import { ProductPartialData } from "@prime-fresh/common_api";

export const getSelectedProductData = (productId: string | null, products: ProductPartialData[] | null | undefined) => {
    if (products !== null && productId !== null) {
      return products?.find(product => product.id === productId);
    } else {
      return null;
    }
  }