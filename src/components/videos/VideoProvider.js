import React, { useState, createContext } from "react"

// context
export const VideoContext = createContext()

//provider
export const VideoProvider = (props) => {

    //state
    const [videos, setVideos] = useState([])

    //fetch
    const getVideos = () => {
        return fetch("http://localhost:8088/videos")
            .then(res => res.json)
            .then(setVideos)
    }
    
}