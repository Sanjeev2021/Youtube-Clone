import axios from 'axios';

//const axios = require("axios");

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {part: 'snippet', videoId: 'M7FIvfx5J10', maxResults: '50'},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

//'e9baac910amshfddc2b61fb2ec86p190565jsnada7db0599fe',




export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, 
    options);

    return data;
}