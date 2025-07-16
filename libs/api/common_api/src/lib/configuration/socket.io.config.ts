import { io, Socket } from 'socket.io-client';
import { BASE_URL } from './axios.config';

export const socket: Socket = io(BASE_URL, {
  transports: ['polling', 'websocket'],
  extraHeaders: {
    "ngrok-skip-browser-warning": "true",
  },
  autoConnect: true,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 3,
});
