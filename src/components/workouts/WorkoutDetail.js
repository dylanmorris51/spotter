import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "../videos/VideoProvider"
import { useParams, useHistory } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"
import { WorkoutVideoContext } from "../workoutVideos/WorkoutVideoProvider"
import { WorkoutVideoCard } from "../workoutVideos/WorkoutVideoCard"


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
    const [ workout, setWorkout ] = useState({
        id: 0,
        name: "",
        userId: 0
    })
    
    //filtered video state
    const [ filteredVideos, setFilteredVideos ] = useState([])
    
    
    //fetch workout data on page load
    useEffect(() => {
        getWorkoutById(workoutId)
        .then(res => {
            setWorkout(res)
        })
            .then(getWorkoutVideos)
    }, [])
    
    
    //filter videos
    useEffect(() => {
        const matchingVideos = workoutVideos.filter(video => video.workoutId === workout.id)
        setFilteredVideos(matchingVideos)
    }, [workoutVideos])

    
    return (
        <>
            <div className="workoutVideo--list">
                {filteredVideos.map(video => {
                    
                    return <WorkoutVideoCard key={video.id} workoutVideo={video}/>
                    
                })}
            </div>
        </>

    )
}