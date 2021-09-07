import axios from "axios";
import { movieDetail, showMovie } from "./Redux/action";

const request = axios.create({
    baseURL: 'http://www.omdbapi.com/',
});

export const fetchData = (state) => async (dispatch) => {
    try {
        const {search, type} = state
        const response = await request.get(`/?apikey=2e66f3ec&s=${search}&type=${type}`)
        dispatch(showMovie(response.data.Search));
    }
    catch (err) {
        console.log(err);
    }

}

export const fetchDetails = (id) => async (dispatch) => {
    console.log(id)
    try {
        const response = await request.get(`/?apikey=2e66f3ec&i=${id}`)
        dispatch(movieDetail(response.data))
    } 
    catch (err) {
        console.log(err);
    }
}
