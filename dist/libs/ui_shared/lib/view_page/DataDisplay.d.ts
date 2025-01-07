type DataDisplayProps<T> = {
    header: string;
    data: T;
};
export declare const DataDisplay: <T extends object>({ header, data }: DataDisplayProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
