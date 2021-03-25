import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PlannerContext } from "./PlannerProvider"
import { WorkoutContext } from "../workouts/WorkoutProvider"
import Button from "react-bootstrap/Button"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"

//! Captured input values and set state variable, now check to see the add, save, delete, and edits work and the cards render
export const PlannerForm = () => {

    // params, history, userId
    const { plannerId } = useParams()
    const history = useHistory()
    const currentUserId = +sessionStorage.getItem("app_user_id") 

    
    
    // planner context
    const{ planners, getPlanners, addPlanner, getPlannerById, updatePlanner, deletePlanner } = useContext(PlannerContext)
    // workout context 
    const { workouts, getWorkoutsByUserId, getWorkoutById } = useContext(WorkoutContext)

    // workoutId state from selectedWorkout
    const [selectedWorkout, setSelectedWorkout] = useState({
        selectedWorkout: 0
    })

    //workout name state variable
    const [workoutName, setWorkoutName] = useState("")

    // useEffect(() => {
    //     getWorkoutById(+selectedWorkout)
    //         .then(setWorkoutName())
    // }, [selectedWorkout])

    //day state from selectedDay
    const [selectedDay, setSelectedDay] = useState({
        selectedDay: "",
    })


    // planner state
    const [planner, setPlanner] = useState({
        day: "",
        workoutId: 0
    })

    //

    //enable save
    const [isLoading, setIsLoading] = useState(true)

    //check for edit or add; fetch data
    useEffect(() => {
        getWorkoutsByUserId(currentUserId)
            .then(getPlanners)
            .then(() => {
                if (plannerId) {
                    getPlannerById(plannerId)
                        .then(res => {
                            setPlanner(res)
                            setIsLoading(false)
                        })
                        .then(() => {
                            const currentWorkout = workouts.find(workout => {
                                return workout.id === planner.workoutId
                            })
                            console.log('currentWorkout: ', currentWorkout);
                            setWorkoutName(currentWorkout.name)
                        })
                } else {setIsLoading(false)}
            })
    }, [])

    

    // days of week for dropdown
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    // handle dropdown day select
    const handleDaySelect = (e) => { 
        setSelectedDay(e)
    }
    
    
    // handle dropdown workout select
    const handleWorkoutSelect = (e) => { 
        let parseIntify = +e.split(",")[1]
        console.log("e", e)

        setWorkoutName(e.split(",")[0])
        setSelectedWorkout(parseIntify)
    }
    
    // set captured inputs
    useEffect(() => {
        const newPlanner = {
            day: selectedDay,
            workoutId: selectedWorkout
        }

        setPlanner(newPlanner)

        
    }, [selectedDay, selectedWorkout])



    // save handler
    const handleSavePlanner = (event) => {

        setIsLoading(true)

        if(plannerId) {
            updatePlanner({
                id: plannerId,
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
    


    return (
        <>
            <form className="plannerForm">
            <h2 className="plannerFormTitle">{plannerId ? "Edit Planner" : "Add Planner"}</h2>       
            <fieldset>
            <DropdownButton
                    alignRight
                    // title="Choose a Workout..."
                    title={workoutName ? workoutName : "Choose A Workout!"}
                    id="dropdown-menu-workout"
                    onSelect={handleWorkoutSelect}
                    >
                        {/* <Dropdown.Item eventKey="0">Select a workout...</Dropdown.Item> */}
                    {
                        workouts.map(workout => {
                            
                            return <Dropdown.Item eventKey={[workout.name, workout.id]}>{workout.name}</Dropdown.Item>

                        })
                    }
                </DropdownButton>
            </fieldset>
            <fieldset>
            <DropdownButton
                    alignRight
                    title="Choose a Day..."
                    id="dropdown-menu-day"
                    onSelect={handleDaySelect}
                    >
                        {/* <Dropdown.Item eventKey="0">Select a workout...</Dropdown.Item> */}
                    {
                        daysOfWeek.map(day => {
                            
                            return <Dropdown.Item eventKey={day}>{day}</Dropdown.Item>
                            
                        })
                    }
                </DropdownButton>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    handleSavePlanner()
                }}>
                {plannerId ? "Update Planner" : "Save New Planner"}
            </button>
            <Button onClick={handleDelete}>Delete Planner</Button>
            <button className="btn btn-primary" onClick={() => history.push(`/planner`)}>
                Cancel
            </button>
        </form>

        </>
    )

}