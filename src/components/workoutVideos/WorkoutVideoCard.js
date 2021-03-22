import React from "react"
import "./YoutubeEmbed.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//! refactor objects to match props on this card, embed youtube video like detail page
export const WorkoutVideoCard = ({ workoutVideo }) => (
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
            <Button variant="primary" href={`/videos/detail/${video.id}`}>
                Add to Workout
            </Button>
        </Card.Body>
    </Card>
)
