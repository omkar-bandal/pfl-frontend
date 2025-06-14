import { Box, Typography } from '@mui/material';

export const PageTitle = ({ pagetitle, pageSubtitle }: { pagetitle: string; pageSubtitle?: string }) => {
  return (
    <Box flex={1}>
      <Typography component="div" variant="h5" sx={{ fontWeight: 700, color: '#595959' }}>
        {pagetitle}
      </Typography>
      {pageSubtitle && <Typography component="div" variant="caption" sx={{ color: '#595959' }}>
        {pageSubtitle}
      </Typography>}
    </Box>
  );
};
