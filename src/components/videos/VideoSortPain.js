import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "./VideoProvider"
import { VideoCard } from "./VideoCard"
import { useHistory } from "react-router-dom"
import "./Video.css"
import { PainTypeContext } from "../pains/PainProvider"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"


export const VideoSortPain = () => {

    const history = useHistory()

    //video context
    const { videos, getVideos } = useContext(VideoContext)
    //pain context
    const { painTypes, getPainTypes } = useContext(PainTypeContext)


    //video state for filtering
    const [filteredVideos, setFilteredVideos] = useState([])



    //render page-load
    useEffect(() => {
        getPainTypes()
            .then(getVideos)
            .then(setFilteredVideos(videos))
    }, [])

    // sort by pain types
    const handlePainSort = (e) => {

        if (+e.target.id !== 0) {

            let painType = painTypes.find(type => type.id === +e.target.id)

            let matchingVideosByPainType = videos.filter(videoObj => videoObj.painType.id === painType.id)

            setFilteredVideos(matchingVideosByPainType)
        } else {
            setFilteredVideos(videos)
        }
    }

    //TODO: add dropdown option for user to create a new workout and add current video to it
    return (
        <>
            <div className="outer--container">
                <div className="container">

                    <div className="title--container">
                        <h2 className="video--title">Videos</h2>
                    </div>

                    <div className="sorting">
                        <DropdownButton id="dropdown-item-button" title="Sort By Body Pain">
                            <Dropdown.Item id="2" onClick={e => { handlePainSort(e) }} as="button">Shoulder</Dropdown.Item>
                            <Dropdown.Item id="3" onClick={e => { handlePainSort(e) }} as="button">Back</Dropdown.Item>
                            <Dropdown.Item id="1" onClick={e => { handlePainSort(e) }} as="button">Hip</Dropdown.Item>
                            <Dropdown.Item id="4" onClick={e => { handlePainSort(e) }} as="button">Leg</Dropdown.Item>
                            <Dropdown.Item id="5" onClick={e => { handlePainSort(e) }} as="button">Foot & Ankle</Dropdown.Item>
                            <Dropdown.Item id="0" onClick={e => { handlePainSort(e) }} as="button">Everything Hurts</Dropdown.Item>
                        </DropdownButton>

                        {/* button return to all videos */}
                        <Button onClick={() => {
                            history.push(`/videos`)
                        }}>
                            Return To All Videos
                        </Button>
                    </div>

                    {/*render videos*/}
                    <div className="video--list">
                        {filteredVideos?.map(video => {
                            return <VideoCard key={video.id} video={video} />
                        })}
                    </div>
                </div>

            </div>







        </>
    )


}