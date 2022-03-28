import { IMovie } from "./../utils/store.type";
import { FETCH_START, FETCH_END } from "./mutations.type";
import {
  FETCH_MOVIE_NOWPLAYING,
  FETCH_MOVIE_TOPRATED,
  FETCH_MOVIE_UPCOMING,
} from "./actions.type";
import ApiService from "@/common/api.service";

interface IStateProps {
  nowPlaying: IMovie[];
  topRated: IMovie[];
  upcoming: IMovie[];
  isLoading: boolean;
}

const state: IStateProps = {
  nowPlaying: [],
  topRated: [],
  upcoming: [],
  isLoading: true,
};

const getters = {
  nowPlaying(state: IStateProps) {
    return state.nowPlaying;
  },
  topRated(state: IStateProps) {
    return state.topRated;
  },
  upcoming(state: IStateProps) {
    return state.upcoming;
  },
  isLoading(state: IStateProps) {
    return state.isLoading;
  },
};

const actions = {
  async [FETCH_MOVIE_NOWPLAYING]({ commit }) {
    commit(FETCH_START);
    try {
      const type = "nowPlaying";
      const movies = await ApiService.get("movie", "now_playing");
      commit(FETCH_END, { movies, type });
    } catch (error: any) {
      throw new Error(error);
    }
  },
  async [FETCH_MOVIE_TOPRATED]({ commit }) {
    commit(FETCH_START);
    try {
      const type = "topRated";
      const movies = await ApiService.get("movie", "top_rated");
      commit(FETCH_END, { movies, type });
    } catch (error: any) {
      throw new Error(error);
    }
  },
  async [FETCH_MOVIE_UPCOMING]({ commit }) {
    commit(FETCH_START);
    try {
      const type = "upcoming";
      const movies = await ApiService.get("movie", "upcoming");
      commit(FETCH_END, { movies, type });
    } catch (error: any) {
      throw new Error(error);
    }
  },
};

const mutations = {
  [FETCH_START](state: IStateProps) {
    state.isLoading = true;
  },
  [FETCH_END](
    state: IStateProps,
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
