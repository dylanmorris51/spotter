import React, { useState, createContext } from "react"

//context
export const PainTypeContext = createContext()

//provider
export const PainTypeProvider = (props) => {

    const [painTypes, setPainTypes] = useState([])

    //fetch
    const getPainTypes = () => {
        return fetch("http://localhost:8088/painTypes")
            .then(res => res.json())
            .then(setPainTypes)
    }

    return (
        <PainTypeContext.Provider value={{
            painTypes, getPainTypes
        }}>
            {props.children}
        </PainTypeContext.Provider>
    )
}