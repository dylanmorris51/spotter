import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { VideoList } from "./videos/videoList"
import { VideoProvider } from "./videos/VideoProvider"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <VideoProvider>
                <Route exact path="/videos">
                    <VideoList />
                </Route>
            </VideoProvider>
        </>
    )
}