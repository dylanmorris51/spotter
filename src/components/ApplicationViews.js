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
import { DayProvider } from "./days/DayProvider"

export const ApplicationViews = () => {
    return (
        <>

            <DayProvider>
                <PlannerProvider>
                    <WorkoutVideoProvider>
                        <WorkoutProvider>
                            <ExerciseTypeProvider>
                                <PainTypeProvider>
                                    <VideoProvider>
                                        
            <Route exact path="/">
                <Home />
            </Route>
                                        {/* video list */}
                                        <Route exact path="/videos">
                                            <VideoList />
                                        </Route>
                                        
                                        {/* view one single video, embed from youtube, add to workout */}
                                        <Route path="/videos/detail/:videoId(\d+)">
                                            <VideoDetail />
                                        </Route>

                                        {/* sort videos by pain type */}
                                        <Route path="/videos/painTypes">
                                            <VideoSortPain />
                                        </Route>

                                        {/* sort videos by exercise type */}
                                        <Route path="/videos/exerciseTypes">
                                            <VideoSortExercise />
                                        </Route>
                                        
                                        
                                        
                                        
                                        
                                        {/* view all user created workouts */}
                                        <Route exact path="/workouts">
                                            <WorkoutList />
                                        </Route>

                                        {/* create a new workout */}
                                        <Route path="/workouts/create">
                                            <WorkoutForm />
                                        </Route>

                                        {/* edit an existing workout */}
                                        <Route path="/workouts/edit/:workoutId(\d+)">
                                            <WorkoutForm />
                                        </Route>

                                        {/* view videos in a specific workout */}
                                        <Route path="/workouts/detail/:workoutId(\d+)">
                                            <WorkoutDetail />
                                        </Route>

                                        
                                        
                                        
                                                                            
                                        {/* view all planned workouts */}
                                        <Route exact path="/planner">
                                            <PlannerList />
                                        </Route>

                                        {/* add workouts to the planner */}
                                        <Route path ="/planner/create">
                                            <PlannerForm />
                                        </Route>
                                        
                                        {/* edit existing plans */}
                                        <Route path="/planner/edit/:plannerId(\d+)">
                                            <PlannerForm />
                                        </Route>



                                    </VideoProvider>
                                </PainTypeProvider>
                            </ExerciseTypeProvider>
                        </WorkoutProvider>
                    </WorkoutVideoProvider>
                </PlannerProvider>
            </DayProvider>



        </>
    )
}