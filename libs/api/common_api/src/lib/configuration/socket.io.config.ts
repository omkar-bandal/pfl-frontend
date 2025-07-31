import { io, Socket } from 'socket.io-client';
import { BASE_URL } from './axios.config';

// export const socket: Socket = io(BASE_URL, {
//   transports: ['polling', 'websocket'],
//   extraHeaders: {
//     "ngrok-skip-browser-warning": "true",
//   },
//   autoConnect: true,
//   reconnection: true,
//   reconnectionDelay: 1000,
//   reconnectionAttempts: 3,
// });
// socket.js

export const socket: Socket = io(BASE_URL, {
  transports: ['websocket', 'polling'], // Try websocket first, fallback to polling
  extraHeaders: {
    "ngrok-skip-browser-warning": "true",
  },
  autoConnect: false, // Change to false for better control
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 5,
  timeout: 20000,
  upgrade: true, // Allow transport upgrades
  rememberUpgrade: true, // Remember the upgrade for future connections
  forceNew: false, // Don't force new connection unnecessarily
});
