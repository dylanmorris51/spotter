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

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <WorkoutProvider>
                <ExerciseTypeProvider>
                    <PainTypeProvider>
                        <VideoProvider>
                            <Route exact path="/videos">
                                <VideoList />
                            </Route>

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


                        </VideoProvider>
                    </PainTypeProvider>
                </ExerciseTypeProvider>
            </WorkoutProvider>
        </>
    )
}