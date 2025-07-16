// src/hooks/useSocket.ts

export function useSocket() {
  // const userId = localStorage.getItem('userId');
  // const [socketId, setSocketId] = useState<string | null>(null);
  // const [notifications, setNotifications] = useState<string[]>([]);
  // const [serverTestMsg, setServerTestMsg] = useState<string>('');

  // useEffect(() => {
    // 1️⃣ connect when userId becomes available
    // if (userId) {
    //   console.log("useSocket UserId Received.")
    //   socket.connect();
    //   // 2️⃣ tell server who we are
    //   socket.emit('registerUser', userId);
    // }

    // 3️⃣ receive your assigned socket ID
  // socket.on('socketId', ({ socketId }) => {
  //   setSocketId(socketId);
  //   console.log('My socket ID is', socketId);
  // });

  // // 4️⃣ when server sends you a notification
  // socket.on('newNotification', ({ message }) => {
  //   setNotifications((prev) => [...prev, message]);
  //   console.log('🔔 New notification:', message);
  // });

  // // 5️⃣ example test channel
  // socket.on('server:test', (data) => {
  //   setServerTestMsg(data.msg);
  // });

  // // cleanup on unmount or user logout
  // return () => {
  //   socket.off('socketId');
  //   socket.off('newNotification');
  //   socket.off('server:test');
  //   socket.disconnect();
  //   setSocketId(null);
  // };
  // }, [userId]);

  // 6️⃣ utility to ping the server
  // const sendTest = useCallback(() => {
  //   socket.emit('client:test', { msg: 'Hello from client!' });
  // }, []);

  // return { socketId, notifications, serverTestMsg };
}
