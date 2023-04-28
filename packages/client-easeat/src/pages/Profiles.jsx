import React from 'react'
import CardProfile from '../components/CardProfile/CardProfile'
import CardProfileAdd from '../components/CardProfileAdd/CardProfileAdd'
import Sidebar from '../components/Sidebar/Sidebar'
import '../index.css'

const existingProfiles = [
    {
        key: 1,
        name: 'Léonie',
        imageUrl: 'https://i.imgur.com/8Km9tLL.jpg',
    },
    {
        key: 2,
        name: 'Adam',
        imageUrl: 'https://i.imgur.com/8Km9tLL.jpg',
    }

]

const Profiles = () => {
    return (
        <>
            <Sidebar />
            <div className="flex col-span-3 h-screen bg-white shadow">
                <div className="flex flex-col w-full mx-auto items-center justify-center">
                    {existingProfiles.map((profile) => {
                        return (
                            <CardProfile
                                key={profile.key}
                                name={profile.name}
                                imageUrl={profile.imageUrl}
                            />
                        )
                    })}
                    <CardProfileAdd/>
                </div>
            </div>
        </>
    )
}



export default Profiles
