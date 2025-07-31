export type Level = {
    name: string;
    hierarchy: number;
    department: string;
};
export type GetLevel = {
    id: string;
} & Level;
export type Department = {
    name: string;
};
export type GetDepartment = {
    id: string;
    name: string;
    levels: GetLevel[];
};
