import React from "react"
import "./YoutubeEmbed.css"
import YoutubeEmbed from "../videos/YoutubeEmbed"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//! refactor objects to match props on this card, embed youtube video like detail page
export const WorkoutVideoCard = ({ workoutVideo }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Header>{ workoutVideo.workout?.name }</Card.Header>

        <Card.Body>
            <Card.Title>{ workoutVideo.video?.name }</Card.Title>
            <Card.Text>
                <YoutubeEmbed key={workoutVideo.id} embedId={ workoutVideo.video?.embed} />
            </Card.Text>
        </Card.Body>
    </Card>
)
