import io from 'socket.io-client';

// URL to connect backend
const socket = io('http://localhost:6767');

export default socket;
