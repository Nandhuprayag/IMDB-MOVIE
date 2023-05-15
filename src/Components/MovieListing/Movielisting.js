import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../Features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';
import "./Movielisting.scss";

const Movielisting = () => 
{
    const movies=useSelector(getAllMovies);
    console.log(movies);
 let renderMovies="";
   
 renderMovies=movies.Response === 'True' ?(movies.Search.map((movie,index)=>
 (
    <MovieCard data={movie} key={index}/>
 ))):
 
 (<div className="movie-error"><h3>{movies.Error}</h3></div>);
     
 console.log(renderMovies)
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                    <div className='movie-container'>
                     {renderMovies}
              
                    </div>
            </div>
        </div>
    );
};

export default Movielisting;