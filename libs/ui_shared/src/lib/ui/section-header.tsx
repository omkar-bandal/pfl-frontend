import { Box, Typography } from '@mui/material';
import { InfoTooltip } from './info-tip';

export const SectionHeader = ({ sectionHeader, infoTipText = '' }: { sectionHeader: string; infoTipText?: string }) => {
  return (
    <Box sx={{ width: '100%', borderBottom: `1px solid #BDBDBD` }}>
      <InfoTooltip info={infoTipText}>
        <Typography
          variant="body2"
          component="span"
          sx={{ fontWeight: 600 }}
        >
          {sectionHeader}
        </Typography>
      </InfoTooltip>
    </Box>
  );
};
