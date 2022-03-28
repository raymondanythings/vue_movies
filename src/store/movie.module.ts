import { IMovie } from "./../utils/store.type";
import { FETCH_START, FETCH_END } from "./mutations.type";
import { IMovieStateProps } from "./../utils/store.type";
import { FETCH_MOVIE_NOWPLAYING } from "./actions.type";
import ApiService from "@/common/api.service";
const state: IMovieStateProps = {
  dates: {},
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  isLoading: true,
};

const getters = {
  movies(state: IMovieStateProps) {
    return state.results;
  },
  isLoading(state: IMovieStateProps) {
    return state.isLoading;
  },
};

const actions = {
  async [FETCH_MOVIE_NOWPLAYING]({ commit }) {
    commit(FETCH_START);
    try {
      const movies = await ApiService.get("movie", "now_playing");
      commit(FETCH_END, movies);
    } catch (error: any) {
      throw new Error(error);
    }
  },
};

const mutations = {
  [FETCH_START](state: IMovieStateProps) {
    state.isLoading = true;
  },
  [FETCH_END](state: IMovieStateProps, movies: IMovie[]) {
    state.isLoading = false;
    console.log(movies);
    state.results = movies;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
