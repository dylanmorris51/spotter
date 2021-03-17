import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { authApi, userStorageKey } from "./authSettings"
import "./Login.css"
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button"



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
            <main className="container--login">
                <dialog className="dialog dialog--auth" open={existDialog}>
                    <div>User does not exist</div>
                    <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
                </dialog>
                <section>
                    <form className="form--login" onSubmit={handleLogin}>
                        <h1>Spotter</h1>
                        <h2>Please sign in</h2>
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
                        <fieldset>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </fieldset>
                    </form>
                </section>
                <section className="link--register">
                    <Link to="/register">
                        <Button>
                            Register for an account
                        </Button>
                    </Link>
                </section>
            </main>

            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>


        </>
    )
}

