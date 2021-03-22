import React from "react"
import "../videos/YoutubeEmbed.css"
import YoutubeEmbed from "../videos/YoutubeEmbed"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const WorkoutVideoCard = ({ workoutVideo }) => (
    <Card style={{ width: '18rem' }}>
        {console.log("workout video", workoutVideo)}
        <Card.Header>{ workoutVideo.workout?.name }</Card.Header>

        <Card.Body>
            <Card.Title>{ workoutVideo.video?.name }</Card.Title>
            <Card.Text>
                <YoutubeEmbed embedId={ workoutVideo.video?.embed} />
            </Card.Text>
            {console.log("workout video", workoutVideo)}
        </Card.Body>
    </Card>
)
