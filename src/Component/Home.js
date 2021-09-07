import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from '../Thunk';
import { Link } from "react-router-dom";

const Home = () => {

    const [movie, setMovie] = useState({search: '', type: ''})
    const dispatch = useDispatch()
    const result = useSelector(state => state.movie.fetchData)
    console.log(result)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setMovie({...movie, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchData(movie))
    }

    let recordFields = result[0] ? Object.keys(result[0]) : [];
    recordFields = result.map((fields) => {
    return (
        <div>
        <Link to={`/details/${fields.imdbID}`}>
        < div >
        <img src={fields.Poster} alt={fields.Poster} width="400" height="550" />
        </div >
        </Link>
        <div><h4>{fields.Title}</h4>
        <br /></div>
        </div>
    )
        
    })

    return (
        <div>
        <h1>Hello Home</h1>
        <form onSubmit={handleSubmit} >
        <label> Movie You Want: 
        <br />
        <input type='text' name='search' placeholder='Enter Movie Name' onChange={handleChange} /> &nbsp;&nbsp;&nbsp;&nbsp;
        </label>

        <select name='type'  onChange={handleChange}>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        </select>&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="submit">Search</button>
        </form>
        <div>
        <h4>Here Your Movie</h4>
        <div>{recordFields}</div>
        </div>
        </div>
    )
}

export default Home
