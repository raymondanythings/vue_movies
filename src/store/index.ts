import { createStore } from "vuex";
import movie from "./movie.module";
import tv from "./tv.module";

export default createStore({
  modules: {
    movie,
    tv,
  },
});
