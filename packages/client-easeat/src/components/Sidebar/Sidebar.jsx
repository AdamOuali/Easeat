import React from 'react'
import easeatLogoCropped from '../../assets/easeat_logo_cropped.png'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <div className="flex col-span-1 h-screen bg-gray-800 shadow p-0 m-0">
                <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-full">
                    <div className="flex items-center mx-8">
                        <img
                            className="mx-auto h-13 w-auto"
                            src={easeatLogoCropped}
                            alt="Logo Easeat"
                        />
                    </div>
                    <div className="flex-1 font-bold text-primary">
                        <ul className="pt-10 text-xl divide-y">
                            <li className="rounded-sm py-5">
                                <NavLink to={'/'}>
                                    <span className="text-gray-100">
                                        Accueil dashboard
                                    </span>
                                </NavLink>
                            </li>
                            <li className="rounded-sm py-5">
                                <span className="text-gray-100">Profils</span>
                            </li>
                            <li className="rounded-sm py-5">
                                <span className="text-gray-100">
                                    Calendrier
                                </span>
                            </li>
                            <li className="rounded-sm py-5">
                                <span className="text-gray-100">Settings</span>
                            </li>
                            <li className="rounded-sm py-5">
                                <span className="text-gray-100">Logout</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
