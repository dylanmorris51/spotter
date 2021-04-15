import React, { useState, createContext } from "react"

//context
export const ExerciseTypeContext = createContext()

//provider
export const ExerciseTypeProvider = (props) => {

    const [exerciseTypes, setExerciseTypes] = useState([])

    //fetch
    const getExerciseTypes = () => {
        return fetch("https://git.heroku.com/spotter-nss-api.git/exerciseTypes")
            .then(res => res.json())
            .then(setExerciseTypes)
    }

    return (
        <ExerciseTypeContext.Provider value ={{
            exerciseTypes, getExerciseTypes
        }}>
            {props.children}
        </ExerciseTypeContext.Provider>
    )
}