import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"


//workout view component

export const WorkoutDetail = () => {

    const history = useHistory()
    const workoutId = useParams()
    const currentUserId = sessionStorage.getItem("app_user_id")
    
    const {getWorkoutById, deleteWorkout} = useContext(WorkoutContext)

}