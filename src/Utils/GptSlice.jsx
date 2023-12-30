import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptToggleButton:false
    },
    reducers:{
        addToggle:(state)=>{
            state.gptToggleButton=!state.gptToggleButton
        },
    }
})
export default gptSlice.reducer;
export const {addToggle}=gptSlice.actions;