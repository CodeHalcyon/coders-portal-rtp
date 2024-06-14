import React from 'react'
import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <>
            <div className='p-3 items-center bg-gray-500 text-white flex justify-between'>
                <h1 className='text-2xl font-bold'>Coders Portal</h1>
                <div>
                    <nav>
                        <ul className='flex gap-6 pr-9'>
                            <li><NavLink className={({ isActive }) => {
                                return isActive ? "text-orange-300" : "text-black"
                            }} to="/">Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => {
                                return isActive ? "text-orange-300" : "text-black"
                            }} to="/events">Events</NavLink></li>
                            <li><NavLink className={({ isActive }) => {
                                return isActive ? "text-orange-300" : "text-black"
                            }} to="/blogs">Blogs</NavLink></li>
                            <li><NavLink className={({ isActive }) => {
                                return isActive ? "text-orange-300" : "text-black"
                            }} to="/communities">Communities</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
