import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { NavLink } from 'react-router-dom'

const DashboardHome = () => {
    return (
        <div>
            <Sidebar />
            {/* DIV DU DESSOUS A METTRE POUR ETRE DANS LE BODY */}
            <div className="flex col-span-3 h-screen bg-gray-800 shadow">
            {/* DIV DU DESSOUS A METTRE POUR ETRE DANS LE BODY */}
                <div className="container mx-auto mt-12 p-8">
                    <div className="grid grid-cols-1 gap-6 mb-6 ">
                        <div className="w-full h-52 px-4 py-5 bg-white rounded-lg shadow overflow-auto">
                            oui
                        </div>
                        <div className="w-full h-52 px-4 py-5 bg-white rounded-lg shadow overflow-auto">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                        >
                                            Horodatage
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                        >
                                            Type
                                        </th>
                                        <th
                                            scope="col"
                                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                        >
                                            Message
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-gray-100 border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <p>25/04/2023 - 12:01</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Alerte</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Température frigo : 5°C</p>
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-100 border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <p>12:01</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Alerte</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Température frigo : 5°C</p>
                                        </td>
                                    </tr>{' '}
                                    <tr className="bg-gray-100 border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <p>12:01</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Alerte</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Température frigo : 5°C</p>
                                        </td>
                                    </tr>{' '}
                                    <tr className="bg-gray-100 border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <p>12:01</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Alerte</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Température frigo : 5°C</p>
                                        </td>
                                    </tr>{' '}
                                    <tr className="bg-gray-100 border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <p>12:01</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Alerte</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Température frigo : 5°C</p>
                                        </td>
                                    </tr>{' '}
                                    <tr className="bg-gray-100 border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <p>12:01</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Alerte</p>
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <p>Température frigo : 5°C</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHome
