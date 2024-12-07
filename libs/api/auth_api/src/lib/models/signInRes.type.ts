import { LoggedInUserInfoRes } from "./loggedInUserInfoRes.type";
import { TokenRes } from "./tokenRes.type";

export type SignInResponse = TokenRes & LoggedInUserInfoRes & {
    status: string;
}