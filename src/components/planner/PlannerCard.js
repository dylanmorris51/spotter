import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

//TODO: expand planner table on workouts to get workout name
//TODO: add button to go to that workout from planner
export const PlannerCard = ({ planner }) => {

    return  <>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{ planner.day }</Card.Header>
                        

                    <Card.Body>
                        <Button variant="primary" href={`/workouts/detail/${workout.id}`}>
                            View Workout
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