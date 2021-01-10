import React from 'react'
import Hero from "../Components/Hero"
import Banner from '../Components/Banner'
import { Link } from "react-router-dom"
import RoomsContainer from '../Components/RoomsContainer'

export default function Rooms() {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our rooms" >
                    <Link to="/" className="btn-primary">
                        Return home
                </Link>
                </Banner>
            </Hero>
            <RoomsContainer />
        </>
    )
}
