import { ITv, ITvState } from "./../utils/store.type";
import { FETCH_END } from "./mutations.type";
import {
  FETCH_TV_TOPRATED,
  FETCH_TV_AIRING,
  FETCH_TV_POPULAR,
} from "./actions.type";
import ApiService from "@/common/api.service";
import { splitActionType } from "@/utils/utils";

const state: ITvState = {
  popularTv: [],
  topRatedTv: [],
  airingTodayTv: [],
};

const getters = {
  popularTv(state: ITvState) {
    return state.popularTv;
  },
  topRatedTv(state: ITvState) {
    return state.topRatedTv;
  },
  airingTodayTv(state: ITvState) {
    return state.airingTodayTv;
  },
};

const actions = {
  async [FETCH_TV_POPULAR]({ commit }) {
    // commit(FETCH_START);
    try {
      const type = splitActionType(FETCH_TV_POPULAR, "Tv");
      const tvShow = await ApiService.get(FETCH_TV_POPULAR);
      commit(FETCH_END, { tvShow, type });
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
  async [FETCH_TV_AIRING]({ commit }) {
    // commit(FETCH_START);
    try {
      const type = splitActionType(FETCH_TV_AIRING, "Tv");
      const tvShow = await ApiService.get(FETCH_TV_AIRING);
      commit(FETCH_END, { tvShow, type });
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
  async [FETCH_TV_TOPRATED]({ commit }) {
    // commit(FETCH_START);
    try {
      const type = splitActionType(FETCH_TV_TOPRATED, "Tv");
      const tvShow = await ApiService.get(FETCH_TV_TOPRATED);
      commit(FETCH_END, { tvShow, type });
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
};

const mutations = {
  // [FETCH_START](state: ITvState) {
  //   // state.isLoading = true;
  // },
  [FETCH_END](
    state: ITvState,
    { tvShow, type }: { tvShow: ITv[]; type: string }
  ) {
    state.isLoading = false;
    state[type] = tvShow;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
