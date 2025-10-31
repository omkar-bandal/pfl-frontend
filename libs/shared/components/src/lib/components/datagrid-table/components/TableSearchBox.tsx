/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo } from "react";
import { Search } from "@mui/icons-material"
import { TextField, TextFieldProps } from "@mui/material"

type TableSearchBoxPropsType = Omit<TextFieldProps, 'name'> & {
  name: string;
}
export const TableSearchBox: FC<TableSearchBoxPropsType> = memo(({ name, ...rest }) => {
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
        }
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 10,
          fontSize: 14,
          // height: 32,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
      }}
    />
  )
});