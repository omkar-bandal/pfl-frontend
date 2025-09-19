import { useMediaQuery, useTheme } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastProvider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ToastContainer
      position={isMobile ? 'top-center' : 'top-right'} // This is correct
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={false}
      theme="light"
      // Mobile specific props
      limit={isMobile ? 2 : 5}
      style={{
        width: isMobile ? '90%' : 'auto',
        fontSize: isMobile ? '14px' : '16px',
        // Add these styles to fix positioning
        ...(isMobile && {
          bottom: '20px', // Add some bottom spacing
          left: '50%', // Center horizontally
          transform: 'translateX(-50%)', // Ensure perfect centering
          margin: '0', // Reset any margins
        }),
      }}
      toastStyle={{
        maxWidth: isMobile ? '100%' : '350px',
        minHeight: isMobile ? '50px' : '60px',
        padding: isMobile ? '8px 12px' : '12px 16px',
        // Ensure toast is centered on mobile
        ...(isMobile && {
          margin: 'auto',
          textAlign: 'center',
        }),
      }}
    />
  );
};

export { toast };
