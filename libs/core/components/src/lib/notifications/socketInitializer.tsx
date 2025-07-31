/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { socket } from '@prime-fresh/common_api';
import { authState, INotification, useActions, useAppSelector } from '@prime-fresh/modules';

export const SocketInitializer = () => {
  const { loggedInUserInfo } = useAppSelector(authState);
  const { addNotification } = useActions();

  useEffect(() => {
    if (!loggedInUserInfo?.id) return;

    // 1. Connect to socket server
    socket.connect();

    // 2. On socket connect, register the user
    const handleConnect = () => {
      console.log(`✅ Socket connected: ${socket.id}`);
      socket.emit('registerUser', loggedInUserInfo.id.toString());
    };

    const handleNewNotification = (data: INotification) => {
      console.log(`📩 Notification received:`, data);
      addNotification(data);
    };

    socket.on('connect', handleConnect);
    socket.on('user-registered', (data) => { console.log(data) });
    socket.on('newNotification', handleNewNotification);

    // 4. Clean up on unmount
    return () => {
      socket.off('connect', handleConnect);
      socket.off('newNotification', handleNewNotification);
      socket.disconnect();
    };
  }, [loggedInUserInfo?.id, addNotification]);

  return null;
};

export default SocketInitializer;