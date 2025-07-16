import { useEffect } from 'react';
import { socket } from '@prime-fresh/common_api';
import { authState, useActions, useAppSelector } from '@prime-fresh/modules';

const SocketInitializer = () => {
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

    // 3. Listen for incoming notifications
    const handleNewNotification = ({ message }: { message: string; userId: string }) => {
      console.log(`📩 Notification received: ${message}`);
      addNotification(message);
    };

    socket.on('connect', handleConnect);
    socket.on('newNotification', handleNewNotification);

    //temp
    socket.onAny((event, payload) => {
      console.log(`📡 Incoming event: ${event} ${payload}`);
    });

    // 4. Clean up on unmount
    return () => {
      socket.off('connect', handleConnect);
      socket.off('newNotification', handleNewNotification);
      socket.disconnect();
    };
  }, [loggedInUserInfo?.id, addNotification]);

  return null; // No visual UI needed
};

export default SocketInitializer;
