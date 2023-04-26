import React from 'react'
import easeatLogoCropped from '../../assets/easeat_logo_cropped.png'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="flex">
            <div className="flex flex-col h-screen p-3 bg-gray-800 shadow w-60">
                <div className="space-y-3">
                    <div className="flex items-center mx-8">
                        <img
                            className="mx-auto h-13 w-auto"
                            src={easeatLogoCropped}
                            alt="Logo Easeat"
                        />
                    </div>
                    <div className="relative"></div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-xl">
                            <li className="rounded-sm">
                                <NavLink to={'/login'}>
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <span className="text-gray-100">
                                            Accueil dashboard
                                        </span>
                                    </a>
                                </NavLink>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100">
                                        Profils
                                    </span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100">
                                        Orders
                                    </span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100">
                                        Settings
                                    </span>
                                </a>
                            </li>
                            <li className="rounded-sm">
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <span className="text-gray-100">
                                        Logout
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>



{/* CI DESSOUS LA VUE DES DIFFÉRENTS ÉLÉMENTS À METTRE DANS UN AUTRE COMPOSANTS POUR CRÉER UNE VUE */}
{/*             
            <div className="container mx-auto mt-12 p-8">
                <div className="grid grid-cols-1 gap-6 mb-6 ">
                    <div className="w-full h-52 px-4 py-5 bg-white rounded-lg shadow overflow-auto">
                        oui
                    </div>
                    <div className="w-full h-52 px-4 py-5 bg-white rounded-lg shadow overflow-auto">
                        <table class="min-w-full">
                            <thead class="bg-white border-b">
                                <tr>
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Horodatage
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Type
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        Message
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <p>25/04/2023 - 12:01</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Alerte</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Température frigo : 5°C</p>
                                    </td>
                                </tr>
                                <tr class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <p>12:01</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Alerte</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Température frigo : 5°C</p>
                                    </td>
                                </tr>{' '}
                                <tr class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <p>12:01</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Alerte</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Température frigo : 5°C</p>
                                    </td>
                                </tr>{' '}
                                <tr class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <p>12:01</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Alerte</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Température frigo : 5°C</p>
                                    </td>
                                </tr>{' '}
                                <tr class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <p>12:01</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Alerte</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Température frigo : 5°C</p>
                                    </td>
                                </tr>{' '}
                                <tr class="bg-gray-100 border-b">
                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        <p>12:01</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Alerte</p>
                                    </td>
                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <p>Température frigo : 5°C</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
    )
}
