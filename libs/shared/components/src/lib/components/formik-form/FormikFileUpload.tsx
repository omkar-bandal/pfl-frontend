import React from 'react';
import { useField } from 'formik';
import { AttachFile } from '@mui/icons-material';
import { Label } from './FormikLabel';
import { Grid, Typography, Box, IconButton, styled, TextFieldProps } from '@mui/material';

type FileUploadProps = TextFieldProps & {
    isRequired?: boolean;
    label: string;
    name: string;
    isReadOnly?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({ isRequired, isReadOnly, label, name }) => {
    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;
    const fileRef = React.useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = React.useState<string>(field.value?.name || '');

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

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png', 'txt', 'xlsx'];
            const fileExtension = file.name.split('.').pop()?.toLowerCase();

            if (fileExtension && allowedExtensions.includes(fileExtension)) {
                setValue(file);
                setFileName(file.name);
            } else {
                alert('Invalid file type! Please select a valid file.');
            }
        }
    };

    return (
        <Grid container direction="column">
            <Grid item xs={12}>
                <Label
                    isRequired={isRequired}
                    isReadOnly={isReadOnly}
                    isError={meta.touched && Boolean(meta.error)}
                    name={name}
                    label={label} />
            </Grid>
            <Grid item xs={12}>
                <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    sx={{ border: '1px solid #BDBDBD', borderRadius: 1, padding: '2px' }}
                >
                    <IconButton size="small" disabled={isReadOnly}
                        onClick={() => fileRef.current?.click()}>
                        <AttachFile />
                    </IconButton>
                    <Typography variant="body2" sx={{ flex: 1, marginLeft: 1, color: isReadOnly ? "#9e9e9e" : "#000000" }}>
                        {fileName || 'No file selected'}
                    </Typography>
                    <VisuallyHiddenInput
                        ref={fileRef}
                        type="file"
                        accept=".pdf, .jpeg, .jpg, .png, .txt, .xlsx"
                        onChange={handleFileChange}
                        disabled={isReadOnly}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                pointerEvents: isReadOnly ? "none" : "auto",
                            },
                        }}
                    />
                </Box>
                {meta.touched && Boolean(meta.error) && (
                    <Typography variant="caption" color="error">
                        {meta.error}
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};
