import { Route, Redirect } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { userStorageKey } from "./auth/authSettings"
import { NavBar } from "./nav/NavBar"
import { Home } from "./Home"
import { ApplicationViews } from "./ApplicationViews"
import 'bootstrap/dist/css/bootstrap.min.css'
import "../index.css"


export const Spotter = () => {

    //! Add NavBar Styling
    return  <>
                {/* <div className="outer--container">
                                    <div className="container">

                                    </div>
                </div>     */}
                
                <Route render={() => {
                    if (sessionStorage.getItem(userStorageKey)) {
                        return (
                            <>
                                <NavBar />
                                <ApplicationViews />
                                {/* add footer */}
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