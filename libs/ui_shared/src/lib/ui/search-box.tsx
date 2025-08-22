/* eslint-disable @typescript-eslint/no-explicit-any */
import { Close, Search } from "@mui/icons-material"
import { IconButton, TextField, TextFieldProps } from "@mui/material"
import { FC } from "react";

type SearchBoxPropsType = Omit<TextFieldProps, 'name'> & {
  name: string;
  onClearSearch: any;
}
export const SearchBox: FC<SearchBoxPropsType> = ({ name, onClearSearch, ...rest }) => {
  return (
    <TextField
      {...rest}
      fullWidth
      size="small"
      type="text"
      name={name}
      slotProps={{
        input: {
          startAdornment: <Search />,
          endAdornment: <IconButton size='small' onClick={onClearSearch}><Close /></IconButton>
        }
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 10,
          fontSize: 14,
          height: 32,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
      }}
    />
  )
}