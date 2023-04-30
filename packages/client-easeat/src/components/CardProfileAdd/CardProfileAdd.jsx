import React, { Fragment } from 'react'
import '../../index.css'
import './CardProfileAdd.css'
import { NavLink } from 'react-router-dom'

const yellowBackground = "https://img.freepik.com/free-photo/vivid-blurred-colorful-wallpaper-background_58702-3697.jpg?w=360"
const placeHolder =
    'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'

const CardProfile = ({ name, imageUrl }) => {
    return (
        <NavLink to={'/new-profile'}>
            <div
                className={
                    'w-40 h-40 flex flex-col items-center justify-center rounded-lg shadow-lg m-4 bg-white'
                }
            >
                <img
                    src={placeHolder}
                    alt="Profile"
                    className="w-20 h-20 rounded-full mb-2"
                />
                <h3 className="text-sm font-bold text-center">
                    Ajouter un profil
                </h3>
            </div>
        </NavLink>
    )
}

export default CardProfile
