import { Box, Grid2, List, ListItem, ListItemText, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { Pie } from 'react-chartjs-2';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}
const mockActiveUserList = [
  { id: 1, name: 'Alice Smith (Admin)' },
  { id: 2, name: 'Bob Johnson (Manager)' },
  { id: 3, name: 'Charlie Brown (Staff)' },
  { id: 4, name: 'Dana Scully (Auditor)' },
  { id: 5, name: 'Ethan Hunt (Agent)' },
  { id: 6, name: 'Fiona Glenanne (Support)' },
  { id: 7, name: 'Grace Hopper (Developer)' },
  { id: 8, name: 'Harry Potter (Trainee)' },
];

const mockInactiveUserList = [
  { id: 11, name: 'Kevin Flynn (Leave)' },
  { id: 12, name: 'Laura Croft (Terminated)' },
  { id: 13, name: 'Mark Watney (Consultant)' },
  { id: 14, name: 'Nina Simone (Retired)' },
  { id: 15, name: 'Oliver Queen (Suspended)' },
];

const mockUserLists = {
  active: mockActiveUserList,
  inactive: mockInactiveUserList,
};

export const DashboardAdmin = () => {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  return (
    <Box flex={1}>
      <Typography variant="h6" component="span" color="text.primary" sx={{ fontWeight: 700 }}>
        User Statistics
      </Typography>
      <Paper elevation={2} sx={{ padding: 2 }}>
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography variant="body1" component="div" color="text.primary" sx={{ fontWeight: 600 }}>
                  Total Users
                </Typography>
                <Typography
                  variant="h3"
                  textAlign="center"
                  component="div"
                  color="text.primary"
                  sx={{ fontWeight: 600 }}
                >
                  440
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" component="div" color="text.primary" sx={{ fontWeight: 600 }}>
                  Active Users
                </Typography>
                <Typography
                  variant="h3"
                  textAlign="center"
                  component="div"
                  color="text.primary"
                  sx={{ fontWeight: 600 }}
                >
                  420
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" component="div" color="text.primary" sx={{ fontWeight: 600 }}>
                  Inactive Users
                </Typography>
                <Typography
                  variant="h3"
                  textAlign="center"
                  component="div"
                  color="text.primary"
                  sx={{ fontWeight: 600 }}
                >
                  20
                </Typography>
              </Box>
            </Stack>
            <Box sx={{ width: '100%', height: 200, px: 2 }}>
              <Pie
                data={{
                  labels: ['Active', 'Inactive'],
                  datasets: [
                    {
                      data: [530, 20],
                      backgroundColor: ['#0da84c', '#e6e6e6'],
                      borderWidth: 1,
                      hoverOffset: 15,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'right' as const,
                      labels: {
                        boxWidth: 40,
                        padding: 40,
                        font: {
                          family: 'Arial',
                          size: 14,
                          weight: 600,
                        },
                      },
                    },
                    datalabels: {
                      display: false,
                    },
                  },
                }}
              />
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs
                centered
                value={tab}
                onChange={handleTabChange}
                sx={{
                  '& .MuiTabs-indicator': {
                    backgroundColor: tab === 0 ? '#13532e' : '#E74C3C',
                  },
                }}
              >
                <Tab
                  label="Active Users"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: 15,
                    '&.Mui-selected': {
                      color: '#13532e',
                    },
                    '&.Mui-focusVisible': {
                      backgroundColor: '#13532e',
                    },
                  }}
                />
                <Tab
                  label="Inactive Users"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: 15,
                    '&.Mui-selected': {
                      color: '#E74C3C',
                    },
                    '&.Mui-focusVisible': {
                      backgroundColor: '#E74C3C',
                    },
                  }}
                />
              </Tabs>
            </Box>
            <CustomTabPanel value={tab} index={0}>
              <Box
                sx={{
                  maxHeight: 230,
                  overflowY: 'auto',
                  border: '1px solid #E0E0E0',
                  borderRadius: 1,
                  p: 1,
                }}
              >
                <List disablePadding>
                  {mockActiveUserList.map((user) => (
                    <ListItem key={user.name} disableGutters sx={{ py: 0, minHeight: 24 }}>
                      <ListItemText
                        primary={user.name}
                        primaryTypographyProps={{
                          variant: 'body2',
                          noWrap: true,
                          fontWeight: 600,
                          color: 'text.primary',
                        }}
                      />
                    </ListItem>
                  ))}
                  {mockActiveUserList.length === 0 && (
                    <ListItem disableGutters>
                      <ListItemText
                        primary="No users in this list."
                        primaryTypographyProps={{ variant: 'caption', fontStyle: 'italic', color: 'text.secondary' }}
                      />
                    </ListItem>
                  )}
                </List>
              </Box>
            </CustomTabPanel>
            <CustomTabPanel value={tab} index={1}>
              <Box
                sx={{
                  maxHeight: 230,
                  overflowY: 'auto',
                  border: '1px solid #E0E0E0',
                  borderRadius: 1,
                  p: 1,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{ display: 'block', mb: 0.5, fontWeight: 600, color: 'text.primary' }}
                >
                  Inactive Users ({mockInactiveUserList.length})
                </Typography>
                <List dense disablePadding>
                  {mockInactiveUserList.map((user) => (
                    <ListItem key={user.name} disableGutters sx={{ py: 0, minHeight: 24 }}>
                      <ListItemText
                        primary={user.name}
                        primaryTypographyProps={{ variant: 'caption', noWrap: true, color: 'text.primary' }}
                      />
                    </ListItem>
                  ))}
                  {mockInactiveUserList.length === 0 && (
                    <ListItem disableGutters>
                      <ListItemText
                        primary="No users in this list."
                        primaryTypographyProps={{ variant: 'caption', fontStyle: 'italic', color: 'text.secondary' }}
                      />
                    </ListItem>
                  )}
                </List>
              </Box>
            </CustomTabPanel>
          </Grid2>
        </Grid2>
      </Paper>
    </Box>
  );
};
