import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export const Navbar = () => {

    const logo =  `/assets/logolg.png`


    return (
        <>
        <div className='row py-3 bg-dark'>

        </div>
            <nav className="navbar navbar-expand-sm navbar-light text-center bg-light">
                
                <Link 
                    className="navbar-brand text-center" 
                    to="/home"
                >
                    <div className='row'>
                        <div className='col-12'>
                            <img className='img-fluid' src={logo} alt='logolg'></img>
                        </div>
                    </div>
                </Link>

                <div className="navbar-collapse text-center">
                    <div className="navbar-nav text-center">

                        <NavLink 
                            className={({ isActive }) => 'nav-item nav-link text-center' + (isActive ? 'active' : '') }
                            to="/Model"
                        >
                            Modelos
                        </NavLink>

                    </div>
                </div>
            </nav>
        </>
    )
}
