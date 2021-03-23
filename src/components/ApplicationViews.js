import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { VideoList } from "./videos/VideoList"
import { VideoProvider } from "./videos/VideoProvider"
import { VideoDetail } from "./videos/VideoDetail"
import { VideoSortPain } from "./videos/VideoSortPain"
import { VideoSortExercise } from "./videos/VideoSortExercise"
import { PainTypeProvider } from "./pains/PainProvider"
import { ExerciseTypeProvider } from "./exerciseTypes/ExerciseTypeProvider"
import { WorkoutProvider } from "./workouts/WorkoutProvider"
import { WorkoutList } from "./workouts/WorkoutList"
import { WorkoutForm } from "./workouts/WorkoutForm"
import { WorkoutVideoProvider } from "./workoutVideos/WorkoutVideoProvider"
import { WorkoutDetail } from "./workouts/WorkoutDetail"
import { PlannerProvider } from "./planner/PlannerProvider"
import { PlannerList } from "./planner/PlannerList"
import { PlannerForm } from "./planner/PlannerForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <PlannerProvider>
                <WorkoutVideoProvider>
                    <WorkoutProvider>
                        <ExerciseTypeProvider>
                            <PainTypeProvider>
                                <VideoProvider>
                                    {/* video list */}
                                    <Route exact path="/videos">
                                        <VideoList />
                                    </Route>

                                    {/* video detail */}
                                    <Route path="/videos/detail/:videoId(\d+)">
                                        <VideoDetail />
                                    </Route>

                                    <Route path="/videos/painTypes">
                                        <VideoSortPain />
                                    </Route>

                                    <Route path="/videos/exerciseTypes">
                                        <VideoSortExercise />
                                    </Route>

                                    <Route exact path="/workouts">
                                        <WorkoutList />
                                    </Route>

                                    <Route path="/workouts/create">
                                        <WorkoutForm />
                                    </Route>

                                    <Route path="/workouts/edit/:workoutId(\d+)">
                                        <WorkoutForm />
                                    </Route>

                                    <Route path="/workouts/detail/:workoutId(\d+)">
                                        <WorkoutDetail />
                                    </Route>

                                    <Route exact path="/planner">
                                        <PlannerList />
                                    </Route>

                                    <Route path ="/planner/create">
                                        <PlannerForm />
                                    </Route>
                                    
                                    <Route path="/planner/edit/:plannerId(\d+)">
                                        <PlannerForm />
                                    </Route>



                                </VideoProvider>
                            </PainTypeProvider>
                        </ExerciseTypeProvider>
                    </WorkoutProvider>
                </WorkoutVideoProvider>
            </PlannerProvider>



        </>
    )
}