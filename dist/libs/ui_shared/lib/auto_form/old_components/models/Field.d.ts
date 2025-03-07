import { Option } from './Option';

export interface FormField {
    isRequired?: boolean;
    name: string;
    label: string;
    type: string;
    placeholder?: string;
    options?: Option[];
    length?: number;
    subFields?: FormField[];
}
