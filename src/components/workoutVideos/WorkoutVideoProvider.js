import React, { useState, createContext } from "react"

// context 
export const WorkoutVideoContext = createContext()



//provider
export const WorkoutVideoProvider = (props) => {

    
    
    //state
    const [workoutVideos, setWorkoutVideos] = useState([])

    //fetch
    const getWorkoutVideos = () => {
        return fetch("http://localhost:8088/workoutVideos?_expand=video&_expand=workout")
            .then(_ => _.json())
            .then(setWorkoutVideos)
    }

    //add
    const addWorkoutVideo = workoutVideoObj => {
        return fetch("http://localhost:8088/workoutVideos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workoutVideoObj)
        })
        .then(getWorkoutVideos)
    }

    //get by ID
    const getWorkoutVideoById = (id) => {
        return fetch(`http://localhost:8088/workoutVideos/${id}`)
            .then(res => res.json())
    }

    //delete
    const deleteWorkoutVideo = workoutVideoId => {
        return fetch (`http://localhost:8088/workoutVideos/${workoutVideoId}`, {
            method: "DELETE"
        })
        .then(getWorkoutVideos)
    }

    // update
    const updateWorkoutVideo = workoutVideo => {
        return fetch(`http://localhost:8088/videos/${workoutVideo.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(workoutVideo)
        })
        .then(getWorkoutVideos)
    }

    return (
        <WorkoutVideoContext.Provider value={{
            workoutVideos, getWorkoutVideos, addWorkoutVideo, getWorkoutVideoById, deleteWorkoutVideo, updateWorkoutVideo
        }}>
            {props.children}
        </WorkoutVideoContext.Provider>
    )
}