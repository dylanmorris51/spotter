import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { PlannerContext } from "./PlannerProvider"
import Button from "react-bootstrap/Button"
import { PlannerCard } from "./PlannerCard"
import { WorkoutContext } from "../workouts/WorkoutProvider"
import { DayContext } from "../days/DayProvider"

export const PlannerList = () => {

    // history & userID
    const history = useHistory()
    const currentUserId = sessionStorage.getItem("app_user_id")

    // context for planners & workouts & days
    const { planners, getPlanners } = useContext(PlannerContext)
    const { workouts, getWorkoutsByUserId} = useContext(WorkoutContext)
    const { days, getDays} = useContext(DayContext)

    // current user planners state variable
    const [filteredPlanners, setFilteredPlanners] = useState([])

    //current day state variable
    const [currentDay, setCurrentDay] = useState(8)

    //day name state variable
    const [currentDayName, setCurrentDayName] = useState("")

    //scheduled workout state variable
    const [scheduledWorkouts, setScheduledWorkouts] = useState()
    
    // fetch data on page load
    useEffect(() => {
        getPlanners()
            .then(getWorkoutsByUserId(currentUserId))
        
    }, [])

    // filter planners => set state for current user
    useEffect(() => {
        const matchingPlanners = [] 
        
        workouts.map(workout => {
            
            planners.filter(planner => {
                if (planner.workoutId === workout.id) {
                    matchingPlanners.push(planner)
                }
            })
        }) 

        setFilteredPlanners(matchingPlanners)
    }, [workouts, planners])

    //get current day on render
    useEffect(() => {
        let today = new Date().getDay()
        today++
        setCurrentDay(today)
    }, [])

    //get days on render
    useEffect(() => {
        getDays()
    }, [])

    //find matching day from database
    useEffect(() => {
        const matchingDay = days.find(day => day?.id === currentDay)
        setCurrentDayName(matchingDay)
    }, [currentDay])

    useEffect(() => {
        console.log("current day name", currentDayName)
    }, [currentDayName])
    useEffect(() => {
        console.log("current day", currentDay)
    }, [currentDay])

    // Find workouts for today from user's schedule
    useEffect(() => {
        
        const dailyWorkout = filteredPlanners.filter(item => item.day?.id === currentDay)
        
        setScheduledWorkouts(dailyWorkout)

    }, [filteredPlanners])


    return (
        <>
            <Button onClick={() => history.push(`/planner/create`)}>
                Plan New Workout
            </Button>

            
            
            
            
            {/* <div className="planners--list">
                {filteredPlanners.length === 0 ? "Plan your workouts!" : filteredPlanners.map(planner => {
                    return <PlannerCard key={planner.id} planner={planner} />
                })}
            </div> */}

            <div className="planners--today">
                <h4>{`Workouts For Today`}</h4>
            </div>
            <div className="planners--list">
                {scheduledWorkouts?.length === 0 ? "No workouts scheduled today" : scheduledWorkouts?.map(item => {
                    return <PlannerCard key={item.id} planner={item} />
                })}
            </div>

        </>
    )
}