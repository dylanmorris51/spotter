import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { WorkoutContext } from "./WorkoutProvider"


export const WorkoutCard = ({ workout }) => {
    
    // context for delete button
    const { deleteWorkout } = useContext(WorkoutContext)
    
    
    return  <>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{ workout.name }</Card.Header>
                        

                    <Card.Body>
                        <Button variant="primary" href={`/workouts/detail/${workout.id}`}>
                            View Workout
                        </Button>
                        <Button variant="primary" href={`/workouts/edit/${workout.id}`}>
                            Edit Workout
                        </Button>
                        <Button onClick={() => (
                            deleteWorkout(workout.id)
                        )}>
                            Delete Workout
                        </Button>
                        <Button href={`/videos`}>
                            Add Videos
                        </Button>
                    </Card.Body>
                </Card>
            </>

}