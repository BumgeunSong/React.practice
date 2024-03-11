import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const params = useParams()
    console.log(params.id)

    async function getMovie(id) {
        let response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        let json = await response.json()
        setMovie(json.data.movie)
        setLoading(false)
        console.log(json.data.movie)
    }

    useEffect(() => {
        getMovie(params.id);
    }, [])

    return (
        <div>
            <h1>
               {movie.title_long}
            </h1>
            <img src={movie.medium_cover_image} alt={movie.title}></img>
            <h2>
                rating: {movie.rating}
            </h2>
            <p>{movie.description_intro}</p>
        </div>
    )
}

export default MovieDetail;