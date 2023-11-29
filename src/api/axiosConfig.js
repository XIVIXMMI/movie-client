import axios from 'axios';

export default axios.create({
    baseURL:'https://2654-2402-800-63ba-8032-a1f0-7cb9-d115-9ee2.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});