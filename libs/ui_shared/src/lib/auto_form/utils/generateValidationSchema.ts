import { FormField } from "../models";
import * as Yup from "yup";

export const generateValidationSchema = (fields: FormField[]) => {
  Yup.object(
    fields.reduce((acc, field) => {
      if(field.name)
      acc[field.name] = Yup.string().required("This field is required");
      return acc;
    }, {} as { [key: string]: Yup.StringSchema })
  );
};