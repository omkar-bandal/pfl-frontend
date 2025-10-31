import { Address } from '@prime-fresh/services';
import { convertInTitleCase } from './convert-string-case';

export const formatAddress = (address: Address | undefined | null) => {
  const addressParts: string[] = [];
  if (!address) {
    return '';
  }
  if (address.address1) {
    addressParts.push(convertInTitleCase(address.address1));
  }
  if (address.address2) {
    addressParts.push(convertInTitleCase(address.address2));
  }
  if (address.location) {
    addressParts.push(convertInTitleCase(address.location));
  }
  if (address.city) {
    addressParts.push(convertInTitleCase(address.city));
  }
  if (address.state) {
    addressParts.push(convertInTitleCase(address.state));
  }
  if (address.pincode) {
    addressParts.push(address.pincode);
  }

  return addressParts.join(', ');
};
