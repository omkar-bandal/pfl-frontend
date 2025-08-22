import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

// Define the props for the Main component
interface MainProps {
  open?: boolean;
  drawerWidth: number; // The width of the drawer, passed as a prop
}

export const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open?: boolean }>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),

  // Desktop and up: shift by drawer width when closed/open
  [theme.breakpoints.up('sm')]: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? 0 : `-${250}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  },

  // Mobile (sm and down): always full width, no negative margin
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    width: '100%',
    transition: 'none',  // or keep whichever transition you prefer
  },
}));