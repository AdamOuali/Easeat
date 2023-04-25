import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-48">
            <div className="flex flex-col items-center text-center">
                <div className="text-indigo-500 font-bold text-7xl">
                    ERREUR 404
                </div>
                <div className="font-bold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
                    La page que vous recherchez n'a pas été trouvée.
                </div>
                <div className="text-primary font-medium text-sm md:text-xl lg:text-2xl mt-8 hover:text-opacity-50">
                    <NavLink to={'/'}> Retour à l'accueil </NavLink>
                </div>
            </div>

            <i
                className="mdi mdi-chevron-right text-gray-400 mdi-24px my-auto pr-2
                        group-hover:text-gray-700 transition-all duration-200 delay-100"
            />
        </div>
    )
}

export default Error404
