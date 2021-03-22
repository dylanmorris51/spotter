import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "../videos/VideoProvider"
import { useParams, useHistory } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"
import { WorkoutVideoContext } from "../workoutVideos/WorkoutVideoProvider"
import YoutubeEmbed from "../videos/YoutubeEmbed"
import { WorkoutVideoCard } from "../workoutVideos/WorkoutVideoCard"
import Button from "react-bootstrap/Button"


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
                .then(res => {
                    setWorkout(res)
                })
    }, [])

    //filter videos
    useEffect(() => {
        console.log("workout array", workout)
        const matchingVideos = workoutVideos.filter(video => video.workoutId === workout.id)
        console.log('matchingVideos: ', matchingVideos);
        setFilteredVideos(matchingVideos)
    }, [workout])

    //! render cards here with embed 
    return (
        <>
            <div className="workoutVideo--list">
                {filteredVideos.map(video => {
                    <WorkoutVideoCard key={video.id} workoutVideo={video} />
                })}
            </div>
            
            <Button onClick={() => {
                console.log("workouts array", workout)
                console.log("filtered video array", filteredVideos)
            }}>Check Array</Button>
            <h3> Anything? Hello?</h3>
        </>

    )
}