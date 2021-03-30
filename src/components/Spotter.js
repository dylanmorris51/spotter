import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"
import { NavBar } from "./nav/NavBar"
import { Home } from "./Home"
import { ApplicationViews } from "./ApplicationViews"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../index.css"
import { Footer } from "./nav/Footer"


export const Spotter = () => {

    return  <>
                
                <Route render={() => {
                    if (sessionStorage.getItem(userStorageKey)) {
                        return (
                            <>
                                <NavBar />
                                <ApplicationViews />
                                <Footer />
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