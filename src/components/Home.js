import React from "react";
import "./videos/Video.css"
import "./Home.css"
import { VideoCard } from "./videos/VideoCard";
import Carousel from "react-bootstrap/Carousel"
import CardDeck from "react-bootstrap/CardDeck"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {Link} from "react-router-dom"


//! Create content for a landing page here. Buttons that go to components?
export const Home = () => {
    
    return  <>
                <div className="outer--container">
                    <div className="container">
                        {/* <Carousel className="carousel" fade>
                            <Carousel.Item interval={4000}>
                                <img
                                    className="d-block w-100"
                                    src="https://i.imgur.com/OgJw4Ux.jpg/800x400?text=First slide&bg=373940"
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Videos</h3>
                                    <p>Browse the video library to discover the perfect exercises for you</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={4000}>
                                <img
                                    className="d-block w-100"
                                    src="https://i.imgur.com/1WPMllM.jpg/800x400?text=Second slide&bg=282c34"
                                    alt="Second slide"
                                />
                                <Carousel.Caption>
                                    <h3>Workouts</h3>
                                    <p>Create and view custom workouts</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={4000}>
                                <img
                                    className="d-block w-100"
                                    src="https://i.imgur.com/4ekzUMy.jpg/800x400?text=Third slide&bg=20232a"
                                    alt="Third slide"
                                />
                                <Carousel.Caption>
                                    <h3>Planner</h3>
                                    <p>Schedule your workouts for the week ahead</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> */}

                        <CardDeck className="content">
                            <Card className="home--card">
                                <div className="img--fill">
                                    <Link to="/videos">
                                        <Card.Img className=".home--img" variant="top" src="https://i.imgur.com/OgJw4Ux.jpg/100px160" />
                                    </Link>
                                </div>
                                    <Card.Body>
                                        <Card.Title>Videos</Card.Title>
                                        <Card.Text>
                                            Browse the video library to discover the perfect exercises for you
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button className="card--button" href="/videos">
                                            Go!
                                        </Button>
                                    </Card.Footer>
                            </Card>
                            <Card className="home--card">
                                <div className="img--fill">
                                    <Link to="/workouts">
                                        <Card.Img className=".home--img" variant="top" src="https://i.imgur.com/1WPMllM.jpg/100px160" />
                                    </Link>
                                </div>
                                    <Card.Body>
                                        <Card.Title>Workouts</Card.Title>
                                        <Card.Text>
                                            Create and view custom workouts
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Button className="card--button" href="/workouts">
                                            Go!
                                        </Button>
                                    </Card.Footer>
                            </Card>
                            <Card className="home--card">
                                <div className="img--fill">
                                    <Link to="/planner">
                                        <Card.Img className=".home--img" variant="top" src="https://i.imgur.com/4ekzUMy.jpg/100px160" />
                                    </Link>
                                </div>
                                    <Card.Body>
                                        <Card.Title>Planner</Card.Title>
                                        <Card.Text>
                                            Schedule your workouts for the week ahead 
                                        </Card.Text>
                                    </Card.Body>
                                <Card.Footer>
                                    <Button className="card--button" href="/planner">
                                        Go!
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    </div>
                </div>
                
            </>
}