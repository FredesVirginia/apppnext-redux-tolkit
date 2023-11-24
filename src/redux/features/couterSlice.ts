//Esta es una funcionalidad de tantas funcionalidades
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    couter :70
}

export const couterSlice = createSlice({
    name: "counter" ,
    initialState ,
    reducers :{
        //estas seria las actions que modifican el estado global, en tes caso el estado couter
        increment : (state) =>{
            state.couter = state.couter + 1 

        } , 

        decrement : (state) =>{
            state.couter = state.couter - 1 

        }
    }
})

//aqui estamos exportando las actions

 export const {increment , decrement} = couterSlice.actions;
 // esto en principio es el valor iniciail de  tods la aplicacion

 export default couterSlice.reducer