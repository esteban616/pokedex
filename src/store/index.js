import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/TrainerName.slice"

export default configureStore({
    reducer:{
        trainerName
    }
})