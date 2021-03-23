import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PlannerContext } from "./PlannerProvider"
import Button from "react-bootstrap/Button"


//! userId is absent from planner table, so expand by workoutId, get workouts by the Ids, then render those
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
    const [isLoading, setIsLoading] = useState(true)

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

    // save handler
    const handleSavePlanner = (event) => {

        setIsLoading(true)

        if(plannerId) {
            updatePlanner({
                id: planner.id,
                day: planner.day,
                workoutId: planner.workoutId
            }).then(() => history.push(`/planner`))
        } else {
            addPlanner({
                day: planner.day,
                workoutId: planner.workoutId
            }).then(() => history.push("/planner"))
        }
    }

        // delete handler
        const handleDelete = () => {
            deletePlanner(plannerId)
                .then(() => {
                    history.push("/planner")
                })
        }
    

    //TODO: make the inputs dropdowns for Day and Workout rather than input fields
    return (
        <>
            <form className="plannerForm">
            <h2 className="plannerFormTitle">{plannerId ? "Edit Planner" : "Add Planner"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Day of the week?</label>
                    <input type="name" id="day" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Day of Week?" value={planner.day} />
                </div>
            </fieldset>
            <fieldset>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSavePlanner()
                }}>
                {plannerId ? "Save Planner" : "Create New Planner"}
            </button>
            {/* update this stuff for planner */}
            {/* {+currentUserId === planner.workout.userId? <Button onClick={handleDelete}>Delete Planner</Button> : ""} */}
            <button className="btn btn-primary" onClick={() => history.push(`/planner`)}>
                Cancel
            </button>
        </form>

        </>
    )

}