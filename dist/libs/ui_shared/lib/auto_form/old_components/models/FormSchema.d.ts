import { Tabpanel } from './Tabpanel';
import { FormField } from './Field';

export interface FormSchema {
    title: string;
    subtitle?: string;
    tabs?: string[];
    tabpanels?: Tabpanel[];
    fields?: FormField[];
}
