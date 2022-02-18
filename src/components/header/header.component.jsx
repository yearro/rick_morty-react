import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
    <section className="hero is-primary">
        <div className="hero-body">
        <p className="title">
            <Link to="/" className="logo-container">
                Rick and Morty
            </Link>
        </p>
        <p className="subtitle">
            Api de personajes
        </p>
        </div>
    </section>
)
export default Header