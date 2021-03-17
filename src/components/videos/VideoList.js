import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "./VideoProvider"
import { useHistory } from "react-router-dom"
import { VideoCard } from "./VideoCard"
import "./Video.css"
import "./YoutubeEmbed.css"

export const VideoList = () => {

    //use context
    const { videos, getVideos } = useContext(VideoContext)
    const history = useHistory()

    useEffect(() => {
        getVideos()
    }, [])

    //TODO: add search and sort

    

    return (
        <>
            <h2>Videos</h2>

            <div className="video--list">
                {videos?.map(video => {
                    return <VideoCard key={video.id} video={video} />
                })}
            </div>
        </>
    )


}