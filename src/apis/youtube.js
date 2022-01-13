import axios from 'axios'; 

const KEY = 'AIzaSyDXTl5rG-eQ8B-sLNPY21kzVUrP7bcjuxE'; 


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        maxResults: 5,
        type: 'video',  
        key: KEY
    }
})
