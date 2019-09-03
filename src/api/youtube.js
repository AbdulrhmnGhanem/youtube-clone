import {credentials} from "./credentials";
import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: credentials,
    }
});