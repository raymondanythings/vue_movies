import { createStore } from "vuex";
import movie from "./movie.module";

export default createStore({
  modules: {
    movie,
  },
});
