import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetails } from '../Thunk';

const MovieDetails = () => {
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const result = useSelector(state => state.selectMovie)
    console.log(result)

    const {Poster, Title, BoxOffice, Production, Released, Actors, Genre} = result

    useEffect(() => {
    dispatch(fetchDetails(id))
}, [dispatch]);

    return (
        <div>
        <h1>Movie Details</h1>
        <center>
        <div><img src={Poster} alt={Poster}width="300" height="450" /></div>
        <div >
        <h2>{Title}</h2>
        <h3>{Released}</h3>
        <h3>{Actors}</h3>
        <h3>{BoxOffice}</h3>
        <h3>{Production}</h3>
        <h3>{Genre}</h3>
        </div>  
        </center>
        </div>
    )
}

export default MovieDetails
