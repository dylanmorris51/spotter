import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "./VideoProvider"
import { useParams, useHistory } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"
import { WorkoutVideoContext } from "../workoutVideos/WorkoutVideoProvider"

export const WorkoutDetail = () => {

    //currentUserId, params, & history
    const currentUserId = +sessionStorage.getItem("app_user_id")
    const { workoutId } = useParams()
    const history = useHistory()
    
    //workout context
    const { getWorkoutById } = useContext(WorkoutContext)
    
    //workoutVideo context
    const { workoutVideos, getWorkoutVideos } = useContext(WorkoutVideoContext)

    //workout state
    const [ workout, setWorkout ] = useState([])

    //filtered video state
    const [ filteredVideos, setFilteredVideos ] = useState([])
    //filtered video state

    //fetch data on page load
    useEffect(() => {
        getWorkoutVideos()
            .then(getWorkoutById(workoutId))
                .then(setWorkout)
    }, [])

    //filter videos
    useEffect(() => {
        const matchingVideos = workoutVideos.filter(video => video.workoutId === workout.id)
        setFilteredVideos(matchingVideos)
    }, [workout])

    
}