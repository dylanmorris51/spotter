import React from "react"
import "./Video.css"


//TODO: expand videos on painType and exerciseType


export const VideoCard = ({ video }) => (
    <section className="video">
        <h3 className="video--name">{video.name}</h3>
        <div className="video--link">
            <a href={video.link}>Go to video</a>
        </div>
    </section>
)