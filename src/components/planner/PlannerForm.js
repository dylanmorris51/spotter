import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PlannerContext } from "./PlannerProvider"
import Button from "react-bootstrap/Button"


export const PlannerForm = () => {

    // params, history, userId
    const { plannerId } = useParams()
    const history = useHistory()
    const currentUserId = +sessionStorage.getItem("app_user_id") 

    
    
    // context
    const{ getPlanners, addPlanner, getPlannerById, updatePlanner, deletePlanner } = useContext(PlannerContext)

    // state
    const [planner, setPlanner] = useState({
        day: "",
        workoutId: 0
    })

    //enable save
    const [isLoading, setIsloading] = useState(true)

    //check for edit or add
    useEffect(() => {
        getPlanners()
            .then(() => {
                if (plannerId) {
                    getPlannerById(plannerId)
                        .then(res => {
                            setPlanner(res)
                            setIsLoading(false)
                        })
                } else {setIsLoading(false)}
            })
    }, [])

    //input handler
    const handleControlledInputChange = (event) => {

        const newPlanner = {...planner}

        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = +selectedVal
        }

        newPlanner[event.target.id] = selectedVal

        setPlanner(newPlanner)
    }



}