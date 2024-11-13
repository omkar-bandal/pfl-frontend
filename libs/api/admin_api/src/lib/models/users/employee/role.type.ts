export type Role = {
    name: string;
    roleCode: string;
  }

  export type GetRole = {id: string} & Role;