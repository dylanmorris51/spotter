import React from "react"
import "./Video.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


//TODO: expand videos on painType and exerciseType


export const VideoCard = ({ video }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{ video.name }</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
    </Card.Text>
            <Button variant="primary">{ video.link }</Button>
        </Card.Body>
    </Card>
)