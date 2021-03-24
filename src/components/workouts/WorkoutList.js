import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { WorkoutContext } from "./WorkoutProvider"
import { WorkoutCard } from "./WorkoutCard"
import  Button  from "react-bootstrap/Button"

export const WorkoutList = () => {

    const history = useHistory()

    //workout context
    const { workouts, getWorkoutsByUserId } = useContext(WorkoutContext)

    
    //userId
    const userId = sessionStorage.getItem("app_user_id")

    //render page-load
    useEffect(() => {
        getWorkoutsByUserId(userId)
    }, [])


    return (
        <>
            <Button onClick={() => history.push(`/workouts/create`)}>
                Create New Workout
            </Button>


            {/* check if user has created workouts => prompt user to create workouts */}
            <div className="workouts--list">
                {workouts.length === 0 ? "create a new workout!" : workouts.map(workout => {
                    return <WorkoutCard key={workout.id} workout={workout}/>
                })}
            </div>





        </>
    )
}