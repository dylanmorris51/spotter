import React, { useState, createContext } from "react"

// context
export const WorkoutContext = createContext()



//provider
export const WorkoutProvider = (props) => {

    
    
    //state
    const [workouts, setWorkouts] = useState([])

    //fetch
    const getWorkouts = () => {
        return fetch("http://localhost:8088/workouts")
            .then(_ => _.json())
            .then(setWorkouts)
    }

    //add
    const addWorkout = workoutObj => {
        return fetch("http://localhost:8088/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workoutObj)
        })
        .then(getWorkouts)
    }

    //get by ID
    const getWorkoutById = (id) => {
        return fetch(`http://localhost:8088/workouts/${id}`)
            .then(res => res.json())
    }

    //get by userId
    const getWorkoutsByUserId = (userId) => {
        return fetch(`http://localhost:8088/workouts?userId=${userId}`)
        .then(res => res.json())
        .then(setWorkouts)
    }

    //delete
    const deleteWorkout = workoutId => {
        return fetch (`http://localhost:8088/workouts/${workoutId}`, {
            method: "DELETE"
        })
        .then(getWorkouts)
    }

    // update
    const updateWorkout = workout => {
        return fetch(`http://localhost:8088/videos/${workout.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workout)
        })
        .then(getWorkouts)
    }

    return (
        <WorkoutContext.Provider value={{
            workouts, getWorkouts, addWorkout, getWorkoutById, getWorkoutsByUserId, deleteWorkout, updateWorkout
        }}>
            {props.children}
        </WorkoutContext.Provider>
    )
}