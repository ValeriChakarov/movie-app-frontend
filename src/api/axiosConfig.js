import axios from 'axios';

export default axios.create({
    baseURL:' https://7398-93-186-150-147.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});