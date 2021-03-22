import React, { useState, createContext } from "react"

//context
export const PlannerContext = createContext()

//provider
export const PlannerProvider = (props) => {

    //state
    const [planners, setPlanners] = useState([])

    //fetch
    const getPlanners = () => {
        return fetch("http://localhost:8088/planners")
            .then(_ => _.json())
            .then(setPlanners)
    }

    //add
    const addPlanner = plannerObj => {
        return fetch("http://localhost:8088/planners", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plannerObj)
        })
        .then(getPlanners)
    }

    //get by ID
    const getPlannerById = (id) => {
        return fetch(`http://localhost:8088/planners/${id}`)
            .then(res => res.json())
    }

    //get by userId
    const getPlannersByUserId = (userId) => {
        return fetch(`http://localhost:8088/planners?userId=${userId}`)
        .then(res => res.json())
        .then(setPlanners)
    }

    //delete
    const deletePlanner = plannerId => {
        return fetch (`http://localhost:8088/planners/${plannerId}`, {
            method: "DELETE"
        })
        .then(getPlanners)
    }

    // update
    const updatePlanner = planner => {
        return fetch(`http://localhost:8088/workouts/${planner.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(planner)
        })
        .then(getPlanners)
    }

    return (
        <PlannerContext.Provider value={{
            planners, getPlanners, addPlanner, getPlannerById, getPlannersByUserId, deletePlanner, updatePlanner
        }}>
            {props.children}
        </PlannerContext.Provider>
    )
}