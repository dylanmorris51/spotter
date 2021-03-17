import React from "react"
import "./Video.css"
import "./YoutubeEmbed.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import YoutubeEmbed from './YoutubeEmbed'


//TODO: import thumbnails from youtube
//! descriptions
//! embed videos in app on a details page
//TODO: add embed links to the database for each video and dynamically pass them into the cards


export const VideoCard = ({ video }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <div>
            <YoutubeEmbed embedId={ video.embed }/>
        </div>
        <Card.Body>
            <Card.Title>{ video.name }</Card.Title>
            <Card.Subtitle>{ video.exerciseType?.type }</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>
            <Button variant="primary">
                Add to Workout
            </Button>
        </Card.Body>
    </Card>
)