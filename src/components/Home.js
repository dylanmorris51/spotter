import React from "react";
import { Button } from "react-bootstrap"



export const Home = () => {
    
    return  <>
                <Button variant="light"  href="/login" onClick={() => {
                    sessionStorage.clear()}}>
                        Logout
                </Button>
            </>
}