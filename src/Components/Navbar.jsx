import React from 'react'
import {MdAddShoppingCart, MdSavedSearch} from "react-icons/md"
import {CgComponents} from "react-icons/cg"
import { NavLink } from 'react-router-dom'
export const Navbar = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent:"center",
            padding: " var(--navbar-padding, 0.5rem)",
            paddingBottom:"50px",
            width: "100%"
        }} className="navbar fixed bottom-0">

            <ul style={{
                display: "flex",
                alignItems: "center",
                boxShadow: " 0 0 6px #111827",
                borderRadius: "15px",
               
            }} className=' bg-slate-200 list-none flex justify-between items-start gap-7'>

                <li style={{ padding: "20px", borderRadius: " 16px" }} >
                    <NavLink className={(nav) => nav.isActive ? "text-blue-500" : "white "} to={"/"}>
                        <MdAddShoppingCart  className='text-3xl' />
                    </NavLink>
                </li>
                <li style={{ padding: "20px", borderRadius: " 16px" }} >
                    <NavLink className={(nav) => nav.isActive ? "text-blue-500" : "white "} to={"/"}>
                        <CgComponents className='text-3xl' />
                    </NavLink>
                </li>

                <li style={{ padding: "20px",  borderRadius: " 16px" }}>
                    <NavLink className={(nav) => nav.isActive ? "text-blue-500" : "white "} to={"/components"}>
                        <MdSavedSearch className='text-3xl' />
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
