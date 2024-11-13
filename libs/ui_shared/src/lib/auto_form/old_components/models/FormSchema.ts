import { FormField } from "./Field";
import { Tabpanel } from "./Tabpanel";

export interface FormSchema {
  title: string;
  subtitle?: string;
  tabs?: string[];
  tabpanels?: Tabpanel[];
  fields?: FormField[];
}