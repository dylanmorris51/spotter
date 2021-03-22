import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "./VideoProvider"
import { useHistory } from "react-router-dom"
import { VideoCard } from "./VideoCard"
import "./Video.css"
import Button from "react-bootstrap/Button"

export const VideoList = () => {

    const history = useHistory()

    //video context
    const { videos, getVideos } = useContext(VideoContext)
    //pain context
    
    
    //render page-load
    useEffect(() => {
        getVideos()
    }, [])
    

    return (
        <>
            
            {/* button sort by exercise */}
            <Button onClick={() => {
                history.push(`/videos/exerciseTypes`)
            }}>
                Sort By Exercise Types
            </Button>
            
            {/* button sort by pain */}
            <Button onClick={() => {
                history.push(`/videos/painTypes`)
            }}>
                Sort By Body Pain
            </Button>
            

            {/*render videos*/}
            <div className="video--list">
                {videos.map(video => {
                    return <VideoCard key={video.id} video={video} />
                })}
            </div>
        </>
    )


}