import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

import { VideoList } from "./videos/VideoList"
import { VideoProvider } from "./videos/VideoProvider"
import { VideoDetail } from "./videos/VideoDetail"
import { PainTypeProvider } from "./pains/PainProvider"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>

            <PainTypeProvider>
                <VideoProvider>
                    <Route exact path="/videos">
                        <VideoList />
                    </Route>

                    <Route path="/videos/detail/:videoId(\d+)">
                        <VideoDetail />
                    </Route>
                </VideoProvider>
            </PainTypeProvider>
        </>
    )
}