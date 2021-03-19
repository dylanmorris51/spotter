import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "./VideoProvider"
import { useParams, useHistory } from "react-router-dom"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import YoutubeEmbed from "./YoutubeEmbed"
import { WorkoutContext } from "../workouts/WorkoutProvider"
import { WorkoutVideoContext } from "../workoutVideos/WorkoutVideoProvider"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

//! Add workoutVideo table entry from a button
//! select workout to add from dropdown

// Detail page
export const VideoDetail = () => {

    //currentUserId, params, & history
    const currentUserId = +sessionStorage.getItem("app_user_id")
    const { videoId } = useParams()
    const history = useHistory()
    
    
    //video context & state
    const { getVideoById } = useContext(VideoContext)
    const [video, setVideo] = useState([])


    
    // workout context 
    const { workouts, getWorkoutsByUserId } = useContext(WorkoutContext)
    

    //workoutVideo context
    const { addWorkoutVideo } = useContext(WorkoutVideoContext)


    // gets workoutId from dropdown select
    const [workoutId, setWorkoutId] = useState(0)




    // fetch video
    useEffect(() => {
        getVideoById(videoId)
            .then((response) => {
                setVideo(response)
            })
    }, [])


    // fetch workouts
    useEffect(() => {
        getWorkoutsByUserId(currentUserId)
    }, [])



    //dropdown select handler
    // handle dropdown option select
    const handleSelect = (e) => {
        setWorkoutId(e)
    }

     // add workoutVideoObj
    const handleAddVideo = (e) => {
        const workoutVideoObj = {
            workoutId: +workoutId,
            videoId: +videoId
        }

        console.log("new workoutVideoObj", workoutVideoObj)
        addWorkoutVideo(workoutVideoObj)
    }
    
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h4>{video.name}</h4>
                    <YoutubeEmbed embedId={video.embed} />
                    <Button onClick={() => {
                        history.push(`/videos`)
                    }}>
                        Back To Videos
                    </Button>
                    <DropdownButton
                    alignRight
                    title="Select Workout"
                    id="dropdown-menu-align-right"
                    onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="0">Select a workout...</Dropdown.Item>
                    {
                        workouts.map(workout => {
                            
                            return <Dropdown.Item eventKey={workout.id}>{workout.name}</Dropdown.Item>

                        })
                    }
                </DropdownButton>



                </Container>
            </Jumbotron>
        </>
    )
}