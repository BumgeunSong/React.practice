import { useState, useEffect } from "react";

function MovieApp() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState({})

    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.data.movies)
                setLoading(false)
                console.log(json.data.movies)
            })
    }, [])

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
            <h3>
                {movie.title} ({movie.year}) rating: {movie.rating}
            </h3>
            <img src={movie.medium_cover_image}></img>
        </div>
    )
}
export default MovieApp;