import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { WorkoutContext } from "./WorkoutProvider"
import { WorkoutVideoContext } from "../workoutVideos/WorkoutVideoProvider"
import { VideoContext } from "../videos/VideoProvider"
import Dropdown from "react-bootstrap/Dropdown"
import DropdownButton from "react-bootstrap/DropdownButton"

//dropdown displaying workouts to be added to workout cards

export const WorkoutDropdown = () => {

    //context
    const { workouts, getWorkoutsByUserId } = useContext(WorkoutContext)
    const { addWorkoutVideo } = useContext(WorkoutVideoContext)
    const { videos, getVideos } = useContext(VideoContext)

    //state
    const [workoutVideo, setWorkoutVideo] = useState({
        workoutId: 0,
        videoId: 0
    })

    useEffect(() => {
        getWorkoutsByUserId()
    })

    // // grabs videoId from dropdown card clicked
    // const handleDropdownClick = (e) => {

    //     const newWorkoutVideo = {...workoutVideo}

    //     let selectedVal = event.target.value
    //     if (event.target.id.includes("Id")) {
    //         selectedVal = +selectedVal
    //     }

    //     newWorkoutVideo[e.target.id] = selectedVal
    //     setWorkoutVideo(newWorkoutVideo)
    // }
    //! Map through workouts, add dropdown.item for each one, and make it add to the join table
    //! Write funciton which adds to join table and import it above
    return (
        // videos will need to be the single video in the card where the dropdown was clicked
        <DropdownButton id={videos.id} title="Dropdown button">
            
            {
                workouts.map(workout => {
                    return <Dropdown.item id={workout.id} onClick={() => {
                        //handle save goes here
                    }}>{workout.name}</Dropdown.item>
                })
            }
            
            
        </DropdownButton>
    )
}