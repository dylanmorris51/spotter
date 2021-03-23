import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const PlannerCard = ({ planner }) => {

    return  <>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{ planner.day }</Card.Header>
                        
                    <Card.Body>
                    <Card.Title>{ planner.workout?.name }</Card.Title>
                        <Button variant="primary" href={`/workouts/detail/${planner.workoutId}`}>
                            View Workout
                        </Button>
                        <Button variant="primary" href={`/planner/detail/${planner.id}`}>
                            Edit
                        </Button>
                    </Card.Body>
                </Card>
            </>
}