import React, { useEffect } from 'react';
import MovieApi from '../../Common/apis/MovieApi';
import { APIkey } from '../../Common/apis/MovieApiKey';
import Movielisting from '../MovieListing/Movielisting';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../Features/movies/movieSlice';

const Home = () => 
{
    const dispatch=useDispatch()
    useEffect(()=>
    {
     const commontext="harry"
      const fetchMovies=async ()=>
      {
            const response= await MovieApi.get(`?apikey=${APIkey}&s=${commontext}&type=movie`)
            .catch((err)=> {
                console.log("err: ", err)
            })
            dispatch(addMovies(response.data))
       } 
      fetchMovies()
    },[])
    return (
        <div className='Home'>
            <div className='banner-img'>
            <Movielisting/>
            </div>
            
        </div>
    );
};

export default Home;