import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { NavLink } from 'react-router-dom'
import imgFrigo from '../assets/img-frigo-1.jpg'
import ButtonGenerateLogs from '../components/ButtonGenerateLogs/ButtonGenerateLogs'

function checkColorOfAlert(alertType) {
    if (alertType === 'Alerte') {
        return 'bg-red-500'
    } else if (alertType === 'Warning') {
        return 'bg-yellow-500'
    } else {
        return 'bg-green-500'
    }
}

function formatDateString(dateString) {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    const day = ('0' + dateObj.getDate()).slice(-2);
    return day + '-' + month + '-' + year;
  }

  
const DashboardHome = () => {
    const [alertsList, setAlertsList] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/logs')
            .then((response) => response.json())
            .then((data) => {
                setAlertsList(data);
            });
    }, []);

    return (
        <>
            <Sidebar />
            <div className="flex col-span-3 h-screen bg-white shadow">
                <div className="container mx-auto mt-12 p-8">
                    <div className="flex-col items-center justify-center">
                        <img
                            className="object-cover object-center rounded-lg"
                            src={imgFrigo}
                            alt="Image frigo actuelle"
                        />
                        <div className="w-full h-96 px-4 my-12 bg-white rounded-lg shadow overflow-auto">
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
                                    {alertsList.map((alert) => (
                                        <tr
                                            className="bg-white border-b "
                                            key={alert.id}
                                        >
                                            <td className="px-6 py-4 ">
                                                {formatDateString(alert.date)} - {alert.heure}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`rounded-md p-2 ${checkColorOfAlert(
                                                        alert.type_information
                                                    )}`}
                                                >
                                                    {alert.type_information}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {alert.message}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <ButtonGenerateLogs/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardHome
