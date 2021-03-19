import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { WorkoutContext } from "./WorkoutProvider"

//! Reference Kennels to create a workout form to add/edit workouts

export const WorkoutForm = () => {

    //context
    const { getWorkouts, addWorkout, getWorkoutbyId, updateWorkout } = useContext(WorkoutContext)

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
                    getWorkoutbyId(workoutId)
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

        let selectedVal = e.target.value
        if (e.target.id.includes("Id")) {
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
                name: workout.name,
                userId: workout.currentUserId,
                id: workout.id
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
                    <input type="name" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="name?" value={workout.name} />
                </div>
            </fieldset>
            <fieldset>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSaveEvent()
                }}>
                {eventId ? "Save Workout" : "Add Workout"}
            </button>
        </form>
    )








}