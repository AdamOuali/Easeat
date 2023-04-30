import React, { useState, useEffect } from 'react'
import CardProfile from '../components/CardProfile/CardProfile'
import CardProfileAdd from '../components/CardProfileAdd/CardProfileAdd'
import Sidebar from '../components/Sidebar/Sidebar'
import '../index.css'

const Profiles = () => {
    const [profileList, setProfileList] = useState([])

    // Récupérer la liste des profils
    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then((response) => response.json())
            .then((data) => {
                setProfileList(data)
            })
    }, [])


    // Supprimer un profil
    const handleDelete = (id) => {
        let myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        let bodyToSend = JSON.stringify({
            "id": id
        })
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: bodyToSend,
            redirect: 'follow'
        }
    
        fetch(`http://localhost:3000/api/users/delete`, requestOptions)
            .then((response) => response.json()) // Ajout de la méthode json() ici
            .then((data) => {
                console.log(data)
                // Vérifier si l'utilisateur a été supprimé avec succès
                if (data) {
                    // Mettre à jour la liste des profils
                    const updatedProfileList = profileList.filter(
                        (profile) => profile.id !== id
                    )
                    setProfileList(updatedProfileList)
                } else {
                    console.error('Erreur lors de la suppression de l\'utilisateur')
                }
            })
            .catch((error) => console.error(error))
    }

    return (
        <>
            <Sidebar />
            <div className="flex col-span-3 h-screen bg-white shadow">
                <div className="flex flex-wrap w-full mx-auto items-center justify-center">
                    {profileList.map((profile) => {
                        return (
                            <CardProfile
                                key={profile.id}
                                id={profile.id}
                                name={profile.nom}
                                imageUrl={profile.image}
                                onDelete={handleDelete}
                            />
                        )
                    })}
                    <CardProfileAdd />
                </div>
            </div>
        </>
    )
}

export default Profiles
