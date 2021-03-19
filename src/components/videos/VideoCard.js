import React from "react"
import "./Video.css"
import "./YoutubeEmbed.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"
import { useState, useContext } from "react"
import { WorkoutDropdown } from "../workouts/WorkoutDropdown"


export const VideoCard = ({ video }) => {

    
    
    
    
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
                <Button variant="primary" onClick={() => {
                    //! Add this workout to the join table


                }}>
                    Add to Workout
                </Button>
            </Card.Body>
        </Card>
    )
    
}
