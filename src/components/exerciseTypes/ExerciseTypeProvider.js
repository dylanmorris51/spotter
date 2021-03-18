import React, { useState, createContext } from "react"

//context
export const ExerciseTypeContext = createContext()

//provider
export const ExerciseTypeProvider = (props) => {

    const [exerciseTypes, setExerciseTypes] = useState([])

    //fetch
    const getExerciseTypes = () => {
        return fetch("http://localhost:8088/exerciseTypes")
            .then(res => res.json())
            .then(setexerciseTypes)
    }

    return (
        <ExerciseTypeContext.Provider value ={{
            exerciseTypes, getExerciseTypes
        }}>
            {props.children}
        </ExerciseTypeContext.Provider>
    )
}