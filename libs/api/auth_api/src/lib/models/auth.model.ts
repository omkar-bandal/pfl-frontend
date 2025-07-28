export interface ITokenRes  {
    access_token: string;
    refresh_token: string;
}

export interface ILoggedInUserInfoRes  {
    id: string;
    employeeId: string;
    userName: string;
    department: string ;
}

export interface IEmployeePermissions {
    documentDefinition: {
        id: string,
        name: string,
        uniqueKey: string,
    },
    canCreate: boolean,
    canView: boolean,
    canEdit: boolean,
    canDelete: boolean,
    canDownload: boolean
}

export interface ISignInRequest {
    uid: string;
    password: string;
}

export interface ISignInResponse extends ITokenRes, ILoggedInUserInfoRes {
    permissions: IEmployeePermissions[];
    status: string;
}

export type ISignOutRequest = ITokenRes;

export interface ISignOutResponse {
    message: string,
}

export interface IForgetPasswordReq {
    uid: string;
}

export interface IResetPasswordReq {
    email: string;
}