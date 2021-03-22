//! When a user chooses a workout from their list of workouts, display all the videos associated with that workout in a list
import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { WorkoutContext } from "../workouts/WorkoutProvider"
import { WorkoutVideoContext } from "./WorkoutVideoProvider"


//! Need to get all workouts, find all workoutVideos that match the workoutId, then get the videos
export const WorkoutVideoList = () => {

    //userId
    const userId = sessionStorage.getItem("app_user_id")
    const history = useHistory()

    //workout context
    const { workouts, getWorkoutsByUserId } = useContext(WorkoutContext)
    // workoutVideo context
    const { workoutVideos, getWorkoutVideos } = useContext(WorkoutVideoContext)

    // filtered video state
    const [ filteredVideos, setFilteredVideos ] = useState([])

    


    const { workoutVideos, getWorkoutVideos } = useContext(WorkoutVideoContext)

    // fetch data on render
    useEffect(() => {
        getWorkoutsByUserId(userId)
            .then(getWorkoutVideos)
    }, [])

    // filter data after render
    useEffect(() => {
        const matchingVideos = workouts.map
    })

    return (
        <>

        </>
    )
}