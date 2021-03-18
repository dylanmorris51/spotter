import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "./VideoProvider"
import { useHistory } from "react-router-dom"
import { VideoCard } from "./VideoCard"
import "./Video.css"
import "./YoutubeEmbed.css"
import { PainTypeContext } from "../pains/PainProvider"
import { ExerciseTypeContext } from "../exerciseTypes/ExerciseTypeProvider"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"

export const VideoList = () => {

    const history = useHistory()

    //video context
    const { videos, getVideos, setVideos } = useContext(VideoContext)
    //pain context
    const { painTypes, getPainTypes } = useContext(PainTypeContext)
    //exercise type context
    const { exerciseTypes, getExerciseTypes } = useContext(ExerciseTypeContext)
    
    //video state for filtering
    // const [filteredVideos, setFilteredVideos] = useState([])
    
    
    
    //render page-load
    useEffect(() => {
        getPainTypes()
        .then(getExerciseTypes)
            .then(getVideos)
                // .then(setFilteredVideos(videos))
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
                {videos?.map(video => {
                    return <VideoCard key={video.id} video={video} />
                })}
            </div>
        </>
    )


}