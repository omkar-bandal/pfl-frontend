import React from 'react';
import { useField } from 'formik';
import { AttachFile } from '@mui/icons-material';
import { Grid, Typography, Box, IconButton, styled } from '@mui/material';

interface FileUploadProps {
    isRequired?: boolean;
    label: string;
    name: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({ isRequired, label, name }) => {
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
                {isRequired && (
                    <Typography variant="body1" component="span" color="error" sx={{ fontWeight: 600 }}>
                        *{' '}
                    </Typography>
                )}
                <Typography variant="body2" component="span">
                    {label}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    sx={{ border: '1px solid #BDBDBD', borderRadius: 1, padding: '2px' }}
                >
                    <IconButton size="small"
                        onClick={() => fileRef.current?.click()}>
                        <AttachFile />
                    </IconButton>
                    <Typography variant="body2" sx={{ flex: 1, marginLeft: 1 }}>
                        {fileName || 'No file selected'}
                    </Typography>
                    <VisuallyHiddenInput
                        ref={fileRef}
                        type="file"
                        accept=".pdf, .jpeg, .jpg, .png, .txt, .xlsx"
                        onChange={handleFileChange}
                    />
                </Box>
                {meta.touched && meta.error && (
                    <Typography variant="caption" color="error">
                        {meta.error}
                    </Typography>
                )}
            </Grid>
        </Grid>
    );
};
