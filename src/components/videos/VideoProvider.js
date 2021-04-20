import React, { useState, createContext } from "react"

// context
export const VideoContext = createContext()

//provider
export const VideoProvider = (props) => {

    //state
    const [videos, setVideos] = useState([])

    //fetch
    const getVideos = () => {
        return fetch("https://spotter-nss-api.herokuapp.com/videos?_expand=exerciseType&_expand=painType")
            .then(res => res.json())
            .then(setVideos)
    }

    //add
    const addVideo = videoObj => {
        return fetch("https://spotter-nss-api.herokuapp.com/videos", {
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
        return fetch(`https://spotter-nss-api.herokuapp.com/videos/${id}`)
            .then(res => res.json())
    }

    //delete
    const deleteVideo = videoId => {
        return fetch (`https://spotter-nss-api.herokuapp.com/videos/${videoId}`, {
            method: "DELETE"
        })
        .then(getVideos)
    }

    //update
    const updateVideo = video => {
        return fetch(`https://spotter-nss-api.herokuapp.com/videos/${video.id}`, {
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