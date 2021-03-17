import React from "react";
import { Button } from "react-bootstrap"


//! Create logout component and import
export const Home = () => {
    return <>
        <Button variant="light" onClick={() => {
            sessionStorage.clear()
        }} href="/login">Logout</Button>
    </>
}