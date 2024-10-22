import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Grid, Typography, RadioGroupProps } from '@mui/material';

type RadioGroupInputProps = RadioGroupProps & {
    isRequired: boolean;
    label: string;
    name: string;
    value: string | undefined | null;
    options: Array<{ label: string; value: string }>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleChange?: any
};

export const RadioGroupInput: React.FC<RadioGroupInputProps> = ({
    isRequired,
    label,
    name,
    value,
    options,
    handleChange,
    ...otherProps
}) => {
    return (
        <>
            <FormLabel component="legend" sx={{marginRight: 2}}>
                {isRequired && <Typography variant='body1' component="span" color="error" sx={{ fontWeight: 600 }}>* </Typography>}
                <Typography variant='body2' component="span">{label}</Typography>
            </FormLabel>
            <FormControl component="fieldset">
                <RadioGroup row name={name} value={value} onChange={handleChange} {...otherProps}>
                    {options.map((option) => (
                        <FormControlLabel
                            key={option.value}
                            control={<Radio />}
                            label={option.label}
                            value={option.value}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </>
    );
};
