export type Navigations = {
    name: string;
    logo?: React.ReactElement;
    path?: string;
    roles?: string[];
    depts?: string[];
    children?: Navigations[];
    grandChildren?: Navigations[];
};
