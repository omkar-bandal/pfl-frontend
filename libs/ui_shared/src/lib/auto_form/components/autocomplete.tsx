// import { Autocomplete, FormHelperText, Grid, TextField, Typography } from "@mui/material";
// import { FormikErrors, FormikTouched } from "formik";

// type AutoCompleteInputProps = {
//     isRequired: boolean;
//     label: string;
//     name: string;
//     options: { label: string; value: string }[];
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     value?: any;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     handleChange?: ((event: any, newValue: { label: string, value: string } | null) => void) | undefined
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     touched?: FormikTouched<{ [key: string]: any }>;
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     errors?: FormikErrors<{ [key: string]: any }>;
// };

// export const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({ isRequired, label, name, value, options, handleChange, touched={}, errors={} }) => {
//     // Ensure helperText is a string or undefined
//   const getHelperText = () => {
//     const error = errors[name];
//     return typeof error === 'string' ? error : undefined;
//   };
//     return (
//         <Grid container direction="column">
//             <Grid item xs={12}>
//                 {isRequired && (
//                     <Typography variant="body1" component="span" color="error" sx={{ fontWeight: 600 }}>
//                         *{' '}
//                     </Typography>
//                 )}
//                 <Typography variant="body2" component="span">
//                     {label}
//                 </Typography>
//             </Grid>
//             <Grid item xs={12}>
//                 <Autocomplete
//                     size="small"
//                     id={name}
//                     fullWidth
//                     value={value}
//                     inputValue={value}
//                     options={options}
//                     getOptionLabel={options => options.label}
//                     onChange={handleChange}
//                     renderInput={(params) => <TextField {...params} />}
//                 />
//                 {touched[name] && getHelperText() && (
//                     <FormHelperText><Typography variant="caption" component="div" color="error">{getHelperText()}</Typography></FormHelperText>
//                 )}
//             </Grid>
//         </Grid>
//     )
// }

import React from 'react';
import { Autocomplete, TextField, Grid, Typography } from '@mui/material';
import { FormikErrors, FormikTouched } from 'formik';

type AutoCompleteOption = {
  label: string;
  value: string;
};

type AutoCompleteInputProps = {
  isRequired?: boolean;
  label: string;
  name: string;
  options: AutoCompleteOption[];
  value?: AutoCompleteOption | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange?: (event: any, newValue: AutoCompleteOption | null) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  touched?: FormikTouched<{ [key: string]: any }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: FormikErrors<{ [key: string]: any }>;
};

export const AutoCompleteInput: React.FC<AutoCompleteInputProps> = ({
  isRequired = false,
  label,
  name,
  options,
  value = null,
  handleChange,
  touched = {},
  errors = {},
}) => {
  // Helper function for error messages
  const getHelperText = (): string | undefined => {
    const error = errors[name];
    return typeof error === 'string' ? error : undefined;
  };

  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <Typography variant="body2" component="label" htmlFor={name}>
          {label}
          {isRequired && (
            <Typography variant="body2" component="span" color="error" sx={{ fontWeight: 600 }}>
              {' '}
              *
            </Typography>
          )}
        </Typography>
      </Grid>
      <Grid item>
        <Autocomplete
          id={name}
          size="small"
          fullWidth
          value={value}
          onChange={handleChange}
          options={options}
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          renderInput={(params) => (
            <TextField
              {...params}
              name={name}
              variant="outlined"
              error={Boolean(touched[name] && errors[name])}
              helperText={touched[name] && getHelperText()}
            />
          )}
        />
      </Grid>
    </Grid>
  );
};
