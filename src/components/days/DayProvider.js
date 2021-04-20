import React, { useState, createContext } from "react"

//context
export const DayContext = createContext()

//provider
export const DayProvider = (props) => {

    //state
    const [days, setDays] = useState([])

    //fetch
    const getDays = () => {
        return fetch(`https://spotter-nss-api.herokuapp.com/days`)
            .then(res => res.json())
            .then(setDays)
    }

    return (
        <DayContext.Provider value={{
            days, getDays
        }}>
            {props.children}
        </DayContext.Provider>
    )
}