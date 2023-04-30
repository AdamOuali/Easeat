import React, { Fragment } from 'react'
import '../../index.css'
import './CardProfile.css'

const yellowBackground =
    'https://img.freepik.com/free-vector/pastel-yellow-blue-gradient-blur-background-vector_53876-175399.jpg'

const placeHolder =
    'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'

const CardProfile = ({ id, name, imageUrl, onDelete }) => {
    const handleDeleteClick = () => {
        onDelete(id)
    }

    return (
        <div
            style={{ backgroundImage: `url(${yellowBackground})` }}
            className={`w-40 h-40 flex flex-col items-center justify-center rounded-lg shadow-lg m-4`}
        >
            <img
                src={imageUrl ? imageUrl : placeHolder}
                alt="Profile"
                className="w-20 h-20 rounded-full mb-2"
            />
            <h3 className="text-sm font-bold text-center">{name}</h3>
            <button onClick={handleDeleteClick} className="text-red-500 text-xs hover:cursor-pointer hover:font-bold p-0 border-hidden">Supprimer</button>
        </div>
    )
}

export default CardProfile
