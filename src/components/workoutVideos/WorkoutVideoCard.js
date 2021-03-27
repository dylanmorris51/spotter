import React, { useContext } from "react"
import "../videos/YoutubeEmbed.css"
import YoutubeEmbed from "../videos/YoutubeEmbed"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { WorkoutVideoContext } from "./WorkoutVideoProvider"

export const WorkoutVideoCard = ({ workoutVideo }) => {

    // context for delete button on card
    const { deleteWorkoutVideo } = useContext(WorkoutVideoContext)


    return <>
            <Card className="video" style={{ width: '18rem' }}>
                
                <Card.Header>{ workoutVideo.video?.name }</Card.Header>

                <Card.Body className="card--body">
                    <Card.Text className="card--img">
                        <YoutubeEmbed embedId={ workoutVideo.video?.embed} />
                    </Card.Text>
                </Card.Body>

                {/* <div className="buttons">

                </div> */}
                    
                    {/* view video in full screen */}
                    <Button href={`/videos/detail/${workoutVideo.video?.id}`}>
                        Watch Video
                    </Button>
                    
                    {/* delete button */}
                    <Button onClick={() => (
                        deleteWorkoutVideo(workoutVideo.id)
                    )}>
                        Delete
                    </Button>
            </Card>

        </>
}

