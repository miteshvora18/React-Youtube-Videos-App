import axios from 'axios';

const KEY = 'AIzaSyAlwtPqA2N9ht0w3Ni6oauN8FjBriUpGsQ';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        type: 'video',
        key:KEY
    }
});