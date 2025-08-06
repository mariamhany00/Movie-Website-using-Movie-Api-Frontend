// MovieDetails.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import axiosInstace from '../../../axiosConfig/instace';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const apiKey = '93eef80a770c6ca7d6a6fb918f6195aa';
        axiosInstace.get(`/3/movie/${id}?api_key=${apiKey}`)
            .then((response) => {
                // Handle the response data here
                console.log(response.data); // Log the response data for debugging
                setMovieDetails(response.data); // Set the movieDetails state with the details of the movie
            })
            .catch((error) => {
                // Handle errors here
                console.error('Error fetching data:', error);
            });
    }, [id]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{movieDetails.title}</h2>
            <p>{movieDetails.overview}</p>
            <img
                src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                alt={movieDetails.title}
                style={{ width: '200px', height: '300px', margin: '10px' }}
            />
        </div>
    );
}

export default MovieDetails;
