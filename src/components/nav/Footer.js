import React from "react"
import "./Footer.css"

export const Footer = () => {

    return  <>
    
                <footer id="footer">
                    <div className="footer--item">
                        
                    </div>

                    <div className="footer--item github">
                                                
                        <a href="https://github.com/dylanmorris51/spotter">
                            <img src="https://pngimg.com/uploads/github/github_PNG15.png"
                                    width="120"
                                    height="40"
                                    alt="link to Github">                                 
                            </img>
                        </a>
                    </div>
                    
                    <div className="footer--item">
                        (C) 2021
                        <img    src="https://i.imgur.com/lWKMaoG.png"
                                width="40"
                                height="40"
                                alt="Spotter logo"
                        ></img>
                    </div>
                </footer>

            </>
}