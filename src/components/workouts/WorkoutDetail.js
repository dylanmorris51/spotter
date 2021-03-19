import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"

//! Need to display videos from the join table on this component, so I need to add videos to the join table first
//workout view component

export const WorkoutDetail = () => {

    const history = useHistory()
    const workoutId = useParams()
    const currentUserId = sessionStorage.getItem("app_user_id")
    
    const {getWorkoutById, deleteWorkout} = useContext(WorkoutContext)

}