import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { PlannerContext } from "./PlannerProvider"
import Button from "react-bootstrap/Button"
import { PlannerCard } from "./PlannerCard"

export const PlannerList = () => {

    const history = useHistory()
    const currentUserId = sessionStorage.getItem("app_user_id")

    const { planners, getPlannersByUserId } = useContext(PlannerContext)
    
    useEffect(() => {
        getPlannersByUserId(currentUserId)
    }, [])

    //TODO: Create a card component to render the objects in the table for this user
    //TODO: Add a form so users can add workouts to a specific day
    return (
        <>
            <Button onClick={() => history.push(`/planner/create`)}>
                Plan Your Workouts
            </Button>

            <div className="planners--list">
                {planners.length === 0 ? "Plan your workouts!" : planners.map(planner => {
                    return <PlannerCard key={planner.id} planner={planner}/>
                })}
            </div>





        </>
    )
}