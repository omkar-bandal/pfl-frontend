import { Address } from "@prime-fresh/purchase_api";

export const displayAddress = (address: Address | undefined) => {
    const addressParts: string[] = [];
    if (!address) {
        return '';
    }
    if (address.address1) {
        addressParts.push(address.address1);
    }
    if (address.address2) {
        addressParts.push(address.address2);
    }
    if (address.location) {
        addressParts.push(address.location);
    }
    if (address.city) {
        addressParts.push(address.city);
    }
    if (address.state) {
        addressParts.push(address.state);
    }
    if (address.pincode) {
        addressParts.push(address.pincode);
    }

    return addressParts.join(', ');
}
