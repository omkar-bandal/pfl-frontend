import { FormField } from "../models";

export const generateInitialValues = (fields: FormField[]): { [key: string]: string } =>
  fields.reduce((acc, field) => {
    if(field.name)
    acc[field.name] = "";
    return acc;
  }, {} as { [key: string]: string });
