import React from "react";
import { Button } from "react-bootstrap"


//! Go through MVP code and add comments to every line. Be able to explain every line
//! Create content for a landing page here. Buttons that go to components?
//! Styling before stretch goals
//! Add conditionals
export const Home = () => {
    
    return  <>
                {/* user logout */}
                <Button variant="light"  href="/login" onClick={() => {
                    sessionStorage.clear()}}>
                        Logout
                </Button>
            </>
}