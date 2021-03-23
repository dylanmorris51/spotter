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
                    <Card.Title>{ planner.workout?.name }</Card.Title>
                        <Button variant="primary" href={`/workouts/detail/${workout.id}`}>
                            View Workout
                        </Button>
                        
                        
                        
                    </Card.Body>
                </Card>
            </>
}