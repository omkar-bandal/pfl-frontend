import { FieldConfig } from 'formik';

export interface CheckboxInputProps {
    name: string;
    label?: string;
    isRequired?: boolean;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
    fieldConfig?: Omit<FieldConfig, 'name'>;
}
export declare const CheckboxInput: React.FC<CheckboxInputProps>;
