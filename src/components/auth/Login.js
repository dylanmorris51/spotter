import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { authApi, userStorageKey } from "./authSettings"
import "./Login.css"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"
import Carousel from 'react-bootstrap/Carousel'
import Navbar from "react-bootstrap/Navbar"



export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    sessionStorage.setItem(userStorageKey, exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        src="https://i.imgur.com/lWKMaoG.png"
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="Spotter logo" />
                </Navbar.Brand>
            </Navbar>

            <div className="outer--container">
                <div className="container">



                    <Carousel className="carousel" fade>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/OgJw4Ux.jpg/800x400?text=First slide&bg=373940"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Welcome!</h3>
                                <p>Your fitness resource on the go - just like you.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/1WPMllM.jpg/800x400?text=Second slide&bg=282c34"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Safety</h3>
                                <p>We help you train safely so you can stay moving.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/4ekzUMy.jpg/800x400?text=Third slide&bg=20232a"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Curated Library</h3>
                                <p>Browse our hand-picked instructional videos to find what works for you.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src="https://i.imgur.com/wiPS7X3.jpg/800x400?text=Fourth slide&bg=20232a"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Get Started</h3>
                                <p>Register to start building your personalized workouts</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                    <main className="container--login">
                        <dialog className="dialog dialog--auth" open={existDialog}>
                            <div>User does not exist</div>
                            <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
                        </dialog>
                        <section>
                            <form className="form--login" onSubmit={handleLogin}>
                                <div className="video--title">
                                    {/* <h1>Welcome</h1> */}
                                    <h2>Please sign in</h2>
                                </div>
                                <fieldset>
                                    <label htmlFor="inputEmail"> Email address </label>
                                    <input type="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Email address"
                                        required autoFocus
                                        value={loginUser.email}
                                        onChange={handleInputChange} />
                                </fieldset>
                            <section className="link--register">
                                <div className="btn--container">
                                    <fieldset>
                                        <Button type="submit">
                                            Sign in
                                        </Button>
                                    </fieldset>
                                    <Link to="/register">
                                        <Button>
                                            Register for an account
                                        </Button>
                                    </Link>
                                </div>
                            </section>
                            </form>
                        </section>
                    </main>

                </div>
            </div>



        </>
    )
}

