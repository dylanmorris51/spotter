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


export const VideoCard = ({ video }) => {

    //context
    const { getVideoById } = useContext(VideoContext)

    const [videoObj, setVideoObj] = useState([])

    useEffect(() => {
        getVideoById()
            .then(setVideoObj)
    }, [])
    
    
    
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Header>{ video.exerciseType?.type }</Card.Header>
                <Link to={`/videos/detail/${video.id}`}>
                    <Card.Img variant="top" src={video.img} />
                </Link>

            <Card.Body>
                <Card.Title>{ video.name }</Card.Title>
                <Card.Subtitle>{ `Helps with ${video.painType?.type} pain` } </Card.Subtitle>
                <Card.Text>
                </Card.Text>
                <Button id={video.id} variant="primary" onClick={event => {
                    //! Add this workout to the join table
                    console.log(event.target.id)

                }}>
                    Add to Workout
                </Button>
            </Card.Body>
        </Card>
    )
    
}
