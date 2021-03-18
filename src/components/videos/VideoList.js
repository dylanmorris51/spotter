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
    
    
    
    
    // sort by pain types
    // const handlePainSort = (e) => {

    //     if (+e.target.id !== 0) {

    //         let painType = painTypes.find(type => type.id === +e.target.id)
    //         console.log('painType: ', painType);
            
    //         let matchingVideosByPainType = videos.filter(videoObj => videoObj.painType.id === painType.id)
    //         console.log('matchingVideosByPainType: ', matchingVideosByPainType);
    
    //         setFilteredVideos(matchingVideosByPainType)
    //     } else {
    //         setFilteredVideos(videos)
    //     }
        
    // }

    // sort by exercise types
    // const handleExerciseSort = (e) => {
        
    //     if (+e.target.id !== 0) {

    //         let exerciseType = exerciseTypes.find(type> type.id === +e.target.id)
    //         let matchingVideosByExerciseType = videos.filter(videoObj => videoObj.exerciseType.id === exerciseType.id)

    //         setFilteredVideos(matchingVideosByExerciseType)
    //     } else {
    //         setFilteredVideos(videos)
    //     }
    // }


//! Problem: matching IDs between pain and exercise types
//! Solution: move the dropdowns to separate components then render each as context so only one renders at a time.
//! Present a single button to sort which activates a modal which renders a specific dropdown
//! would need to store return in a variable which can be changed and called in the return


    return (
        <>
            
            <Button onClick={() => {
                history.push(`/exerciseTypes`)
            }}>
                Sort By Exercise Types
            </Button>
            <Button onClick={() => {
                history.push(`/videos/painTypes`)
            }}>
                Sort By Body Pain
            </Button>
            

            {/*rendering component*/}
            <h2>Videos</h2>

            <div className="video--list">
                {videos?.map(video => {
                    return <VideoCard key={video.id} video={video} />
                })}
            </div>
        </>
    )


}