import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
// import Calendar from 'react-calendar'
import CalendrierEaseat from '../components/Calendar/CalendarEaseat'

const Agenda = () => {
    return (
        <>
            <Sidebar />
            {/* DIV DU DESSOUS A METTRE POUR ETRE DANS LE BODY */}
            <div className="flex col-span-3 h-screen bg-white shadow">
                <div className="container mx-auto mt-12 p-8">
                    <div className="grid grid-cols-1 gap-6 mb-6 ">
                        <CalendrierEaseat />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Agenda
