export type LabelProps = {
    isRequired?: boolean;
    label: string;
    name: string;
    isReadOnly?: boolean;
    isError: boolean;
    infoTipText?: string;
};
export declare const Label: React.FC<LabelProps>;
