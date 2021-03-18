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
    const { videos, getVideos } = useContext(VideoContext)

    //pain context
    const { painTypes, getPainTypes } = useContext(PainTypeContext)

    //render page-load
    useEffect(() => {
        getPainTypes()
            .then(getVideos)
    }, [])

    //TODO: add search and sort






    return (
        <>
            <DropdownButton id="dropdown-item-button" title="Sort By Body Pain">
                <Dropdown.Item as="button">Foot & Ankle</Dropdown.Item>
                <Dropdown.Item as="button">Leg</Dropdown.Item>
                <Dropdown.Item as="button">Hip</Dropdown.Item>
                <Dropdown.Item as="button">Back</Dropdown.Item>
                <Dropdown.Item as="button">Shoulder</Dropdown.Item>
            </DropdownButton>

            <h2>Videos</h2>

            <div className="video--list">
                {videos?.map(video => {
                    return <VideoCard key={video.id} video={video} />
                })}
            </div>
        </>
    )


}