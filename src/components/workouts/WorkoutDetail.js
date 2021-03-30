import React, { useContext, useEffect, useState } from "react"
import { VideoContext } from "../videos/VideoProvider"
import { useParams, useHistory } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"
import { WorkoutVideoContext } from "../workoutVideos/WorkoutVideoProvider"
import { WorkoutVideoCard } from "../workoutVideos/WorkoutVideoCard"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import "./WorkoutDetail.css"



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

    //prompt user to add videos state variable
    const [show, setShow] = useState(false)

    useEffect(() => {
        filteredVideos.length >= 1 ? setShow(false) : setShow(true)
    }, [filteredVideos])


    
    return (
        <>
            
            
            <div className="outer--container">
                <div className="container">
                    <div className="title--container">
                        <h2 className="video--title">{workout.name}</h2>

                    </div>

                    <div className="video--container">
            {show === true ? 
                <div className="add--videos">
                    <p>Add some videos to this workout! </p>
                    <Button onClick={() => {
                        setShow(false)
                        history.push(`/videos`)}
                        }> Browse Videos
                    </Button>
                </div> 
                :
                <div className="workoutVideo">
                    <div className="video--list">
                        {filteredVideos.map(video => {
                        
                        return <WorkoutVideoCard key={video.id} workoutVideo={video}/>
                        
                        })}
                    </div>
                    
                    <div className="btn-container">
                        <Button onClick={() => {
                            setShow(false)
                            history.push(`/videos`)}
                            }> Add More Videos
                        </Button>
                    </div>
                </div>}
                    </div>
                
                
                </div>

            </div>
            
            
            
            
            
            
            

            

            
        </>

    )
}