import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { WorkoutContext } from "./WorkoutProvider"


export const WorkoutCard = ({ workout }) => {
    
    // context for delete button
    const { deleteWorkout, getWorkoutsByUserId } = useContext(WorkoutContext)
    const currentUserId = sessionStorage.getItem("app_user_id")
    
    
    return  <>
                <Card className="workout" style={{ width: '18rem' }}>
                    <Card.Header>{ workout.name }</Card.Header>
                    <Card.Img className="card--img" variant="top" src={`https://i.imgur.com/4bqorlt.png`} />
    

                    <Card.Body className="card--body">
                        <Button className="card--button" variant="primary" href={`/workouts/detail/${workout.id}`}>
                            View Workout
                        </Button>
                        <Button className="card--button" variant="primary" href={`/workouts/edit/${workout.id}`}>
                            Edit Workout
                        </Button>
                        <Button className="card--button" onClick={() => {
                            deleteWorkout(workout.id)
                                .then(() => {
                                    getWorkoutsByUserId(currentUserId)
                                })
                            }
                            }>
                                Delete Workout
                        </Button>
                        <Button className="card--button" href={`/videos`}>
                            Add Videos
                        </Button>
                    </Card.Body>
                </Card>
            </>

}