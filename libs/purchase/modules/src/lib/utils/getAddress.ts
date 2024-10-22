import { Address } from "@prime-fresh/purchase_api";

export const displayAddress = (value: Address | undefined) => {
    return `${value?.address1 || ''}, ${value?.address2 || ''}, ${value?.location || ''}, ${value?.city || ''}, ${value?.state || ''}, ${value?.pincode || ''}`;
}