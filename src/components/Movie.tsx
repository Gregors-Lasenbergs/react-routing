import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";
import { MovieProps } from "./Movies";

export const Movie = (props: MovieProps) => {

    return (
        <div className={`movie`}>
            <Link to={`/movies/${props.id}`}>
                <img src={props.posterUrl} alt={props.title} />
                <h2>{props.title}</h2>
                <p>{props.plot}</p>
            </Link>
        </div>
    );
};