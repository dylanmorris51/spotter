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

export const VideoList = () => {

    const history = useHistory()

    //video context
    const { videos, getVideos, setVideos } = useContext(VideoContext)
    //pain context
    const { painTypes, getPainTypes } = useContext(PainTypeContext)
    //exercise type context
    const { exerciseTypes, getExerciseTypes } = useContext(ExerciseTypeContext)
    
    //video state for filtering
    const [filteredVideos, setFilteredVideos] = useState([])
    
    
    
    //render page-load
    useEffect(() => {
        getPainTypes()
        .then(getExerciseTypes)
            .then(getVideos)
                .then(setFilteredVideos(videos))
    }, [])
    
    
    
    
    // sort by pain types
    const handlePainSort = (e) => {

        if (+e.target.id !== 0) {

            let painType = painTypes.find(type => type.id === +e.target.id)
            console.log('painType: ', painType);
            
            let matchingVideosByPainType = videos.filter(videoObj => videoObj.painType.id === painType.id)
            console.log('matchingVideosByPainType: ', matchingVideosByPainType);
    
            setFilteredVideos(matchingVideosByPainType)
        } else {
            setFilteredVideos(videos)
        }
        
    }

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

let PageReturn = () => {
    return (
        <h1> I CAN SEE THIS</h1>
    )
}
    return (
        <>
            
            {/*Exercise type dropdown*/}
            {/* <DropdownButton id="dropdown-item-button" title="Sort By Body Pain">
                <Dropdown.Item id="1" onClick={e => {handleExerciseSort(e)}} as="button">Stretching & Mobility</Dropdown.Item>
                <Dropdown.Item id="2" onClick={e => {handleExerciseSort(e)}} as="button">Core</Dropdown.Item>
                <Dropdown.Item id="3" onClick={e => {handleExerciseSort(e)}} as="button">Lower Body</Dropdown.Item>
                <Dropdown.Item id="4" onClick={e => {handleExerciseSort(e)}} as="button">Upper Body</Dropdown.Item>
            </DropdownButton> */}
            
            
            {/*Pain type dropdown*/}
            <DropdownButton id="dropdown-item-button" title="Sort By Body Pain">
                <Dropdown.Item id="2" onClick={e => {handlePainSort(e)}} as="button">Shoulder</Dropdown.Item>
                <Dropdown.Item id="3" onClick={e => {handlePainSort(e)}} as="button">Back</Dropdown.Item>
                <Dropdown.Item id="1" onClick={e => {handlePainSort(e)}} as="button">Hip</Dropdown.Item>
                <Dropdown.Item id="4" onClick={e => {handlePainSort(e)}} as="button">Leg</Dropdown.Item>
                <Dropdown.Item id="5" onClick={e => {handlePainSort(e)}} as="button">Foot & Ankle</Dropdown.Item>
                <Dropdown.Item id="0" onClick={e => {handlePainSort(e)}} as="button">Everything Hurts</Dropdown.Item>
            </DropdownButton>

            {/*rendering component*/}
            <h2>Videos</h2>

            <div className="video--list">
                {filteredVideos?.map(video => {
                    return <VideoCard key={video.id} video={video} />
                })}
            </div>
        </>
    )


}