import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { PlannerContext } from "./PlannerProvider"

export const PlannerList = () => {

    const history = useHistory()
    const currentUserId = sessionStorage.getItem("app_user_id")

    const { planners, getPlannersByUserId } = useContext(PlannerContext)
    
    useEffect(() => {
        getPlannersByUserId(currentUserId)
    }, [])

    return (
        <>
            <Button onClick={() => history.push(`/planners/create`)}>
                Create New Planner
            </Button>

            <div className="planners--list">
                {planners.length === 0 ? "create a new workout!" : planners.map(planner => {
                    return <PlannerCard key={planner.id} planner={planner}/>
                })}
            </div>





        </>
    )
}