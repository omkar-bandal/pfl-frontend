import { FormField } from './Field';

export interface Tabpanel {
    tabname: string;
    value: number;
    fields: FormField[];
}
