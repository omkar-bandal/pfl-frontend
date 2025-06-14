export type TokenRes = {
    access_token: string;
    refresh_token: string;
}

export type LoggedInUserInfoRes = {
    id: string;
    employeeId: string;
    userName: string;
}

export type EmployeeLevel = {
    id: string,
    name: string
}

export type EmployeePermissions = {
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

export type SignInRequest = {
    uid: string;
    password: string;
}

export type SignInResponse = TokenRes & LoggedInUserInfoRes & {
    status: string;
    level: EmployeeLevel;
    permissions: EmployeePermissions[];
}

export type SignOutRequest = TokenRes;

export type SignOutResponse = {
    message: string,
}