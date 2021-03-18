//! Display all workouts for this user
//! If none, prompt the user to create a workout
//! If some, display as clickable boxes which navigate to that workout on a details page

import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"

export const WorkoutList = () => {

    const history = useHistory()

    //workout context
    const { workouts, getWorkouts } = useContext(WorkoutContext)

    
    //render page-load
    useEffect(() => {
        getWorkouts
    }, [])


    return (
        <>
            <h2>Workouts</h2>

            <div className="workouts--list">
                {workouts.length = 0 ? alert("create a new workout!") : workouts.map(workout => {
                    return //workout card component
                })}
            </div>





        </>
    )
}