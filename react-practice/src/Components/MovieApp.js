import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function MovieApp() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState({})

    async function getMovies() {
        let response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        let json = await response.json()
        setMovies(json.data.movies)
        setLoading(false)
        console.log(json.data.movies)
    }

    useEffect(() => {
        getMovies()
    }, []);

    return (
        <div className="App">
            <h1>Movie App</h1>
            {loading ? (
                <p>loading...</p>
            ) : (
                movies.map((movie) => <Movie key={movie.id} movie={movie} />)
            )}
        </div>
    );
}

function Movie({ movie }) {
    return (
        <div>
            <h1>
               <Link to={`/movies/detail/${movie.id}`}>{movie.title}</Link>
            </h1>
            <img src={movie.medium_cover_image} alt={movie.title}></img>
            <h2>
                rating: {movie.rating}
            </h2>
            <p>{movie.summary}</p>
            <ul>
                {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
            
        </div>
    )
}
export default MovieApp;