export type Address = {
    address1: string;
    address2: string;
    location: string;
    city: string;
    state: string;
    pincode: string;
};
export type GetAddress = Address & {
    id: string;
};
