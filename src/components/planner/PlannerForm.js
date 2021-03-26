import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { PlannerContext } from "./PlannerProvider"
import { WorkoutContext } from "../workouts/WorkoutProvider"
import Button from "react-bootstrap/Button"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import { DayContext } from "../days/DayProvider";

export const PlannerForm = () => {

    //disable save
    const [isLoading, setIsLoading] = useState(true)
    // params, history, userId
    const { plannerId } = useParams()
    const history = useHistory()
    const currentUserId = +sessionStorage.getItem("app_user_id") 

    //render context
    //day context
    const {days, getDays} = useContext(DayContext)
    // planner context
    const{ planners, getPlanners, addPlanner, getPlannerById, updatePlanner, deletePlanner } = useContext(PlannerContext)
    // workout context 
    const { workouts, getWorkoutsByUserId, getWorkoutById } = useContext(WorkoutContext)

    
    //dropdown states
    // workoutId state from dropdown selectedWorkout
    const [selectedWorkout, setSelectedWorkout] = useState({
        selectedWorkout: 0
    })
    //day state variable from dropdown
    const [selectedDay, setSelectedDay] = useState({
        selectedDay: 0,
    })


    //Allow dropdown title to change based on user selection via state
    //workout name state variable
    const [workoutName, setWorkoutName] = useState("")
    //day name state variable
    const [dayName, setDayName] = useState("")


    // planner state
    const [planner, setPlanner] = useState({
        dayId: 0,
        workoutId: 0
    })

    


    //!something still breaking here on page load for edit
    //check for edit or add; fetch data
    useEffect(() => {
        
        getWorkoutsByUserId(currentUserId)
            .then(getDays)
            .then(getPlanners)
            .then(() => {
                if (plannerId) {
                    getPlannerById(plannerId)
                        .then(res => {
                            setPlanner(res)
                            setIsLoading(false)
                        })
                        // .then(() => {
                            
                        //     const currentWorkout = workouts.find(workout => {
                        //         return workout.id === planner.workoutId
                        //     })
                            
                        //     const chosenDay = days.find(day => {
                        //         return day.id === planner.dayId
                        //     })
                            
                        //     console.log('chosenDay: ', chosenDay);
                        //     console.log('currentWorkout: ', currentWorkout);
                            
                        //     // setWorkoutName(currentWorkout.name)
                        //     // setDayName(chosenDay.name)
                        // })
                } else {setIsLoading(false)}
            })
    }, [])

    // get day/workout names for dropdowns if it's an edit form
    // useEffect(() => {
        
    //     getWorkoutsByUserId(currentUserId)
    //         .then(getDays)
    //             .then(() => {
    //                 const currentWorkout = workouts.find(workout => {
    //                     return workout.id === planner.workoutId
    //                 })
                    
    //                 const chosenDay = days.find(day => {
    //                     return day.id === planner.dayId
    //                 })
                    
    //                 console.log('chosenDay: ', chosenDay);
    //                 console.log('currentWorkout: ', currentWorkout);

    //                 console.log("work name", currentWorkout.name)
    //                 console.log("day name", chosenDay.name)
                    
    //                 setWorkoutName(currentWorkout.name)
    //                 setDayName(chosenDay.name)

    //             })
    // }, [planner])


    // handle dropdown day select
    const handleDaySelect = (e) => { 
        let parseIntify = +e.split(",")[1]

        console.log("day select id", parseIntify)
        setDayName(e.split(",")[0])
        setSelectedDay(parseIntify)
    }
    
    
    // handle dropdown workout select
    const handleWorkoutSelect = (e) => { 
        let parseIntify = +e.split(",")[1]

        setWorkoutName(e.split(",")[0])
        setSelectedWorkout(parseIntify)
    }
    
    // set captured inputs
    useEffect(() => {
        const newPlanner = {
            dayId: selectedDay,
            workoutId: selectedWorkout
        }

        setPlanner(newPlanner)

        
    }, [selectedDay, selectedWorkout])


    //!check planner
    useEffect(() => {
        console.log("planner", planner)
    }, [planner])

    // save handler
    const handleSavePlanner = (event) => {

        setIsLoading(true)

        if(plannerId) {
            updatePlanner({
                id: plannerId,
                dayId: planner.dayId,
                workoutId: planner.workoutId
            }).then(() => history.push(`/planner`))
        } else {
            addPlanner({
                dayId: planner.dayId,
                workoutId: planner.workoutId
            }).then(() => history.push(`/planner`))
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
                    title={workoutName ? workoutName : "Choose A Workout"}
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
                    title={dayName ? dayName : "Choose A Day"}
                    id="dropdown-menu-day"
                    onSelect={handleDaySelect}
                    >
                        {/* <Dropdown.Item eventKey="0">Select a workout...</Dropdown.Item> */}
                    {
                        days.map(day => {
                            
                            return <Dropdown.Item eventKey={[day.name, day.id]}>{day.name}</Dropdown.Item>
                            
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