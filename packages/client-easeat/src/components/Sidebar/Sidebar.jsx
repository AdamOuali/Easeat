import React from 'react'
import easeatLogoCropped from '../../assets/easeat_logo_cropped.png'
import { NavLink } from 'react-router-dom'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import { BsCalendarCheck} from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { SlLogout } from 'react-icons/sl'

export default function Sidebar() {
    return (
        <>
            <div className="flex col-span-1 h-screen shadow p-0 m-0">
                <div className="flex flex-col h-screen p-3 bg-gray-100 shadow w-full">
                    <div className="flex items-center mx-8">
                        <img
                            className="mx-auto h-13 w-auto"
                            src={easeatLogoCropped}
                            alt="Logo Easeat"
                        />
                    </div>
                    <div className="flex-1">
                        <ul className="pt-10 text-lg divide-y flex-col">
                            {/* DASHBOARD */}
                            <li className="rounded-sm py-5">
                                <NavLink to={'/'}>
                                    <span className="text-primary flex items-center">
                                        <MdOutlineSpaceDashboard className="inline-block mr-2" />
                                        Accueil dashboard
                                    </span>
                                </NavLink>
                            </li>
                            {/* PROFILS */}
                            <li className="rounded-sm py-5">
                                <NavLink to={'/profils'}>
                                    <span className="text-primary flex items-center">
                                        <CgProfile className="inline-block mr-2" />
                                        Profils
                                    </span>
                                </NavLink>{' '}
                            </li>
                            {/* CALENDRIER */}
                            <li className="rounded-sm py-5">
                                <NavLink to={'/agenda'}>
                                    <span className="text-primary flex items-center">
                                        <BsCalendarCheck className="inline-block mr-2" />
                                        Agenda
                                    </span>
                                </NavLink>{' '}
                            </li>
                            {/* PARAMETRES */}
                            <li className="rounded-sm py-5">
                                <NavLink to={'/parametres'}>
                                    <span className="text-primary flex items-center">
                                        <FiSettings className="inline-block mr-2" />
                                        Paramètres
                                    </span>
                                </NavLink>{' '}
                            </li>
                            {/* LOGOUT */}
                            <li className="rounded-sm py-5">
                                <NavLink to={'/logout'}>
                                    <span className="text-primary flex items-center">
                                        <SlLogout className="inline-block mr-2" />
                                        Déconnexion
                                    </span>
                                </NavLink>{' '}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
