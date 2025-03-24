import { FormSchema } from "./FormSchema";
import * as Yup from 'yup';

export interface DynamicFormProps<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValues: T | any;
  schema: FormSchema;
  handleSubmit: (value: T) => void;
  validationSchema?: Yup.ObjectSchema<Yup.AnyObject>;
  isSubmitError: Error | null;
}