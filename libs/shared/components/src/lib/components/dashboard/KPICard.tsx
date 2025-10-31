import React from 'react';
import { Card, Typography, CardContent, Box, Grid, Stack, LinearProgress } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { RegistrationData } from '@prime-fresh/services';

interface KPICardProps {
  title: string;
  data: RegistrationData | null;
  color?: string;
  icon?: React.ReactNode;
  buttonTitle?: string;
  navigateTo?: string;
  cardSx?: any;
  textColor?: any;
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  data,
  color,
  icon: IconComponent,
  buttonTitle = '',
  navigateTo = '',
  cardSx,
  textColor,
}) => {
  // const cardBackground = getGrandientBackground(135, color, 5)
  function renderLiniearProgrss(label: string, count: number, barcolor: any) {
    return (
      <Stack spacing={1}>
        <Typography variant="body2" component="div" color={textColor ?? `text.primary`} sx={{ fontWeight: 700 }}>
          {label} ({count})
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress variant="determinate" color={barcolor} value={count} sx={{ height: 10, borderRadius: 5 }} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color={textColor ?? `text.primary`}>{`${Math.round(count)}%`}</Typography>
          </Box>
        </Box>
      </Stack>
    );
  }
  return (
    <Card
      sx={{
        ...cardSx,
        padding: 1,
        borderRadius: 3,
        // borderLeft: `10px solid ${color}`,
        minWidth: 200,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 10,
        },
      }}
      elevation={4}
    >
      <CardContent>
        <Grid container>
          <Grid item xs={9}>
            <Stack spacing={1}>
              <Typography variant="body1" component="div" color={textColor ?? `text.primary`} gutterBottom sx={{ fontWeight: 'bold' }}>
                {title}
              </Typography>
              <Typography variant="h4" component="div" color={textColor ?? `text.primary`} sx={{ fontWeight: 'bold' }}>
                {data?.total ?? 0}
              </Typography>
              {buttonTitle && (
                <NavLink to={navigateTo}>
                  <Typography
                    variant="body2"
                    component="button"
                    color={textColor ?? `text.primary`}
                    sx={{ fontSize: 12, fontWeight: 600 }}
                  >
                    {buttonTitle}
                    <ChevronRight fontSize="small" color='inherit' />
                  </Typography>
                </NavLink>
              )}
            </Stack>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                p: 2,
                borderRadius: '50%',
                backgroundColor: `rgba(255, 255, 255, 0.1)`,
                backdropFilter: `blur(5px)`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {IconComponent}
            </Box>
          </Grid>
          <Grid item xs={12} marginTop={1}>
            <Stack spacing={1}>
              {renderLiniearProgrss('Pending', data?.pending ?? 0, 'warning')}

              {renderLiniearProgrss('Approved', data?.approved ?? 0, 'primary')}

              {renderLiniearProgrss('Not Approved', data?.notApproved ?? 0, 'error')}
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
