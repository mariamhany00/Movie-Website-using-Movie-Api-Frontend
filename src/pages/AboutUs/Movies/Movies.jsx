import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';
import axiosInstace from '../../../axiosConfig/instace';
import './Movies.css'; // Import your custom CSS file

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1); 
  
    useEffect(() => {
        const apiKey = '93eef80a770c6ca7d6a6fb918f6195aa';
        axiosInstace.get(`/3/movie/popular?api_key=${apiKey}&page=${page}`)
            .then((response) => {
                setMovies(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [page]); 

    const handlePrevious = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNext = () => {
        setPage(page + 1);
    };

    return (
        <div>
            <Row>
                {movies.map((movie) => (
                    <Col key={movie.id} md={4} style={{ paddingTop: '20px' }}> {/* Add inline styling here */}
                        <Card className="card-black-bg card-smaller">
                            <Link to={`/moviesdet/${movie.id}`}>
                                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            </Link>
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Link to={`/moviesdet/${movie.id}`}>
                                    <Button variant="danger">View Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <div className="d-flex justify-content-between mb-3">
                <Button variant="danger" onClick={handlePrevious} disabled={page === 1}>Previous</Button>
                <Button variant="success" onClick={handleNext}>Next</Button>
            </div>
        </div>
    );
}

export default Movies;









