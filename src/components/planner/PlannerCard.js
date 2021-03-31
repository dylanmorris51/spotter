import React, { useContext } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export const PlannerCard = ({ planner }) => {


    return  <>
                <Card className="workout" style={{ width: '18rem' }}>
                    <Card.Header>{ planner.day?.name }</Card.Header>
                    <Card.Img className="card--img" variant="top" src={`https://i.imgur.com/4bqorlt.png`} />
    
                    <Card.Body>
                    <Card.Title>{ planner.workout?.name }</Card.Title>
                        <Button variant="primary" href={`/workouts/detail/${planner.workoutId}`}>
                            View Workout
                        </Button>
                        <Button variant="primary" href={`/planner/edit/${planner.id}`}>
                            Edit
                        </Button>
                        
                    </Card.Body>
                </Card>
            </>
}