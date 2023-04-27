import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className="col-span-4 items-center justify-center h-screen p-48">
            <div className="flex flex-col items-center text-center">
                <div className="text-primary font-bold text-7xl">
                    ERREUR 404
                </div>
                <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                    La page que vous recherchez n'a pas été trouvée.
                </div>
                <div className="text-primary font-medium text-sm md:text-xl lg:text-2xl mt-8 hover:text-opacity-50">
                    <NavLink to={'/'}> Retour à l'accueil </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Error404
