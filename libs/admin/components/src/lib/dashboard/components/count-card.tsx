import React from 'react'
import { Card, Typography, CardContent, Box, Grid, Stack } from '@mui/material'
import { getGrandientBackground } from '@prime-fresh/shared/modules'
import { ChevronRight } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

interface CountCardProps {
  title: string;
  count: number;
  color: string;
  icon?: React.ReactNode;
  buttonTitle?: string;
  navigateTo?: string; 
}

export const CountCard: React.FC<CountCardProps> = ({ title, count = 0, color, icon: IconComponent, buttonTitle = '', navigateTo = '' }) => {
  const cardBackground = getGrandientBackground(135, color, 20)
  return (
    <Card
      sx={{
        padding: 1,
        borderRadius: 3,
        background: cardBackground,
        color: '#fff',
        minWidth: 200,
        height: 140,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
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
          <Grid item xs={10}>
            <Stack spacing={1}>
              <Typography variant="body1" component="div" gutterBottom sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
                {title}
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', color: '#FFFFFF' }}>
                {count}
              </Typography>
              <NavLink to={navigateTo}>
                <Typography variant='body2' component='button' sx={{ fontSize: 12, fontWeight: 600, color: '#FFFFFF' }}>
                  {buttonTitle}<ChevronRight fontSize='small' />
                </Typography>
              </NavLink>
            </Stack>
          </Grid>
          <Grid item xs={2}>
            {IconComponent && (
              <Box sx={{ mb: 2, color: '#FFFFFF' }}>
                {IconComponent}
              </Box>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
