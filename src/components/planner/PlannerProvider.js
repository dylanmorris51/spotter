import React, { useState, createContext } from "react"

//context
export const PlannerContext = createContext()

//provider
export const PlannerProvider = (props) => {

    //state
    const [planners, setPlanners] = useState([])

    //fetch
    const getPlanners = () => {
        return fetch("https://spotter-nss-api.herokuapp.com/planners?_expand=workout&_expand=day")
            .then(_ => _.json())
            .then(setPlanners)
    }

    //add
    const addPlanner = plannerObj => {
        return fetch("https://spotter-nss-api.herokuapp.com/planners", {
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
        return fetch(`https://spotter-nss-api.herokuapp.com/planners/${id}`)
            .then(res => res.json())
    }

    //get by userId
    const getPlannersByUserId = (userId) => {
        return fetch(`https://spotter-nss-api.herokuapp.com/planners?userId=${userId}`)
        .then(res => res.json())
        .then(setPlanners)
    }

    //delete
    const deletePlanner = plannerId => {
        return fetch (`https://spotter-nss-api.herokuapp.com/planners/${plannerId}`, {
            method: "DELETE"
        })
        .then(getPlanners)
    }

    // update
    const updatePlanner = planner => {
        return fetch(`https://spotter-nss-api.herokuapp.com/planners/${planner.id}`, {
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