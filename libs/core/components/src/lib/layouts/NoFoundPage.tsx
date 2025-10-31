/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Dashboard, ArrowBack, ErrorOutline } from '@mui/icons-material';
import { Box, Typography, Button, Container, Paper, Stack } from '@mui/material';

type NotFoundPageProps = {
  homeRoute?: string;
  showHomeButton?: boolean;
  title?: string;
  subtitle?: string;
};

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  homeRoute = '/',
  showHomeButton = true,
  title = 'Oops! Page Not Found',
  subtitle = "It looks like you've reached a page that doesn't exist.",
}) => {
  const navigate = useNavigate();

  const fallbackGoBack = () => {
    if (typeof window === 'undefined') return;
    // If browser history has entries, go back; otherwise navigate to home route (full reload)
    if (window.history.length > 1) window.history.back();
    else window.location.href = homeRoute;
  };

  const handleGoBack = () => {
    if (typeof navigate === 'function') {
      try {
        // navigate(-1) is the idiomatic router way to go back
        (navigate as any)(-1);
      } catch {
        // if anything goes wrong, fallback to history
        fallbackGoBack();
      }
    } else {
      fallbackGoBack();
    }
  };

  const handleGoHome = () => {
    if (typeof navigate === 'function') {
      (navigate as any)(homeRoute);
    } else if (typeof window !== 'undefined') {
      window.location.href = homeRoute;
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper
        elevation={6}
        sx={{
          p: 6,
          borderRadius: 3,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #fffaf0 0%, #BDC3C7 100%)',
          color: '#222',
        }}
        role="region"
        aria-label="Page not found"
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <ErrorOutline sx={{ fontSize: 84 }} color="error" />
        </Box>

        <Typography variant="h4" gutterBottom fontWeight={700}>
          {title}
        </Typography>

        <Typography variant="body1" gutterBottom>
          {subtitle}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          You can go back to the previous page or return to the dashboard.
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            color='secondary'
            startIcon={<ArrowBack />}
            onClick={handleGoBack}
            sx={{ minWidth: 140, borderRadius: 3, textTransform: 'none' }}
          >
            Go Back
          </Button>

          {showHomeButton && (
            <Button
              variant="contained"
              color='info'
              startIcon={<Dashboard />}
              onClick={handleGoHome}
              sx={{ minWidth: 180, borderRadius: 3, textTransform: 'none' }}
            >
              Go to Dashboard
            </Button>
          )}
        </Stack>

        <Box sx={{ mt: 3 }}>
          <Typography variant="caption" display="block" color="text.secondary">
            If you think this is an error, please contact support or try refreshing the page.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

