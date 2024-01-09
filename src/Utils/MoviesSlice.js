import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        urlVideo:null,
        videos:null,
        trailerVideo:null,
        topRatedMovies:null,
        upComingMovies:null,
        videoInfo:null,
        },
    reducers:{
        addurlVideo:(state,action)=>{
            state.urlVideo=action.payload
        },
        addVideo:(state,action)=>{
            state.videos=action.payload
        },
        addVideoInfo:(state,action)=>{
            state.videoInfo = action.payload;
        },
        
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
export const {addVideoInfo,addurlVideo,addVideo ,addNowPlayingMovies,addTrailerVideo,addpopularMovies,addTopRatedMovies,addUpcomingMovies}=moviesSlice.actions;