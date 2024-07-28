import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3/";
const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzgzZDE4MTY5ZTNhZGMyMDE5NmM5MTE4N2RkNWUxMiIsIm5iZiI6MTcyMTQ2MzgzMS41OTgwNDQsInN1YiI6IjY2OWE5MTE5OTRhMjI3MDMxMmY4MThiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TBfbNvhql-o8B8EKaNGtoJ-B71vTzPq8hc7JAv7UyXw",
};


const instance=axios.create({
    baseURL:baseUrl,
    headers:headers
});

export default instance;