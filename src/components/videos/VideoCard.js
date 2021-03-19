import React from "react"
import "./Video.css"
import "./YoutubeEmbed.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import { useState, useContext, useEffect } from "react"
import { WorkoutDropdown } from "../workouts/WorkoutDropdown"
import { VideoContext } from "./VideoProvider"
import { useParams, useHistory } from "react-router-dom"
import { WorkoutContext } from "../workouts/WorkoutProvider"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import { WorkoutVideoContext } from "../workoutVideos/WorkoutVideoProvider"


export const VideoCard = ({ video }) => {

    //! Render dropdown, get videoId and workoutID, post to JSON

    //currentUserId
    const currentUserId = +sessionStorage.getItem("app_user_id")

    //context 
    const { workouts, getWorkoutsByUserId } = useContext(WorkoutContext)
    const { addWorkoutVideo } = useContext(WorkoutVideoContext)

    const [workoutVideo, setWorkoutVideo] = useState({
        workoutId: 0,
        videoId: 0
    })

    useEffect(() => {
        getWorkoutsByUserId(currentUserId)
    }, [])

    //! Function with conditional that handles the save/post
    const handleSelect = (e) => {
        console.log(e)
    }


    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>{video.exerciseType?.type}</Card.Header>
            <Link to={`/videos/detail/${video.id}`}>
                <Card.Img variant="top" src={video.img} />
            </Link>

            <Card.Body>
                <Card.Title>{video.name}</Card.Title>
                <Card.Subtitle>{`Helps with ${video.painType?.type} pain`} </Card.Subtitle>
                <Card.Text>
                </Card.Text>
                <Button id={video.id} variant="primary" onClick={event => {
                    //! Add this workout to the join table

                }}>
                    Add To Workout
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
            </Card.Body>
        </Card>
    )

}
