import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { PlannerContext } from "./PlannerProvider"
import Button from "react-bootstrap/Button"
import { PlannerCard } from "./PlannerCard"
import { WorkoutContext } from "../workouts/WorkoutProvider"

export const PlannerList = () => {

    const history = useHistory()
    const currentUserId = sessionStorage.getItem("app_user_id")

    const { planners, getPlanners } = useContext(PlannerContext)
    const { workouts, getWorkoutsByUserId} = useContext(WorkoutContext)

    const [filteredPlanners, setFilteredPlanners] = useState([])
    
    useEffect(() => {
        getPlanners()
        .then(getWorkoutsByUserId(currentUserId))
        
    }, [])

    useEffect(() => {

        console.log("workouts on render", workouts)
        console.log("planners on render", planners)
        const matchingPlanners = workouts.map(workout => {
            return planners.find(planner => {
                return planner.workoutId === workout.id
            })
        }) 
        
        console.log('matchingPlanners: ', matchingPlanners);
        setFilteredPlanners(matchingPlanners)
    }, [workouts, planners])

    //TODO: Create a card component to render the objects in the table for this user
    //TODO: Add a form so users can add workouts to a specific day
    return (
        <>
            <Button onClick={() => history.push(`/planner/create`)}>
                Plan Your Workouts
            </Button>
            <Button onClick={() => {
                console.log("filtered planners", filteredPlanners)
            }}>
                Check filteredPlanners
            </Button>

            <div className="planners--list">
                {filteredPlanners.length === 0 ? "Plan your workouts!" : filteredPlanners.map(planner => {
                    return <PlannerCard key={planner.id} planner={planner}/>
                })}
            </div>





        </>
    )
}