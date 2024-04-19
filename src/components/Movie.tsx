import './Movie.css'
import { MovieProps } from "./Movies";
import {useState} from "react";

export const Movie = (props: MovieProps) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const handleCardClick = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <div className={`movie ${isExpanded ? "is-expanded" : ""}`} onClick={handleCardClick}>
            <img src={props.posterUrl} alt={props.title} />
            <h2> {props.title} </h2>
            <p> {props.plot} </p>
        </div>
    );
};