import { styled } from "@mui/material";

export const StyledGridOverlay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  '& .no-content-primary': {
    fill: theme.palette.mode === 'light' ? '#AEB8C2' : '#3D4751',
  },
  '& .no-content-secondary': {
    fill: theme.palette.mode === 'light' ? '#E8EAED' : '#1D2126',
  },
}));