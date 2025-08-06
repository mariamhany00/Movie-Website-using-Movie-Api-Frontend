import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/AboutUs/Home/Home';
import NotFound from './pages/AboutUs/NotFound/NotFound';
import Movies from './pages/AboutUs/Movies/Movies';
import MoviesDetails from './pages/AboutUs/MoviesDetails/MoviesDetails';

const App = () => {
  return (
    <div className='container my-5'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
     
        <Route path='/movies' element={<Movies />} />
        <Route path='/moviesdet/:id' element={<MoviesDetails />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
