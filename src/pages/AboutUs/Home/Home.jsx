import React from 'react';
import { useNavigate } from 'react-router-dom';
import exampleImage from '/src/assets/Movie.jpg'; 
import './Home.css'; 

const Home = () => {
  const navigate = useNavigate(); 

  const handleGoToMovies = () => {
    navigate('/movies'); 
  };

  return (
    <div className="home-container">
      <img src={exampleImage} alt="Example" className="center-image" /> 
      <button className="go-to-movies-button" onClick={handleGoToMovies}>Go to Movies</button> 
    </div>
  );
}

export default Home;

