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
            <div className="sorting">
                <Button className="btn video--sort video--sort--ex" onClick={() => {
                    history.push(`/videos/exerciseTypes`)
                }}>
                    Sort By Exercise Types
                </Button>
                
                {/* button sort by pain */}
                <Button className="btn video--sort video--sort--pain" onClick={() => {
                    history.push(`/videos/painTypes`)
                }}>
                    Sort By Body Pain
                </Button>
            </div>
            
            
            <div className="header">
                <h2 className="video--title">Videos</h2>
            </div>

            {/*render videos*/}
            <div className="video--list">
                {videos.map(video => {
                    return <VideoCard key={video.id} video={video} />
                })}
            </div>
        </>
    )


}