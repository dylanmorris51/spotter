//! Display all workouts for this user
//! If none, prompt the user to create a workout
//! If some, display as clickable boxes which navigate to that workout on a details page

import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"
import { WorkoutCard } from "./WorkoutCard"

export const WorkoutList = () => {

    const history = useHistory()

    //workout context
    const { workouts, getWorkouts } = useContext(WorkoutContext)

    
    //render page-load
    useEffect(() => {
        getWorkouts()
    }, [])


    return (
        <>
            <h2>Workouts</h2>

            <div className="workouts--list">
                {workouts.length === 0 ? "create a new workout!" : workouts.map(workout => {
                    return <WorkoutCard key={workout.id} workout={workout}/>
                })}
            </div>





        </>
    )
}