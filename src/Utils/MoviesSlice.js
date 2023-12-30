import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
        topRatedMovies:null,
        upComingMovies:null,

    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload

        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload

        },
        addpopularMovies:(state,action)=>{
            state.popularMovies=action.payload

        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies=action.payload
        }
    }
})
export default moviesSlice.reducer;
export const {addNowPlayingMovies,addTrailerVideo,addpopularMovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions;