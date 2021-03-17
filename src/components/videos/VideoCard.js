import React from "react"
import "./Video.css"
import "./YoutubeEmbed.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import YoutubeEmbed from './YoutubeEmbed'



//! add links to a details page


export const VideoCard = ({ video }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Header>{ video.exerciseType?.type }</Card.Header>
        <Button>
            <Card.Img variant="top" src={video.img} />

        </Button>
        {/*<div>
            <YoutubeEmbed embedId={ video.embed }/>
        </div>*/}
        <Card.Body>
            <Card.Title>{ video.name }</Card.Title>
            <Card.Subtitle>{ `Helps with ${video.painType?.type} pain` } </Card.Subtitle>
            <Card.Text>
            </Card.Text>
            <Button variant="primary">
                Add to Workout
            </Button>
        </Card.Body>
    </Card>
)