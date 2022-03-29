export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ITv {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
type language = "en" | "kr";
type Types =
  | "movie/now_playing"
  | "movie/top_rated"
  | "movie/upcoming"
  | "tv/popular"
  | "tv/airing_today"
  | "tv/top_rated";

export interface IApiGet {
  get: (
    type: Types,
    lang?: language,
    page?: number
  ) => Promise<IMovie[] | ITv[]>;
}

export interface IMovieResponse<T> {
  dates: {
    maximum?: string;
    minimum?: string;
  };
  page: number;
  results: T;
  total_pages: number;
  total_results: number;
}

export interface IMovieState {
  nowPlayingMovie: IMovie[];
  topRatedMovie: IMovie[];
  upcomingMovie: IMovie[];
  isLoading?: boolean;
}
export interface ITvState {
  popularTv: ITv[];
  airingTodayTv: ITv[];
  topRatedTv: ITv[];
  isLoading?: boolean;
}
