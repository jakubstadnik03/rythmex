import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Map = () => {

    const [open, setOpen] = useState(false)

    const handleClick = () =>{
        setOpen(!open)
    } 
    
    return (
        <React.Fragment>
            <div className="google-map">

                <Link to="#" className={`map-section ${open === true ? "js-active" : ""}`}>

                    <div className="map-toggle">
                        <div className="mt-icon">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="mt-text font-alt">
                            <div className="mt-open" onClick={handleClick}>Open the map <i className="fa fa-angle-down"></i></div>
                            <div className="mt-close" onClick={handleClick}>Close the map <i className="fa fa-angle-up"></i></div>
                        </div>
                    </div>

                </Link>

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d24572.368311964965!2d-75.602613!3d39.65993!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c703f3d191cf13%3A0xf4674106f987fe3a!2zMjQ1IFF1aWdsZXkgQmx2ZCBTdGUgSywgTmV3IENhc3RsZSwgREUgMTk3MjAsINCh0L_QvtC70YPRh9C10L3RliDQqNGC0LDRgtC4INCQ0LzQtdGA0LjQutC4!5e0!3m2!1suk!2sua!4v1584450290276!5m2!1suk!2sua" width="600" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen aria-hidden="false" tabIndex={0} loading="lazy"></iframe>
            </div>
        </React.Fragment>
    )
}

export default Map