import React, { useState, createContext } from "react"

// context
export const VideoContext = createContext()

//provider
export const VideoProvider = (props) => {

    //state
    const [videos, setVideos] = useState([])

    //fetch
    const getVideos = () => {
        return fetch("http://localhost:8088/videos?_expand=exerciseType&_expand=painType")
            .then(res => res.json())
            .then(setVideos)
    }

    //add
    const addVideo = videoObj => {
        return fetch("http://localhost:8088/videos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(videoObj)
        })
        .then(getVideos)
    }

    //get by ID
    const getVideoById = (id) => {
        return fetch(`http://localhost:8088/videos/${id}`)
            .then(res => res.json())
    }

    //delete
    const deleteVideo = videoId => {
        return fetch (`http://localhost:8088/videos/${videoId}`, {
            method: "DELETE"
        })
        .then(getVideos)
    }

    const updateVideo = video => {
        return fetch(`http://localhost:8088/videos/${video.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(video)
        })
        .then(getVideos)
    }

    return (
        <VideoContext.Provider value={{
            videos, getVideos, addVideo, deleteVideo, updateVideo, getVideoById
        }}>
            {props.children}
        </VideoContext.Provider>
    )
}