import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  Avatar,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import { AccountCircle, TrendingFlat as ArrowForward } from '@mui/icons-material';
// import { DoughnutChart } from '@prime-fresh/shared/components';
import { Doughnut, Pie } from 'react-chartjs-2';

// --- COLOR CONSTANTS (Extracted from the ERP Theme for context) ---
const PRIMARY_GREEN = '#4CAF50';
const SECONDARY_BLUE = '#2196F3';
const BACKGROUND_LIGHT_GRAY = '#F5F5F5';
const AMBER_INACTIVE = '#FF9800';

// A minimal theme is needed to apply the component styling correctly
const minimalTheme = createTheme({
  palette: {
    primary: { main: PRIMARY_GREEN },
    secondary: { main: SECONDARY_BLUE },
    success: { main: PRIMARY_GREEN },
    warning: { main: AMBER_INACTIVE },
  },
});

// --- MOCK DATA FOR APPLICATION USER CARD ---

const mockUserMetrics = {
  total: 550,
  active: 480,
  inactive: 70,
};

interface UserListItem {
  id: number;
  name: string;
}

const mockActiveUserList: UserListItem[] = [
  { id: 1, name: 'Alice Smith (Admin)' },
  { id: 2, name: 'Bob Johnson (Manager)' },
  { id: 3, name: 'Charlie Brown (Staff)' },
  { id: 4, name: 'Dana Scully (Auditor)' },
  { id: 5, name: 'Ethan Hunt (Agent)' },
  { id: 6, name: 'Fiona Glenanne (Support)' },
  { id: 7, name: 'Grace Hopper (Developer)' },
  { id: 8, name: 'Harry Potter (Trainee)' },
];

const mockInactiveUserList: UserListItem[] = [
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

// --- DETAIL METRIC CARD COMPONENT (WITH USER LIST LOGIC) ---

interface MetricDetail {
  label: string;
  count: number;
  color: string;
}

interface DetailMetricCardProps {
  title: string;
  total: number;
  detail1: MetricDetail;
  detail2?: MetricDetail;
  icon: React.ReactNode;
  iconColor: string;
  navLink: string;
  userLists?: { active: UserListItem[]; inactive: UserListItem[] };
}

const DetailMetricCard: React.FC<DetailMetricCardProps> = ({
  title,
  total,
  detail1,
  detail2,
  icon,
  iconColor,
  navLink,
  userLists,
}) => {
  // State to track which list (active/inactive) is currently selected for display
  const [selectedList, setSelectedList] = useState<'active' | 'inactive' | 'none'>(userLists ? 'active' : 'none');

  // Logic to determine what list to display
  const listToDisplay = userLists ? (selectedList === 'active' ? userLists.active : userLists.inactive) : [];
  const listTitle = selectedList === 'active' ? 'Active Users' : 'Inactive Users';

  // Helper function to render the clickable metric box
  const renderDetailMetric = (
    detail: MetricDetail | undefined,
    listType: 'active' | 'inactive' | 'none',
    isSelected: boolean
  ) => {
    if (!detail) return null;

    const isClickable = userLists && listType !== 'none';

    return (
      <Paper
        variant="outlined"
        sx={{
          p: 1.5,
          cursor: isClickable ? 'pointer' : 'default',
          borderColor: isSelected ? detail.color : '#E0E0E0',
          bgcolor: isSelected ? `${detail.color}20` : 'background.paper',
          transition: '0.2s',
          height: '100%',
          '&:hover': {
            bgcolor: isSelected ? `${detail.color}30` : isClickable ? BACKGROUND_LIGHT_GRAY : 'background.paper',
          },
        }}
        onClick={() => isClickable && setSelectedList(listType)}
      >
        <Typography variant="body1" color="#282b2f" sx={{ fontWeight: 700 }}>
          {detail.count.toLocaleString()}
        </Typography>
        <Typography variant="caption" color="#282b2f" sx={{ opacity: 0.8 }}>
          {detail.label}
        </Typography>
      </Paper>
    );
  };

  return (
    <Card
      sx={{
        borderTop: `4px solid #282b2f`,
        height: '100%',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <CardContent>
        {/* Top Header: Icon and Total */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box>
            <Typography color="#282b2f" variant="subtitle2" sx={{ mb: 0.5 }}>
              {title}
            </Typography>
            <Typography variant="h3" component="div" sx={{ fontWeight: 'bold', color: '#282b2f' }}>
              {total.toLocaleString()}
            </Typography>
            <Typography color="#282b2f" variant="caption">
              Total {title}
            </Typography>
          </Box>
          <Box sx={{ width: 150, height: 120 }}>
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
                    position: 'bottom' as const,
                    labels: {
                      boxWidth: 10,
                      padding: 10,
                    },
                  },
                  datalabels: {
                    display: false,
                  },
                },
              }}
            />
          </Box>
        </Box>

        <Divider sx={{ my: 1 }} />

        {/* Detail Metrics Section - Clickable */}
        <Grid container spacing={2} sx={{ mt: 1, mb: 1 }}>
          {/* Metric 1 (Active) */}
          <Grid item xs={12} sm={detail2 ? 6 : 12}>
            {renderDetailMetric(detail1, 'active', selectedList === 'active')}
          </Grid>
          {/* Metric 2 (Inactive) */}
          {detail2 && (
            <Grid item xs={12} sm={6}>
              {renderDetailMetric(detail2, userLists ? 'inactive' : 'none', selectedList === 'inactive')}
            </Grid>
          )}
        </Grid>

        {/* SCROLLABLE USER LIST */}
        {userLists && (
          <Box
            sx={{
              mt: 2,
              maxHeight: 230,
              overflowY: 'auto',
              border: '1px solid #E0E0E0',
              borderRadius: 1,
              p: 1,
              bgcolor: BACKGROUND_LIGHT_GRAY,
            }}
          >
            <Typography variant="caption" sx={{ display: 'block', mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
              {listTitle} ({listToDisplay.length})
            </Typography>
            <List dense disablePadding>
              {listToDisplay.map((user) => (
                <ListItem key={user.name} disableGutters sx={{ py: 0, minHeight: 24 }}>
                  <ListItemText
                    primary={user.name}
                    primaryTypographyProps={{ variant: 'caption', noWrap: true, color: 'text.primary' }}
                  />
                </ListItem>
              ))}
              {listToDisplay.length === 0 && (
                <ListItem disableGutters>
                  <ListItemText
                    primary="No users in this list."
                    primaryTypographyProps={{ variant: 'caption', fontStyle: 'italic', color: 'text.secondary' }}
                  />
                </ListItem>
              )}
            </List>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

// --- APPLICATION USER CARD INSTANCE ---

export const ApplicationUserCard: React.FC = () => (
  <ThemeProvider theme={minimalTheme}>
    <Box sx={{ maxWidth: 350, mx: 'auto' }}>
      <DetailMetricCard
        title="Application Users"
        total={mockUserMetrics.total}
        icon={<AccountCircle />}
        iconColor={SECONDARY_BLUE}
        detail1={{
          label: 'Active',
          count: mockUserMetrics.active,
          color: PRIMARY_GREEN,
        }}
        detail2={{
          label: 'Inactive',
          count: mockUserMetrics.inactive,
          color: AMBER_INACTIVE,
        }}
        navLink="#users"
        userLists={mockUserLists}
      />
    </Box>
  </ThemeProvider>
);
