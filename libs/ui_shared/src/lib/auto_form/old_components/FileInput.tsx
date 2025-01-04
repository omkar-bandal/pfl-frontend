import React from "react";
import { Box, IconButton, styled, Typography } from "@mui/material";
import { Field, FieldProps, FormikProps } from "formik";
import { FormField } from "./models";
import { AttachFile } from "@mui/icons-material";

type FileInputProp = {
    formField: FormField;
};
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
export const FileInput: React.FC<FileInputProp> = ({ formField }) => {
    const fileRef = React.useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = React.useState<string>('');

    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        setFieldValue: FormikProps<File>['setFieldValue']
    ) => {
        const file = event.target.files?.[0];

        if (file) {
            const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png', 'txt', 'xlsx'];
            const fileExtension = file.name.split('.').pop()?.toLowerCase();

            if (fileExtension && allowedExtensions.includes(fileExtension)) {
                setFieldValue(formField.name, file);
                setFileName(file.name);
            } else {
                alert('Invalid file type! Please select a valid file.');
            }
        }
    };

    return (
            <Field name={formField.name}>
                {({ form }: FieldProps) => (
                    <Box
                        width="100%"
                        display="flex"
                        alignItems="center"
                        sx={{ border: '1px solid #BDBDBD', borderRadius: 1 }}
                    >
                        <IconButton
                            onClick={() => {
                                fileRef.current?.click();
                            }}
                        >
                            <AttachFile />
                        </IconButton>
                        <Typography variant="body2">{fileName || 'No file selected'}</Typography>
                        <VisuallyHiddenInput
                            ref={fileRef}
                            id={formField.name}
                            type="file"
                            accept=".pdf, .jpeg, .jpg, .png, .txt, .xlsx"
                            onChange={(event) => handleFileChange(event, form.setFieldValue)}
                        />
                    </Box>
                )}
            </Field>
    );
};