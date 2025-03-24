import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
} from "@mui/material";

export interface Option {
  label: string | number;
  value: string | number;
}

export interface GenericSelectProps {
  label: string;
  name: string;
  value: string | number | null;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  options?: Option[];
  noOptionsMessage?: string;
  error?: string | false;
}

export const Dropdown: React.FC<GenericSelectProps> = ({
  label,
  name,
  value,
  onChange,
  options = [],
  noOptionsMessage = "No options available",
  error,
  ...otherProps
}) => {
  const safeOptions: Option[] = options || [];

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small" fullWidth error={Boolean(error)}>
      <InputLabel id={`${name}-label`} sx={{ fontSize: "14px" }}>
        {label}
      </InputLabel>
      <Select
        labelId={`${name}-label`}
        id={`${name}-select`}
        name={name}
        size="small"
        value={value ?? ""}
        onChange={onChange}
        label={label}
        sx={{
          height: "36px",
          fontSize: "14px",
          "& .MuiSelect-select": { padding: "6px 10px" },
        }}
        {...otherProps}
      >
        {safeOptions.length > 0 ? (
          safeOptions.map((option, index) => (
            <MenuItem key={index} value={option.value} sx={{ fontSize: "14px" }}>
              {option.label}
            </MenuItem>
          ))
        ) : (
          <MenuItem value="" disabled>
            {noOptionsMessage}
          </MenuItem>
        )}
      </Select>
      {error && (
        <FormHelperText>{typeof error === "string" ? error : ""}</FormHelperText>
      )}
    </FormControl>
  );
};

