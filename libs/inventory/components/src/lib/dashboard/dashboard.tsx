import { Button } from '@mui/material';
import { socket } from '@prime-fresh/common_api';
import React from 'react';

export const DashboardInventory = () => {
  const userId = localStorage.getItem('userId');
  React.useEffect(() => {
    socket.on('connect', () => {
      console.log('connected to server: ', socket.id);
      socket.emit('registerUser', userId);
      console.log('Registered as user:', userId);
    });
    // handle test echo
    socket.on('server:test', (data) =>
      console.log('🔄 Test event from server:', data)
    );

    // cleanup on unmount
    return () => {
      socket.off('connect');
      socket.off('server:test');
      socket.off('notification:newOrder');
    };
  }, [userId]);
  const sendTest = () => {
    socket.emit('client:test', { msg: 'Hello from client!' });
  };
  return (
    <div>
      <span>Inventory Dashboard</span>
      <span>{socket.id}</span>
      {/* <Button size="small" variant="contained" onClick={sendTest}>
        Connect to server
      </Button> */}
    </div>
  );
};
