import { Autocomplete, FormHelperText, Grid, TextField, Typography } from "@mui/material";
import { FormikErrors, FormikTouched } from "formik";

type AutoCompleteInputProps =  & {
    isRequired: boolean;
    label: string;
    name: string;
    options: { label: string; value: string }[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleChange?: ((event: any, newValue: { label: string, value: string } | null) => void) | undefined
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    touched?: FormikTouched<{ [key: string]: any }>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    errors?: FormikErrors<{ [key: string]: any }>;
};

export const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({ isRequired, label, name, options, handleChange, touched={}, errors={} }) => {
    // Ensure helperText is a string or undefined
  const getHelperText = () => {
    const error = errors[name];
    return typeof error === 'string' ? error : undefined;
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
                <Autocomplete
                    size="small"
                    id={name}
                    fullWidth
                    options={options}
                    getOptionLabel={options => options.label}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
                {touched[name] && getHelperText() && (
                    <FormHelperText>{getHelperText()}</FormHelperText>
                )}
            </Grid>
        </Grid>
    )
}