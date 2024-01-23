import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE = {
    darkMode:false,
    isOpen:false

}

const Dashboard = createSlice({
    name:"Dash",
    initialState:INITIAL_STATE,
    reducers:{
        toogledarkMode:(state)=>{
            state.darkMode = !state.darkMode
        },
        toogleSLider:(state)=>{
            state.isOpen = !state.isOpen
        }
    }
})

export const {toogledarkMode,toogleSLider} = Dashboard.actions

export default Dashboard.reducer