import React from 'react';
import { Box, Grid2, List, ListItem, ListItemText, Paper, Theme } from '@mui/material';
import { CustomTabPanel, PieChart, PieChartData, ScrollableList, TabItem, ValueDisplayCard } from '../../../components';
import { IUserStatisticData } from '@prime-fresh/services';

const renderTabPanelContent = (data: IUserStatisticData['activeUsers']) => {
  return (
    <Box
      sx={{
        height: 200,
        overflowY: 'auto',
        scrollbarColor: `#FFFFFF #BDC3C7`,
        scrollbarWidth: 'thin',
        // border: '1px solid #BDC3C7',
        borderRadius: 1,
        p: 1,
      }}
    >
      <List>
        {data.map((user) => (
          <ListItem key={user.id} disableGutters sx={{ py: 0, minHeight: 24 }}>
            <ListItemText
              primary={user.username}
              primaryTypographyProps={{
                variant: 'body2',
                noWrap: true,
                fontWeight: 600,
                color: 'text.primary',
              }}
            />
          </ListItem>
        ))}
        {data.length === 0 && (
          <ListItem disableGutters>
            <ListItemText
              primary="No usernames available."
              primaryTypographyProps={{ variant: 'caption', color: 'text.primary' }}
            />
          </ListItem>
        )}
      </List>
    </Box>
  );
};

type UserStatisticsProps = {
  data: IUserStatisticData | null;
};
export const UserStatistics: React.FC<UserStatisticsProps> = ({ data }) => {
  const UserPieChartData: PieChartData = {
    labels: ['Active', 'Inactive'],
    values: [data?.activeCount || 0, data?.inActiveCount || 0],
    colors: ['#4CAF50', '#FF9800'],
  };
  const tabContents: TabItem[] = [
    {
      label: 'Active Users',
      content: renderTabPanelContent(data?.activeUsers ?? []),
      tabSx: {
        textTransform: 'none',
        fontWeight: 600,
        fontSize: 15,
        color: 'text.primary',
        '&.Mui-selected': {
          color: 'text.primary',
        },
        '&.Mui-focusVisible': {
          backgroundColor: 'text.primary',
        },
      },
    },
    {
      label: 'Inactive Users',
      content: renderTabPanelContent(data?.inactiveUsers ?? []),
      tabSx: {
        textTransform: 'none',
        fontWeight: 600,
        fontSize: 15,
        color: 'text.secondary',
        '&.Mui-selected': {
          color: 'primary.contrastText',
        },
        '&.Mui-focusVisible': {
          backgroundColor: 'primary.contrastText',
        },
      },
    },
  ];
  return (
    <Paper
      elevation={2}
      sx={{ padding: 1, borderRadius: 3, background: '#ebe8e0', borderLeft: `10px solid #6c473d` }}
    >
      <Grid2 container spacing={1} alignItems="center">
        <Grid2 container spacing={1} size={{ xs: 12, md: 2 }}>
          <Grid2 size={12}>
            <ValueDisplayCard
              title="Total Users"
              value={data?.totalUser || 0}
              textColor="text.primary"
            />
          </Grid2>
          <Grid2 size={12}>
            <ValueDisplayCard
              title="Active Users"
              value={data?.activeCount || 0}
              textColor="text.primary"
            />
          </Grid2>
          <Grid2 size={12}>
            <ValueDisplayCard
              title="Inactive Users"
              value={data?.inActiveCount || 0}
              textColor="text.primary"
            />
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }} sx={{ border: `1px solid #808080`, borderRadius: 3 }}>
          <PieChart
            data={UserPieChartData}
            height={250}
            sx={{
              borderRadius: 3,
            }}
            options={{
              plugins: {
                legend: { position: 'bottom' },
                datalabels: { display: false },
              },
            }}
          />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }} sx={{ p: 1, border: `1px solid #808080`, borderRadius: 3 }}>
          <CustomTabPanel
            tabs={tabContents}
            defaultValue={0}
            tabsSx={{ borderRadius: 3}}
          />
        </Grid2>
      </Grid2>
    </Paper>
  );
};
