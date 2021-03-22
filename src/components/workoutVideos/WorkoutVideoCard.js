import React, { useContext } from "react"
import "../videos/YoutubeEmbed.css"
import YoutubeEmbed from "../videos/YoutubeEmbed"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { WorkoutVideoContext } from "./WorkoutVideoProvider"

export const WorkoutVideoCard = ({ workoutVideo }) => {

    const { deleteWorkoutVideo } = useContext(WorkoutVideoContext)


    return <>
            <Card style={{ width: '18rem' }}>
                
                <Card.Header>{ workoutVideo.workout?.name }</Card.Header>

                <Card.Body>
                    <Card.Title>{ workoutVideo.video?.name }</Card.Title>
                    <Card.Text>
                        <YoutubeEmbed embedId={ workoutVideo.video?.embed} />
                    </Card.Text>
                </Card.Body>

                <Button href={`/videos/detail/${workoutVideo.video?.id}`}>
                    Full Screen
                </Button>
                <Button onClick={() => (
                    deleteWorkoutVideo(workoutVideo.id)
                )}>
                    Delete
                </Button>
            </Card>

        </>
}

