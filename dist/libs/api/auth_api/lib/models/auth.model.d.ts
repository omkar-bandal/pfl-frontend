export type TokenRes = {
    access_token: string;
    refresh_token: string;
};
export type LoggedInUserInfoRes = {
    department: string;
    userName: string;
};
export type SignInRequest = {
    uid: string;
    password: string;
};
export type SignInResponse = TokenRes & LoggedInUserInfoRes & {
    status: string;
};
export type SignOutRequest = TokenRes;
export type SignOutResponse = {
    message: string;
};
