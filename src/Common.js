import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

function Common(props) {
    return (
        <div>
            <scetion id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <div className="p-absolute ml-0">
                                    <h1>{props.name}<strong className="brand-name">Danish</strong></h1>
                                    <h2 className="my-10">We are the team of talented developer making website</h2>
                                    <div className="mt-3">
                                        <NavLink exact to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                                    </div></div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-image">
                                    <img src="https://ant.ivdata.in/v2/assets/images/profile-img.png" className="img-fluid animated" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </scetion>
        </div>
    )
}

export default Common