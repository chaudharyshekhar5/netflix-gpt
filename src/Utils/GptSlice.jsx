import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptToggleButton:false,
        gptInputData:"",
        gptResult:null,
    },
    reducers:{
        addToggle:(state)=>{
            state.gptToggleButton=!state.gptToggleButton
        },
        addGptInputData:(state,action)=>{
            state.gptInputData=action.payload
        },
        addGptResult:(state,action)=>{
            state.gptResult=action.payload
        },
    }
})
export default gptSlice.reducer;
export const {addToggle,addGptResult,addGptInputData}=gptSlice.actions;