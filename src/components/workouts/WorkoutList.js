import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"
import { WorkoutCard } from "./WorkoutCard"
import  Button  from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

export const WorkoutList = () => {

    const history = useHistory()

    //workout context
    const { workouts, getWorkoutsByUserId } = useContext(WorkoutContext)

    
    //userId
    const userId = sessionStorage.getItem("app_user_id")

    //render page-load
    useEffect(() => {
        getWorkoutsByUserId(userId)
    }, [])

    //modal state variable
    const [show, setShow] = useState(false)

    useEffect(() => {
        workouts.length >= 1 ? setShow(false) : setShow(true)
    }, [workouts])

    // handle close for modal
    const handleClose = () => {
        
        setShow(false)
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create A Workout!</Modal.Title>
                </Modal.Header>
                <Modal.Body>It looks like you haven't created any workouts yet. Click Create to get started. </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        setShow(false)
                        history.push(`/workouts/create`)}
                        }> Create
                    </Button>
                </Modal.Footer>
            </Modal>


            <h2> Workouts </h2>
            {/* check if user has created workouts => prompt user to create workouts */}
            <div className="workouts--list">
                {workouts.length === 0 ? "create a new workout!" : workouts.map(workout => {
                    return <WorkoutCard key={workout.id} workout={workout}/>
                })}
            </div>





        </>
    )
}