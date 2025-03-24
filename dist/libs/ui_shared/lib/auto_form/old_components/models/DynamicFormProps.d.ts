import { FormSchema } from './FormSchema';

import * as Yup from 'yup';
export interface DynamicFormProps<T> {
    initialValues: T | any;
    schema: FormSchema;
    handleSubmit: (value: T) => void;
    validationSchema?: Yup.ObjectSchema<Yup.AnyObject>;
    isSubmitError: Error | null;
}
