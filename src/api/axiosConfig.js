import axios from 'axios';

export default axios.create({
    baseURL:'https://4e4a-113-161-43-93.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});