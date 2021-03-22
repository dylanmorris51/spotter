import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "./VideoProvider"
import { useParams, useHistory } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"

export const WorkoutDetail = () => {

    //currentUserId, params, & history
    const currentUserId = +sessionStorage.getItem("app_user_id")
    const { workoutId } = useParams()
    const history = useHistory()

    //workout state
    const { getWorkoutById } = useContext(WorkoutContext)
    const [ workout, setWorkout ] = useState([])

    useEffect(() => {
        getWorkoutById(workoutId)
            .then(setWorkout)
    }, [])
}