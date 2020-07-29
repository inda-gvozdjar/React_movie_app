import React from 'react'

import { Link } from "react-router-dom"

function Box({ box }) {
    let path = window.location.pathname.split("/")
    return (
        <div className="box" >
            <img className="popularPic" alt="box" src={box.poster_path ? "http://image.tmdb.org/t/p/w185/" + box.poster_path : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1902/pavelstasevich190200120/124934975-no-image-available-icon-vector-flat.jpg"} popularity={box.popularity} overview={box.overview} />
            <div className="contentBox">
                <h3 className="popularTitle" >{box.name ? box.name : box.title}</h3>
                <hr className="break" />
                <Link to={`/details/${path[1]}/${box.id}`} className="details" >Details </Link>
                <div className="round">{box.vote_average}</div>
            </div>
        </div>
    )
}

export default Box                                                                          