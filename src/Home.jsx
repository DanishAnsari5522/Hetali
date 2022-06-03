import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import Common from './Common'

function Home() {
    return (
        <Common name="Grow your business with" visit="/about" btname="Get Started"/>
    )
}

export default Home