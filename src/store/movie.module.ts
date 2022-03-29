import { IMovie, IMovieState } from "./../utils/store.type";
import { FETCH_END } from "./mutations.type";
import {
  FETCH_MOVIE_NOWPLAYING,
  FETCH_MOVIE_TOPRATED,
  FETCH_MOVIE_UPCOMING,
} from "./actions.type";
import ApiService from "@/common/api.service";
import { splitActionType } from "@/utils/utils";

const state: IMovieState = {
  nowPlayingMovie: [],
  topRatedMovie: [],
  upcomingMovie: [],
};

const getters = {
  nowPlayingMovie(state: IMovieState) {
    return state.nowPlayingMovie;
  },
  topRatedMovie(state: IMovieState) {
    return state.topRatedMovie;
  },
  upcomingMovie(state: IMovieState) {
    return state.upcomingMovie;
  },
};

const actions = {
  async [FETCH_MOVIE_NOWPLAYING]({ commit }) {
    // commit(FETCH_START);
    try {
      const type = splitActionType(FETCH_MOVIE_NOWPLAYING, "Movie");
      const movies = await ApiService.get(FETCH_MOVIE_NOWPLAYING);
      commit(FETCH_END, { movies, type });
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
  async [FETCH_MOVIE_TOPRATED]({ commit }) {
    // commit(FETCH_START);
    try {
      const type = splitActionType(FETCH_MOVIE_TOPRATED, "Movie");
      const movies = await ApiService.get(FETCH_MOVIE_TOPRATED);
      commit(FETCH_END, { movies, type });
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
  async [FETCH_MOVIE_UPCOMING]({ commit }) {
    // commit(FETCH_START);
    try {
      const type = splitActionType(FETCH_MOVIE_UPCOMING, "Movie");
      const movies = await ApiService.get(FETCH_MOVIE_UPCOMING);
      commit(FETCH_END, { movies, type });
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
};

const mutations = {
  // [FETCH_START](state: IMovieState) {
  //   state.isLoading = true;
  // },
  [FETCH_END](
    state: IMovieState,
    { movies, type }: { movies: IMovie[]; type: string }
  ) {
    state.isLoading = false;
    state[type] = movies;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
