import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { WorkoutContext } from "./WorkoutProvider"

//! Create workouts here, then have a list which lists all videos from the join table in the workouts. Add to the join table from video library. Delete from the join table from workout video list

export const WorkoutForm = () => {

    //context
    const { getWorkouts, addWorkout, getWorkoutById, updateWorkout } = useContext(WorkoutContext)

    //state
    const [workout, setWorkout] = useState({
        name: "",
        userId: 0
    })

    //enable save
    const [isLoading, setIsLoading] = useState(true)

    //workoutId + navigation
    const { workoutId } = useParams()
    const history = useHistory() 


    //check for edit or add
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

    // save  hndler
    const handleSaveWorkout = (event) => {
        
        setIsLoading(true)
            
        const currentUserId = +sessionStorage.getItem("app_user_id")

        if (workoutId) {
            updateWorkout({
                id: workout.id,
                name: workout.name,
                userId: workout.currentUserId
            }).then(() => history.push(`/workouts/detail/${workout.id}`))
        } else {
            addWorkout({
                name: workout.name,
                userId: currentUserId
            }).then(() => history.push("/workouts"))
        }
    }

    return (
        <form className="workoutForm">
            <h2 className="workoutFormTitle">{workoutId ? "Edit Workout" : "Add Workout"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Workout Name: </label>
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
            <button className="btn btn-primary" onClick={() => history.push(`/workouts`)}>
                Cancel
            </button>
        </form>
    )








}