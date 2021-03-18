import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { WorkoutContext } from "./WorkoutProvider"

//! Reference Kennels to create a workout form to add/edit workouts

export const WorkoutForm = () => {

    //context
    const { addWorkout, getWorkoutbyId, updateWorkout } = useContext(WorkoutContext)

    //state
    const [workout, setWorkout] = useState({
        name: "",
        userId: 0
    })

    //enable save
    const [isLoading, setIsLoading] = useState(true)

    //workoutId
    const { workoutId } = useParams()
    const history = useHistory() 

    // event grabber
    const handleControlledInputChange = (event) => {
        
        const newWorkout = { ...workout}

        newWorkout[event.target.id] = event.target.value

        setWorkout(newWorkout)
    }

    // save workout
    const handleSaveWorkout = () => {
        //TODO: reference kennels to create the rest of this form
    }









}