import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&apikey=trilogy";

export default {
  movieSearch: function(query) {
    console.log(query)
    return axios.get(BASEURL + query + APIKEY);
  }
};
