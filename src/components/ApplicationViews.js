import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { VideoList } from "./videos/VideoList"
import { VideoProvider } from "./videos/VideoProvider"
import { VideoDetail } from "./videos/VideoDetail"
import { VideoSortPain } from "./videos/VideoSortPain"
import { PainTypeProvider } from "./pains/PainProvider"
import { ExerciseTypeProvider } from "./exerciseTypes/ExerciseTypeProvider"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

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
                    </VideoProvider>
                </PainTypeProvider>
            </ExerciseTypeProvider>
        </>
    )
}