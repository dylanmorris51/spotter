import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { PlannerContext } from "./PlannerProvider"


export const PlannerCard = ({ planner }) => {

    const { deletePlanner } = useContext(PlannerContext)

    return  <>
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{ planner.day }</Card.Header>
                        
                    <Card.Body>
                    <Card.Title>{ planner.workout?.name }</Card.Title>
                        <Button variant="primary" href={`/workouts/detail/${planner.workoutId}`}>
                            View Workout
                        </Button>
                        <Button variant="primary" href={`/planner/edit/${planner.id}`}>
                            Edit
                        </Button>
                        <Button variant="primary" href={() => {deletePlanner(planner.id)}}>
                            Delete
                        </Button>
                    </Card.Body>
                </Card>
            </>
}