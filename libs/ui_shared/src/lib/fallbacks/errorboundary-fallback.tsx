
import React from 'react';
import { SentimentVeryDissatisfied } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

interface FallbackProps {
    resetErrorBoundary: () => void;
}

export const ErrorFallback: React.FC<FallbackProps> = ({ resetErrorBoundary }) => (
    <Box sx={{ height: '100vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Box>
            <SentimentVeryDissatisfied sx={{ fontSize: 50 }} />
        </Box>
        <Typography variant="h6" component="div">Something went wrong</Typography>
        <Typography variant="body2" component="div">Try refreshing the page or clicking the retry button.</Typography>
        <Button variant="text" color="info" size="medium" onClick={resetErrorBoundary}>Retry</Button>
    </Box>
);

