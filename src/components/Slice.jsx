import {createSlice} from "@reduxjs/toolkit"

const INITIAL_STATE = {
    darkMode:true
}

const Dashboard = createSlice({
    name:"Dash",
    initialState:INITIAL_STATE,
    reducers:{
        toogledarkMode:(state)=>{
            state.darkMode = !state.darkMode
        }
    }
})

export const {toogledarkMode} = Dashboard.actions

export default Dashboard.reducer