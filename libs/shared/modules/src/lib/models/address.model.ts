export type Address = {
  id?: string;
  address1: string | null;
  address2: string | null;
  location: string | null;
  city: string | null;
  state: string | null;
  pincode: string | null;
}

export type GetAddress = Address & { id: string };

export type GetAddressByPincode = {
  pincode: string;
  district: string;
  state: string;
  country: string;
};
