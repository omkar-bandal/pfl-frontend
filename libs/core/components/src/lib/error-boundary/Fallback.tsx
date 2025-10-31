import React from 'react';
import { ErrorOutline, SentimentVeryDissatisfied } from '@mui/icons-material';
import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface FallbackProps {
  resetErrorBoundary: () => void;
}

export const ErrorFallback: React.FC<FallbackProps> = ({ resetErrorBoundary }) => {
  // <Box sx={{ height: '100vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
  //     <Box>
  //         <SentimentVeryDissatisfied sx={{ fontSize: 50 }} />
  //     </Box>
  //     <Typography variant="h6" component="div">Something went wrong</Typography>
  //     <Typography variant="body2" component="div">Try refreshing the page or clicking the retry button.</Typography>
  //     <Button variant="text" color="info" size="medium" onClick={resetErrorBoundary}>Retry</Button>
  // </Box>
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); 
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f5f5f5',
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          p: 4,
          maxWidth: 500,
          textAlign: 'center',
          bgcolor: 'white',
          borderRadius: 3,
        }}
      >
        <ErrorOutline color="error" sx={{ fontSize: 60, mb: 2 }} />
        <Typography variant="h5" gutterBottom color="error">
          Oops! Something went wrong.
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          An unexpected error occurred. Don’t worry — our system is safe. You can try reloading the page or returning
          home.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" color="primary" onClick={resetErrorBoundary}>
            Reload Page
          </Button>
          <Button variant="outlined" color="primary" onClick={handleGoBack}>
            Go Back
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
