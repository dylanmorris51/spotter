import React, { useState, createContext } from "react"

// context 
export const WorkoutVideoContext = createContext()



//provider
export const WorkoutVideoProvider = (props) => {

    
    
    //state
    const [workoutVideos, setWorkoutVideos] = useState([])

    //fetch
    const getWorkoutVideos = () => {
        return fetch("https://git.heroku.com/spotter-nss-api.git/workoutVideos?_expand=video&_expand=workout")
            .then(_ => _.json())
            .then(setWorkoutVideos)
    }

    //add
    const addWorkoutVideo = workoutVideoObj => {
        return fetch("https://git.heroku.com/spotter-nss-api.git/workoutVideos", {
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
        return fetch(`https://git.heroku.com/spotter-nss-api.git/workoutVideos/${id}`)
            .then(res => res.json())
    }

    //delete
    const deleteWorkoutVideo = workoutVideoId => {
        return fetch (`https://git.heroku.com/spotter-nss-api.git/workoutVideos/${workoutVideoId}`, {
            method: "DELETE"
        })
        .then(getWorkoutVideos)
    }

    // update
    const updateWorkoutVideo = workoutVideo => {
        return fetch(`https://git.heroku.com/spotter-nss-api.git/videos/${workoutVideo.id}`, {
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