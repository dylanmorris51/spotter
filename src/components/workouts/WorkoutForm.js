import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { WorkoutContext } from "./WorkoutProvider"
import Button from "react-bootstrap/Button"

export const WorkoutForm = () => {

    //context
    const { getWorkouts, addWorkout, getWorkoutById, updateWorkout, deleteWorkout } = useContext(WorkoutContext)

    //state
    const [workout, setWorkout] = useState({
        name: "",
        userId: 0
    })

    //enable save
    const [isLoading, setIsLoading] = useState(true)

    //workoutId + navigation + currentUserId
    const { workoutId } = useParams()
    const history = useHistory()
    const currentUserId = +sessionStorage.getItem("app_user_id") 
    


    //check if user wants to edit or add
    useEffect(() => {
        getWorkouts()
            .then(() => {
                if (workoutId) {
                    getWorkoutById(workoutId)
                        .then(res => {
                            setWorkout(res)
                            setIsLoading(false)
                        })
                } else {setIsLoading(false)}
            })
    }, [])




    // input handler
    const handleControlledInputChange = (event) => {
        
        const newWorkout = { ...workout}

        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = +selectedVal
        }

        newWorkout[event.target.id] = selectedVal

        setWorkout(newWorkout)
    }

    // save  handler
    const handleSaveWorkout = (event) => {
        
        setIsLoading(true)

        if (workoutId) {
            updateWorkout({
                id: workout.id,
                name: workout.name,
                userId: currentUserId
            }).then(() => history.push(`/workouts/detail/${workoutId}`))
        } else {
            addWorkout({
                name: workout.name,
                userId: currentUserId
            })
            .then(parsedRes => {
                history.push(`/workouts/detail/${parsedRes.id}`)
            })
            // .then(() => history.push(`/workouts/`))
        }
    }


    //delete handler
    const handleDelete = () => {
        deleteWorkout(workoutId)
            .then(() => {
                history.push("/workouts")
            })
    }

    return (
        <form className="workoutForm">
            <h2 className="workoutFormTitle">{workoutId ? "Edit Workout" : "Add Workout"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Name Your Workout:</label>
                    <input type="name" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="workout name?" value={workout.name} />
                </div>
            </fieldset>
            <fieldset>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSaveWorkout()
                }}>
                {workoutId ? "Save Workout" : "Create New Workout"}
            </button>
            {+currentUserId === workout.userId? <Button onClick={handleDelete}>Delete Workout</Button> : ""}
            <button className="btn btn-primary" onClick={() => history.push(`/workouts`)}>
                Cancel
            </button>
        </form>
    )








}