import { configureStore } from "@reduxjs/toolkit";
import moviereducers from './movies/movieSlice';
export const store=configureStore({
    reducer:{movies:moviereducers}
})