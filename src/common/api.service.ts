import { IMovieResponse, IMovie, ITv, IApiGet } from "./../utils/store.type";
import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "",
});

const ApiService: IApiGet = {
  async get(type, lang = "en", page = 1) {
    try {
      const { data } = await axiosClient.get<IMovieResponse<IMovie[] | ITv[]>>(
        `${type}?api_key=${process.env.VUE_APP_API_KEY}&language=${lang}&page=${page}`
      );
      return data.results;
    } catch (error) {
      throw new Error(`[IMDB] ApiService ${error}`);
    }
  },
  // async getTv(type, lang = "en", page = 1) {
  //   try {
  //     const { data } = await axiosClient.get<IMovieResponse<ITv[]>>(
  //       `tv/${type}?api_key=${process.env.VUE_APP_API_KEY}&language=${lang}&page=${page}`
  //     );
  //     return data.results;
  //   } catch (error) {
  //     throw new Error(`[IMDB] ApiService ${error}`);
  //   }
  // },
};

export default ApiService;
