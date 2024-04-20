import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import NavBar from "./NavBar.tsx";

function FullScreenMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Fetch movie data by ID from your database using Axios
        axios.get(`http://localhost:3004/movies/${id}`)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.error('Error fetching movie:', error);
            });
    }, [id]);

    if (!movie) {
        return <></>
    }

    return (
        <div>
            <NavBar/>
            <Link to={`/movies`} className={'back-btn'}>
                <button>Back to Movies</button>
            </Link>
                <div className={'movieFull'}>
                    <img src={movie.posterUrl} alt={movie.title} />
                    <h1>{movie.title}</h1>
                    <p>{movie.plot}</p>
                </div>
        </div>
    );
}

export default FullScreenMovie;