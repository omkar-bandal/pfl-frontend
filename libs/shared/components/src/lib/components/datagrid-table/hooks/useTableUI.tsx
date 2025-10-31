import { useTheme, useMediaQuery } from '@mui/material';
import { useGridApiRef } from '@mui/x-data-grid';

export const useTableUI = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const apiRef = useGridApiRef();

  return {
    theme,
    isMobile,
    apiRef,
  };
};