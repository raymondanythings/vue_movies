import { IMovieStateProps } from "./../utils/store.type";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "",
});

const ApiService = {
  async get(resource: "movie" | "tv", type: string, lang = "en", page = "1") {
    try {
      const { data } = await axiosClient.get<IMovieStateProps>(
        `${resource}/${type}?api_key=${process.env.VUE_APP_API_KEY}&language=${lang}&page=${page}`
      );
      return data.results;
    } catch (error) {
      throw new Error(`[IMDB] ApiService ${error}`);
    }
  },
};

export default ApiService;

// & language=en - US & page=1
// Now Playing Movie
// https://api.themoviedb.org/3/movie/now_playing?api_key=8ebfd1b48062a2857432fcc8f95c3ce9

// Popular Movie
// https://api.themoviedb.org/3/movie/popular?api_key=8ebfd1b48062a2857432fcc8f95c3ce9
