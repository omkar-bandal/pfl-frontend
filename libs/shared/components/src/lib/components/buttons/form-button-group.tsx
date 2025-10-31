/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FormSubmitBtn } from "./btn-form-submit";
import { FormResetBtn } from "./btn-form-reset";
import { FormPreviewBtn } from "./btn-form-preview";
import { Box } from "@mui/material";

export interface FormButtonGroupProps {
    isSubmitting: boolean;
    isSubmitError: Error | null;
    submitLabel: string;
    resetLabel: string;
    onReset: (e?: React.SyntheticEvent<any>) => void;
    onPreview?: any;
    previewLabel?: string;
}

export const FormButtonGroup: React.FC<FormButtonGroupProps> = (props) => {
    const { isSubmitting, isSubmitError, submitLabel, onReset, resetLabel, onPreview, previewLabel } = props;
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FormSubmitBtn label={submitLabel} isSubmitting={isSubmitting} isError={isSubmitError} />
            <FormResetBtn label={resetLabel} handleReset={onReset} />
            {previewLabel && <FormPreviewBtn label={previewLabel} onClick={onPreview} />}
        </Box>
    );
};

