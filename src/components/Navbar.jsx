import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className='p-4 items-center bg-white shadow-md flex justify-between'>
                <h1 className='text-2xl font-bold text-dark'>Coders Portal</h1>
                <div>
                    <nav>
                        <ul className='flex gap-6 pr-9'>
                            <li><NavLink className={({ isActive }) => {
                                return isActive ? "text-skin font-semibold" : "text-primary hover:text-dark"
                            }} to="/home">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => {
                                return isActive ? "text-skin font-semibold" : "text-primary hover:text-dark"
                            }} to="/events">Events</NavLink></li>
                            <li><NavLink className={({ isActive }) => {
                                return isActive ? "text-skin font-semibold" : "text-primary hover:text-dark"
                            }} to="/blogs">Blogs</NavLink></li>
                            <li><NavLink className={({ isActive }) => {
                                return isActive ? "text-skin font-semibold" : "text-primary hover:text-dark"
                            }} to="/communities">Communities</NavLink></li>

                            <li><NavLink className={({ isActive }) => {
                                return isActive ? "text-skin font-semibold" : "text-primary hover:text-dark"
                            }} to="/authorize">Log In</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
