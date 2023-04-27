import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'

const Calendrier = () => {
    return (
        <>
            <Sidebar />
            {/* DIV DU DESSOUS A METTRE POUR ETRE DANS LE BODY */}
            <div className="flex col-span-3 h-screen bg-white shadow">
                <div className="container mx-auto mt-12 p-8">
                    <div className="grid grid-cols-1 gap-6 mb-6 ">

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Calendrier
