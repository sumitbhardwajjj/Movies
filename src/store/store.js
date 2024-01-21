import {configureStore} from '@reduxjs/toolkit'
import Dashboard from "../components/Slice"

const store = configureStore({
    reducer:{
        dash:Dashboard
    }
})

export default store