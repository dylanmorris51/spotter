import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"


export const WorkoutCard = ({ workout }) => (
    <Card style={{ width: '18rem' }}>
        <Card.Header>{ workout.name }</Card.Header>
            

        <Card.Body>
            <Button variant="primary" href={`/workouts/detail/${workout.id}`}>
                View Workout
            </Button>
            <Button variant="primary" href={`/workouts/edit/${workout.id}`}>
                Edit Workout
            </Button>
        </Card.Body>
    </Card>

)