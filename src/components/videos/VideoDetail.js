import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "./VideoProvider"
import { useParams, useHistory } from "react-router-dom"
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import YoutubeEmbed from "./YoutubeEmbed"
import { WorkoutContext } from "../workouts/WorkoutProvider"
import { WorkoutVideoContext } from "../workoutVideos/WorkoutVideoProvider"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import Modal from "react-bootstrap/Modal"


export const VideoDetail = () => {

    //currentUserId, params, & history
    const currentUserId = +sessionStorage.getItem("app_user_id")
    const { videoId } = useParams()
    const history = useHistory()


    //video context & state
    const { getVideoById } = useContext(VideoContext)
    const [video, setVideo] = useState([])



    // workout context 
    const { workouts, getWorkoutsByUserId } = useContext(WorkoutContext)


    //workoutVideo context
    const { workoutVideos, getWorkoutVideos, addWorkoutVideo } = useContext(WorkoutVideoContext)


    // state variable receives value from dropdown select
    const [workoutId, setWorkoutId] = useState(0)

    // state variable to prevent duplicate data
    const [duplicate, setDuplicate] = useState(false)


    // fetch video by params => set state
    useEffect(() => {
        getVideoById(videoId)
            .then((response) => {
                setVideo(response)
            })
    }, [])


    // fetch workouts by current user
    useEffect(() => {
        getWorkoutsByUserId(currentUserId)
    }, [])

    //getWorkoutVideos to prevent duplicate data
    useEffect(() => {
        getWorkoutVideos()
    }, [])



    //dropdown select handler
    const handleSelect = (e) => {
        let parseIntify = +e

        setWorkoutId(parseIntify)
    }

    // Watch workoutId state variable for duplicate data => set duplicate state for rendering
    useEffect(() => {

        const workoutVideoObj = {
            workoutId: +workoutId,
            videoId: +videoId
        }

        let duplicateFound = false

        let duplicateContainer = []

        workoutVideos.forEach(obj => {
            if ((obj.workoutId === workoutVideoObj.workoutId) && (obj.videoId === workoutVideoObj.videoId)) {
                duplicateContainer.push(obj)
            }
        })

        if (duplicateContainer.length >= 1) {
            duplicateFound = true
            setDuplicate(duplicateFound)
            console.log('duplicateContainer: ', duplicateContainer);
        } else {
            setDuplicate(duplicateFound)
            console.log('duplicateContainer: ', duplicateContainer);
        }

    }, [workoutId])

    //console.log duplicate state change
    useEffect(() => {
        console.log("duplicate found:", duplicate)
    }, [duplicate])

    // add workoutVideoObj
    const handleAddVideo = (e) => {
        const workoutVideoObj = {
            workoutId: +workoutId,
            videoId: +videoId
        }

        addWorkoutVideo(workoutVideoObj).then(() => history.push(`/videos`))
    }


    const duplicateModal = () => {
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                        </Button>
                </Modal.Footer>
            </Modal>
        )

    }

    //modal state
    const [show, setShow] = useState(false)

    const handleClose = () => {
        setShow(false)
        setDuplicate(false)
        setWorkoutId(0)
    }


    return (
        <>
            <Modal show={duplicate} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                        </Button>
                </Modal.Footer>
            </Modal>
            <Jumbotron fluid>
                <Container>
                    <h4>{video.name}</h4>
                    <YoutubeEmbed embedId={video.embed} />

                    <Button onClick={() => {
                        history.goBack()
                    }}>
                        Back
                    </Button>
                    <DropdownButton
                        alignRight
                        title="Add to Workout..."
                        id="dropdown-menu-align-right"
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="0">Select a workout...</Dropdown.Item>
                        {
                            workouts.map(workout => {

                                return <Dropdown.Item eventKey={workout.id}>{workout.name}</Dropdown.Item>

                            })
                        }
                    </DropdownButton>
                    {workoutId !== 0 ? <Button onClick={handleAddVideo}>Save</Button> : <div className="empty"></div>}

                </Container>
            </Jumbotron>

        </>
    )
}