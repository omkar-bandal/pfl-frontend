import React from 'react';
import { FieldArray } from 'formik';
import { IconButton, Chip, Grid, TextField, } from '@mui/material';
import { Add, Close } from '@mui/icons-material';
import { Label } from './label';

type MultipleTextInputProps = {
  isRequired: boolean;
  name: string;
  label: string;
  values: string[];
  setFieldValue: (field: string, value: string[]) => void;
}

export const MultipleTextInput: React.FC<MultipleTextInputProps> = ({ isRequired, name, label, values, setFieldValue }) => {
  const [inputValue, setInputValue] = React.useState<string>('');

  // Safely access the array for the specified field
  const chips: string[] = Array.isArray(values) ? values : [];

  return (
    <FieldArray name={name}>
      {({ push, remove }) => (
        <Grid container direction="column">
          <Grid item xs={12}>
            <Label
              isRequired={isRequired}
              isError={false}
              label={label}
              name={name} />
          </Grid>
          <Grid item container sx={{ border: `1px solid #ccc`, borderRadius: 1 }}>
            <Grid item xs={11} md={3} sx={{ borderRight: `1px solid #ccc`, borderBottom: `1px solid #ccc` }}>
              <TextField
                name="inputValue"
                size="small"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    border: "none",
                    "& fieldset": {
                      border: "none",
                    },
                    "&:before, &:after": {
                      border: "none",
                    },
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && inputValue.trim()) {
                    e.preventDefault();
                    if (!chips.includes(inputValue.trim())) {
                      const updatedChips = [...chips, inputValue.trim()];
                      setFieldValue(name, updatedChips); // Update form value
                      setInputValue('');
                    }
                  }
                }}
              />
            </Grid>
            <Grid item xs={1} md={1}>
              <IconButton
                color="primary"
                onClick={() => {
                  if (inputValue.trim() && !chips.includes(inputValue.trim())) {
                    const updatedChips = [...chips, inputValue.trim()];
                    setFieldValue(name, updatedChips); // Update form value
                    setInputValue('');
                  }
                }}
              >
                <Add />
              </IconButton>
            </Grid>
            <Grid item xs={12} md={8} sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
              {chips.map((chip: string, index: number) => (
                <Chip
                  key={index}
                  label={chip}
                  sx={{ margin: `1px` }}
                  onDelete={() => {
                    const updatedChips = chips.filter((_, i) => i !== index);
                    setFieldValue(name, updatedChips);
                  }}
                  deleteIcon={<Close />}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      )
      }
    </FieldArray >
  );
};
