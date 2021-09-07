import { MOVIE_DETAILS, SHOW_MOVIE, } from "./action"

const intialState = {
    fetchData: [],

};

export const movie = (state = intialState, action) => {
    switch (action.type) {

        case SHOW_MOVIE:
            return {
                ...state,
                fetchData: action.payload
            };

        default:
            return state;
    }
};

export const selectMovie = (state = {},action) => {
  switch (action.type) {
    case MOVIE_DETAILS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};



