import { createSlice } from "@reduxjs/toolkit";


export const cardSlice=createSlice({
    name:'Card',
    initialState:{
      value:0
    },

    reducers:{
      savealldata:(state,action)=>{
        return action.payload
      },
      
      increment: (state,action) => {
       let {id}=action.payload
      
        state.value+=1
       
        
      },
      decrement: (state) => {
        if(state.value<=0){
          state.value=0
        }else{
          state.value-=1
        }
      },
    }
       
})

export const {savealldata,increment,decrement}=cardSlice.actions;
export default cardSlice.reducer