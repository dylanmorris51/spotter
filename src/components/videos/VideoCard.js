import React from "react"
import "./Video.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


//TODO: import thumbnails from youtube
//! descriptions
//! embed videos in app on a details page


export const VideoCard = ({ video }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{ video.name }</Card.Title>
            <Card.Subtitle>{ video.exerciseType?.type }</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>
            <Button variant="primary">
                <Card.Link href={video.link}>Go To Video</Card.Link>
            </Button>
        </Card.Body>
    </Card>
)