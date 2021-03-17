import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "./VideoProvider"
import { useParams, useHistory } from "react-router-dom"
import Jumbotron from 'react-bootstrap/Jumbotron'
import YoutubeEmbed from "./YoutubeEmbed"

// Detail page
export const VideoDetail = () => {

    const { getVideoById } = useContext(VideoContext)

    const [video, setVideo] = useState([])

    const { videoId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getVideoById(videoId)
            .then((response) => {
                setVideo(response)
            })
    }, [])

    //! Make the exit button navigate back to videos page for now, and then to user workout page
    return (
        <>
            <Jumbotron fluid>
                <Container>
                    <h4>{video.name}</h4>
                    <YoutubeEmbed embedId={video.embed} />
                    <Button onClick={() => {
                        history.push(`/videos`)
                    }}>
                        Exit
                    </Button>
                </Container>
            </Jumbotron>
        </>
    )
}