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
    const { videos, getVideos, setVideos } = useContext(VideoContext)
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
            </DropdownButton>


            {/*rendering component*/}
            <h2>Videos</h2>

            <div className="video--list">
                {filteredVideos?.map(video => {
                    return <VideoCard key={video.id} video={video} />
                })}
            </div>
            
            <Button onClick={() => {
                history.push(`/videos/painTypes`)
            }}>
                Sort By Body Pain
            </Button>
            <Button onClick={() => {
                history.push(`/videos`)
            }}>
                Return To All Videos
            </Button>
        </>
    )


}