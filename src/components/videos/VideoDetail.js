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


    // state variable receives value from dropdown select
    const [workoutId, setWorkoutId] = useState(0)




    // fetch video by params => set state
    useEffect(() => {
        getVideoById(videoId)
            .then((response) => {
                setVideo(response)
            })
    }, [])


    // fetch workouts by current user
    useEffect(() => {
        getWorkoutsByUserId(currentUserId)
    }, [])



    //dropdown select handler
    const handleSelect = (e) => {
        let parseIntify = +e
        setWorkoutId(parseIntify)
    }

     // add workoutVideoObj
    const handleAddVideo = (e) => {
        const workoutVideoObj = {
            workoutId: +workoutId,
            videoId: +videoId
        }
        
        addWorkoutVideo(workoutVideoObj)
    }
    
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h4>{video.name}</h4>
                    <YoutubeEmbed embedId={video.embed} />

                    <Button onClick={() => {
                        history.goBack()
                    }}>
                        Back
                    </Button>
                    <DropdownButton
                    alignRight
                    title="Add to Workout..."
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
                {workoutId !== 0 ? <Button onClick={handleAddVideo} href={`/videos`}>Save</Button> : <div className="empty"></div>}
                
                



                </Container>
            </Jumbotron>
        </>
    )
}