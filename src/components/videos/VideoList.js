import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "./VideoProvider"
import { useHistory } from "react-router-dom"
import { VideoCard } from "./VideoCard"
import "./Video.css"
import "./YoutubeEmbed.css"
import { PainTypeContext } from "../pains/PainProvider"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from "react-bootstrap/Dropdown"

export const VideoList = () => {

    const history = useHistory()

    //video context
    const { videos, getVideos, setVideos } = useContext(VideoContext)

    //pain context
    const { painTypes, getPainTypes } = useContext(PainTypeContext)

    //filtered video state
    const [filteredVideos, setFilteredVideos] = useState([])
    
    //render page-load
    useEffect(() => {
        getPainTypes()
        .then(getVideos)
            .then(setFilteredVideos(videos))
    }, [])
    
    //TODO: add search and sort
    
    // sort pains
    const handlePainSort = (e) => {

        let painType = painTypes.find(type => type.id === +e.target.id)
        console.log('painType: ', painType);
        
        let matchingVideosByPainType = videos.filter(videoObj => videoObj.painType.id === painType.id)
        console.log('matchingVideosByPainType: ', matchingVideosByPainType);

        setVideos(matchingVideosByPainType)
    }




    return (
        <>
            <DropdownButton id="dropdown-item-button" title="Sort By Body Pain">
                <Dropdown.Item id="2" onClick={e => {handlePainSort(e)}} as="button">Shoulder</Dropdown.Item>
                <Dropdown.Item id="3" onClick={e => {handlePainSort(e)}} as="button">Back</Dropdown.Item>
                <Dropdown.Item id="1" onClick={e => {handlePainSort(e)}} as="button">Hip</Dropdown.Item>
                <Dropdown.Item id="4" onClick={e => {handlePainSort(e)}} as="button">Leg</Dropdown.Item>
                <Dropdown.Item id="5" onClick={e => {handlePainSort(e)}} as="button">Foot & Ankle</Dropdown.Item>
            </DropdownButton>

            <h2>Videos</h2>

            <div className="video--list">
                {filteredVideos?.map(video => {
                    return <VideoCard key={video.id} video={video} />
                })}
            </div>
        </>
    )


}