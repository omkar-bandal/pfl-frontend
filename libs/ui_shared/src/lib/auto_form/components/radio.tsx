import React from 'react';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography, RadioGroupProps, Grid } from '@mui/material';
import { FormikErrors, FormikTouched, useField } from 'formik';

type RadioGroupInputProps = RadioGroupProps & {
    isRequired: boolean;
    label: string;
    name: string;
    value: string | boolean | undefined | null;
    alignment?: "horizontal" | "vertical";
    options: Array<{ label: string; value: string | number | boolean }>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleChange?: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    touched?: FormikTouched<{ [key: string]: any }>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors?: FormikErrors<{ [key: string]: any }>;
};

export const RadioGroupInput: React.FC<RadioGroupInputProps> = ({
    isRequired,
    label,
    name,
    value,
    options,
    alignment,
    handleChange,
    touched = {},
    errors = {},
    ...otherProps
}) => {
    // const getHelperText = () => {
    //     const error = errors[name];
    //     return typeof error === 'string' ? error : undefined;
    // };
    const [field, meta] = useField(name);
    return (
        <Grid container direction={alignment ? "row" : "column"} alignItems={alignment ? "center" : "start"}>
            <Grid item xs={12} md={2}>
                {isRequired && (
                    <Typography variant="body1" component="span" color="error" sx={{ fontWeight: 600 }}>
                        *{" "}
                    </Typography>
                )}
                <Typography variant="body2" component="span">
                    {label}
                </Typography>
            </Grid>
            <Grid item xs={12} md={10}>
                <FormControl component="fieldset">
                    <RadioGroup row name={name} value={value} onChange={handleChange} {...otherProps}>
                        {options.map((option) => (
                            <FormControlLabel
                                {...field}
                                key={option.label}
                                control={<Radio />}
                                label={option.label}
                                value={option.value}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                {meta.touched && Boolean(meta.error) &&  (
                    <Typography variant='caption' component="div" color='error'>{meta.error}</Typography>
                )}
            </Grid>
        </Grid>
    );
};
