import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:{}
}
const movieSlice=createSlice({
    name:'movies',
    initialState,
    reducers:{
        //write an action
        addMovies:(state,{payload})=>
        {
            state.movies=payload
        }
    }
}) 

export const {addMovies}=movieSlice.actions;
export const getAllMovies=(state)=> state.movies.movies
export default movieSlice.reducer;
