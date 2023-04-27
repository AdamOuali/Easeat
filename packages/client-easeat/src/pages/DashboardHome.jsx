import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { NavLink } from 'react-router-dom'
import imgFrigo from '../assets/img-frigo-1.jpg'


function checkColorOfAlert(alertType){
    if(alertType === 'Alerte'){
        return 'bg-red-500'
    } else if(alertType === 'Warning'){
        return 'bg-yellow-500'
    } else {
        return 'bg-green-500'
    }
}
const DashboardHome = () => {
    const alerts = [
        {
            key: 1,
            type: 'Check',
            message: 'Arrêt du frigo confirmé pour début de vacances',
            date: '12:01 - 27/04/2023',
        },
        {
            key: 2,
            type: 'Alerte',
            message: 'Température frigo',
            date: '12:01 - 27/04/2023',
        },
        {
            key: 3,
            type: 'Warning',
            message: 'Plus d\'oranges',
            date: '12:01 - 27/04/2023',
        },
        {
            key: 4,
            type: 'Alerte',
            message: 'Température frigo',
            date: '12:01 - 27/04/2023',
        },
        {
            key: 5,
            type: 'Check',
            message: 'Arrêt du frigo confirmé pour début de vacances',
            date: '12:01 - 27/04/2023',
        },
    ]
    return (
        <>
            <Sidebar />
            {/* DIV DU DESSOUS A METTRE POUR ETRE DANS LE BODY */}
            <div className="flex col-span-3 h-screen bg-white shadow">
                <div className="container mx-auto mt-12 p-8">
                    <div className="grid grid-cols-1 gap-6 mb-6 ">
                        <div className="w-full h-52 bg-white rounded-lg shadow overflow-auto">
                            <img
                                className="object-cover object-center"
                                src={imgFrigo}
                                alt="Image frigo actuelle"
                            />
                        </div>
                        <div className="w-full h-96 px-4 py-5 bg-white rounded-lg shadow overflow-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs uppercase">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Horodatage
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Type
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Message
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {alerts.map((alert) => (
                                        <tr
                                            className="bg-white border-b "
                                            key={alert.key}
                                        >
                                            <td className="px-6 py-4 ">
                                                {alert.date}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`rounded-md p-2 ${checkColorOfAlert(alert.type)}`}> {alert.type}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {alert.message}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardHome
