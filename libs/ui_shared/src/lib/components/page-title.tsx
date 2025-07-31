import { Box, Typography } from '@mui/material';

export const PageTitle = ({ pagetitle, pageSubtitle, textAlign = 'start' }: { pagetitle: string; pageSubtitle?: string; textAlign?: 'center' | 'end' | 'start' }) => {
  return (
    <Box flex={1} sx={{ textAlign: textAlign }}>
      <Typography component="div" variant="h5" sx={{ fontWeight: 700, color: '#595959' }}>
        {pagetitle}
      </Typography>
      {pageSubtitle && <Typography component="div" variant="caption" sx={{ color: '#595959' }}>
        {pageSubtitle}
      </Typography>}
    </Box>
  );
};
