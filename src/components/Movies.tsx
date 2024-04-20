import './Movies.css'
import NavBar from "./NavBar.tsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Movie} from "./Movie.tsx";

export type MovieProps = {
    title: string
    plot: string
    id: number
    posterUrl: string
}

function Movies() {
    const [movies, setMovies] = useState<MovieProps[]>([]);
    
    const getAllMovies = async () => {
        const movieUrl = 'http://localhost:3004/movies';

        try {
            const response = await axios.get(movieUrl);
            console.log('Tasks received successfully', response.data);
            return response.data;
        } catch (error) {
            console.error('Failed to get tasks', error);
            return [];
        }
    };
    const loadAllCardsFromDb = async () => {
        const moviesFromDb = await getAllMovies();
        const movies2010AndAbove = moviesFromDb.filter(movie => movie.year >= '2013');
        console.log("Tasks from DB", moviesFromDb);
        movies2010AndAbove.forEach((movie: MovieProps) => {
            handleMovieCreated(movie);
        });
    };

    const handleMovieCreated = async (props: MovieProps) => {
        try {
            setMovies(prevMovies => [...prevMovies, props]);
            console.log("Task added successfully");
        } catch (error) {
            console.error("Failed to add task", error);
        }
    };

    useEffect(() => {
        loadAllCardsFromDb();
    }, []);
    
    return (
        <div className="movies">
            <NavBar/>
            <h1>Movies</h1>
            <p>Check out our latest movies and reviews.</p>
            <div className='movie-container'>
                {movies.map((movie) => (
                    <Movie
                        key={movie.id}
                        title={movie.title}
                        plot={movie.plot}
                        id={movie.id}
                        posterUrl={movie.posterUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Movies