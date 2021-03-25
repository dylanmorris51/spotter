import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "../videos/VideoProvider"
import { useParams, useHistory } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"
import { WorkoutVideoContext } from "../workoutVideos/WorkoutVideoProvider"
import { WorkoutVideoCard } from "../workoutVideos/WorkoutVideoCard"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"


export const WorkoutDetail = () => {

    //currentUserId, params, & history
    const currentUserId = +sessionStorage.getItem("app_user_id")
    const { workoutId } = useParams()
    const history = useHistory()
    
    //workout context
    const { getWorkoutById } = useContext(WorkoutContext)
    
    //workoutVideo context
    const { workoutVideos, getWorkoutVideos } = useContext(WorkoutVideoContext)
    
    //workout state
    const [ workout, setWorkout ] = useState({
        id: 0,
        name: "",
        userId: 0
    })
    
    //filtered video state
    const [ filteredVideos, setFilteredVideos ] = useState([])
    
    
    //fetch workout data on page load
    useEffect(() => {
        getWorkoutById(workoutId)
        .then(res => {
            setWorkout(res)
        })
            .then(getWorkoutVideos)
    }, [])
    
    
    //filter videos
    useEffect(() => {
        const matchingVideos = workoutVideos.filter(video => video.workoutId === workout.id)
        setFilteredVideos(matchingVideos)
    }, [workoutVideos])

    //modal state variable
    const [show, setShow] = useState(false)

    useEffect(() => {
        filteredVideos.length >= 1 ? setShow(false) : setShow(true)
    }, [filteredVideos])

    // handle close for modal
    const handleClose = () => {
        
        setShow(false)
    }

    
    return (
        <>
            <h2>{workout.name}</h2>

            {show === true ? <div className="add--videos">
                <p>It looks like you haven't added any videos yet. Click Browse Videos to select videos to add to your workout! </p>
                <Button onClick={() => {
                        setShow(false)
                        history.push(`/videos`)}
                        }> Browse Videos
                    </Button>
            </div> : ""}
            
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Videos!</Modal.Title>
                </Modal.Header>
                <Modal.Body>It looks like you haven't added any videos yet. Click Browse Videos to select videos to add to your workout. </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        setShow(false)
                        history.push(`/videos`)}
                        }> Browse Videos
                    </Button>
                </Modal.Footer>
            </Modal> */}

            <div className="workoutVideo--list">
                {filteredVideos.map(video => {
                    
                    return <WorkoutVideoCard key={video.id} workoutVideo={video}/>
                    
                })}
            </div>
        </>

    )
}