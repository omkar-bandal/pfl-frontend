import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FilterAlt, ChevronRight } from '@mui/icons-material';
import { Stack, Box, Typography, IconButton } from '@mui/material';

type DashboardSectionHeaderProps = {
  title: string;
  onFilterBtnClick?: () => void;
  navBtnLabel?: string;
  navRoute?: string;
};
export const DashboardSectionHeader: FC<DashboardSectionHeaderProps> = ({
  title,
  onFilterBtnClick,
  navBtnLabel = 'View All',
  navRoute = '/',
}) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        marginY: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" component="span" color="text.primary" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        {onFilterBtnClick && (
          <IconButton
            color="secondary"
            aria-label="open-registration-filters"
            sx={{ marginX: 1 }}
            onClick={onFilterBtnClick}
          >
            <FilterAlt />
          </IconButton>
        )}
      </Box>
      <NavLink to={navRoute}>
        <Typography variant="body2" component="button" color="text.primary" sx={{ fontWeight: 600 }}>
          {navBtnLabel}
          <ChevronRight fontSize="small" />
        </Typography>
      </NavLink>
    </Stack>
  );
};
