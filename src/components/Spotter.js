import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"
import { NavBar } from "./nav/NavBar"
import { Home } from "./Home"
import { ApplicationViews } from "./ApplicationViews"

export const Spotter = () => {

    return  <>
        <Route render={() => {
            if (sessionStorage.getItem(userStorageKey)) {
                return (
                    <>
                        ze landing page
                        <NavBar />
                        <ApplicationViews />
                        <Home />
                    </>
                )
            } else {
                return <Redirect to="/login" />;
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>

    </>
}