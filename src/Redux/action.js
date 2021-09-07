export const SHOW_MOVIE = "SHOW_MOVIE"
export const MOVIE_DETAILS = "MOVIE_DTAILS"

export const showMovie = (payload) => ({
    type: SHOW_MOVIE,
    payload
})

export const movieDetail = (payload) => ({
    type: MOVIE_DETAILS,
    payload
})