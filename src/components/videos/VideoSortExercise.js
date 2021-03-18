import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "./VideoProvider"
import { VideoCard } from "./VideoCard"
import { useHistory } from "react-router-dom"
import "./Video.css"
import { ExerciseTypeContext } from "../exerciseTypes/ExerciseTypeProvider"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"

export const VideoSortExercise = () => {

    const history = useHistory()

    //video context
    const { videos, getVideos } = useContext(VideoContext)
    //exercise context
    const { exerciseTypes, getExerciseTypes } = useContext(ExerciseTypeContext)

    
    //video state for filtering
    const [filteredVideos, setFilteredVideos] = useState([])

    
    
    //render page-load
    useEffect(() => {
        getExerciseTypes()
            .then(getVideos)
                .then(setFilteredVideos(videos))
    }, [])

    // sort by exercise types
    const handleExerciseSort = (e) => {
        
        if (+e.target.id !== 0) {

            let exerciseType = exerciseTypes.find(type => type.id === +e.target.id)
            let matchingVideosByExerciseType = videos.filter(videoObj => videoObj.exerciseType.id === exerciseType.id)

            setFilteredVideos(matchingVideosByExerciseType)
        } else {
            setFilteredVideos(videos)
        }
    }

    return (
        <>
            <DropdownButton id="dropdown-item-button" title="Exercise Types">
                <Dropdown.Item id="1" onClick={e => {handleExerciseSort(e)}} as="button">Stretching & Mobility</Dropdown.Item>
                <Dropdown.Item id="2" onClick={e => {handleExerciseSort(e)}} as="button">Core</Dropdown.Item>
                <Dropdown.Item id="3" onClick={e => {handleExerciseSort(e)}} as="button">Lower Body</Dropdown.Item>
                <Dropdown.Item id="4" onClick={e => {handleExerciseSort(e)}} as="button">Upper Body</Dropdown.Item>                
                <Dropdown.Item id="0" onClick={e => {handleExerciseSort(e)}} as="button">View All</Dropdown.Item>                
            </DropdownButton>

            {/* button return to all videos */}
            <Button onClick={() => {
                history.push(`/videos`)
            }}>
                Return To All Videos
            </Button>

            {/*rendering component*/}
            <div className="video--list">
                {filteredVideos?.map(video => {
                    return <VideoCard key={video.id} video={video} />
                })}
            </div>
            
        </>
    )


}