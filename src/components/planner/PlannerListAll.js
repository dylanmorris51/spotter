import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router"
import { PlannerContext } from "./PlannerProvider"
import Button from "react-bootstrap/Button"
import { PlannerCard } from "./PlannerCard"
import { WorkoutContext } from "../workouts/WorkoutProvider"
import "../workouts/Workout.css"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"

export const PlannerListAll = () => {

    // history & userID
    const history = useHistory()
    const currentUserId = sessionStorage.getItem("app_user_id")

    // context for planners & workouts
    const { planners, getPlanners } = useContext(PlannerContext)
    const { workouts, getWorkoutsByUserId } = useContext(WorkoutContext)

    // current user planners state variable
    const [filteredPlanners, setFilteredPlanners] = useState([])

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

        matchingPlanners.sort((a, b) => a.dayId - b.dayId)

        setFilteredPlanners(matchingPlanners)
    }, [workouts, planners])


    return (
        <>

            <div className="outer--container">
                <div className="container">

                    <div className="video--title">
                        <h2>Scheduled Workouts</h2>
                    </div>


                    <div className="button--container">

                        <Button onClick={() => history.push(`/planner/create`)}>
                            Plan New Workout
                        </Button>

                        <Button href={`/planner/`}>
                            View Today's Workouts
                        </Button>

                    </div>


                    <div className="workouts--list">
                        {filteredPlanners.length === 0 ?
                            <>
                                <div className="spacer">

                                </div>
                                <Jumbotron className="rest" fluid>
                                    <Container>
                                        <h3>Add to the Planner!</h3>
                                        <p>
                                            Looks like you haven't added anyworkouts yet. Click the button to get started.
                                        </p>
                                    </Container>
                                </Jumbotron>
                                <div className="spacer">

                                </div>
                            </>

                            :

                            filteredPlanners.map(planner => {
                                return <PlannerCard key={planner.id} planner={planner} />
                            })}
                    </div>


                </div>

            </div>





        </>
    )
}