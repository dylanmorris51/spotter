import React, { useState, createContext } from "react"

// context
export const WorkoutContext = createContext()



//provider
export const WorkoutProvider = (props) => {

    
    
    //state
    const [workouts, setWorkouts] = useState([])

    //fetch
    const getWorkouts = () => {
        return fetch("https://git.heroku.com/spotter-nss-api.git/workouts")
            .then(_ => _.json())
            .then(setWorkouts)
    }

    //add
    const addWorkout = workoutObj => {
        return fetch("https://git.heroku.com/spotter-nss-api.git/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workoutObj)
        }).then(res => res.json())
    }

    //get by ID
    const getWorkoutById = (id) => {
        return fetch(`https://git.heroku.com/spotter-nss-api.git/workouts/${id}`)
            .then(res => res.json())
    }

    //get by userId
    const getWorkoutsByUserId = (userId) => {
        return fetch(`https://git.heroku.com/spotter-nss-api.git/workouts?userId=${userId}`)
        .then(res => res.json())
        .then(setWorkouts)
    }

    //delete
    const deleteWorkout = workoutId => {
        return fetch (`https://git.heroku.com/spotter-nss-api.git/workouts/${workoutId}`, {
            method: "DELETE"
        })
    }

    // update
    const updateWorkout = workout => {
        return fetch(`https://git.heroku.com/spotter-nss-api.git/workouts/${workout.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workout)
        })
    }

    return (
        <WorkoutContext.Provider value={{
            workouts, getWorkouts, addWorkout, getWorkoutById, getWorkoutsByUserId, deleteWorkout, updateWorkout
        }}>
            {props.children}
        </WorkoutContext.Provider>
    )
}