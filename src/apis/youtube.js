import axios from "axios"

const KEY = "AIzaSyBYFfQqNfs-NC6N96iFMVLlvPeKsLoHtQU"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        part: "snippet",
        type: 'video',
        maxResults: 5,
        key: KEY
    }

})