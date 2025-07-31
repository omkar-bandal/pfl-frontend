import { TextFieldProps } from '@mui/material';
import { default as React } from 'react';

type FileUploadProps = TextFieldProps & {
    isRequired?: boolean;
    label: string;
    name: string;
    isReadOnly?: boolean;
};
export declare const FileUpload: React.FC<FileUploadProps>;
export {};
