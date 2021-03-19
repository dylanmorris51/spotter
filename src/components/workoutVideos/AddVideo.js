import React, { useContext, useEffect, useState } from "react"


//add video to join table

export const AddVideo = () => {

    const currentUserId = +sessionStorage.getItem("app_user_id")
    
    //state
    const [workoutVideo, setWorkoutVideo] = useState({
        workoutId: 0,
        videoId: 0
    })

    
}