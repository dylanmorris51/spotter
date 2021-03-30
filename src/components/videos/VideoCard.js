import React from "react"
import "./Video.css"
import "./YoutubeEmbed.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom"


export const VideoCard = ({ video }) => (
    <Card className="video" style={{ width: '18rem' }}>
        <Card.Header className="card--header">{ video.exerciseType?.type }</Card.Header>
            <Link to={`/videos/detail/${video.id}`}>
                <Card.Img className="card--img" variant="top" src={video.img} />
            </Link>

        <Card.Body className="card--body">
            <div>
                <Card.Title>{ video.name }</Card.Title>
                <Card.Subtitle>{ `Helps with ${video.painType?.type} pain` } </Card.Subtitle>
                <Card.Text>
                </Card.Text>
            </div>
            <Button className="card--button" variant="primary" href={`/videos/detail/${video.id}`}>
                Watch Video
            </Button>
        </Card.Body>
    </Card>
)