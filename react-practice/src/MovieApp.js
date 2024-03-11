import { useState, useEffect } from "react";

function MovieApp() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState({})

    async function getMovies() {
        let response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
        let json = await response.json()
        setMovies(json.data.movies)
        setLoading(false)
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
                movies.map((movie) => <MovieView key={movie.id} movie={movie} />)
            )}
        </div>
    );
}

function MovieView({ movie }) {
    return (
        <div>
            <h2>
                {movie.title} ({movie.year}) rating: {movie.rating}
            </h2>
            <p>{movie.summary}</p>
            <ul>
                {movie.genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
            <img src={movie.medium_cover_image}></img>
        </div>
    )
}
export default MovieApp;