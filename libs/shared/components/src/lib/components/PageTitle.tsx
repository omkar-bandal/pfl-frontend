import { memo } from 'react';
import { Box, Typography, useTheme } from '@mui/material';

export const PageTitle = memo(({ pagetitle, pageSubtitle, textAlign = 'start' }: { pagetitle: string; pageSubtitle?: string; textAlign?: 'center' | 'end' | 'start' }) => {
  const theme = useTheme();
  return (
    <Box flex={1} sx={{ textAlign: textAlign }}>
      <Typography component="div" variant="h5" sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
        {pagetitle}
      </Typography>
      {pageSubtitle && <Typography component="div" variant="caption" sx={{ color: theme.palette.text.primary }}>
        {pageSubtitle}
      </Typography>}
    </Box>
  );
});
