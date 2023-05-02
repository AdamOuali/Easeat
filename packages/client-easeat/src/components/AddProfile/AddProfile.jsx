import React, { useState } from 'react'
import '../../index.css'
import Sidebar from '../Sidebar/Sidebar'

function createNewUser(lastName, password, timeToCook, foodType) {
    var myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({
        nom: lastName,
        password: password,
        type_droit: 'standard',
        timeToCook: timeToCook,
        foodType: foodType,
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    }

    fetch('http://localhost:3000/api/users/add', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error))
}

const AddProfile = () => {
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const [timeToCook, setTimeToCook] = useState('')
    const [foodType, setFoodType] = useState('')

    const [pwAreSame, setPwAreSame] = useState(true)
    const [submittedForm, setSubmittedForm] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (password !== confirmedPassword) {
            setPwAreSame(false)
            // alert('Les deux mots de passe ne sont pas identiques.')
            return
        }
        console.log({
            lastName,
            password,
            confirmedPassword,
            timeToCook,
            foodType,
        })
        try{
            createNewUser(lastName, password, timeToCook, foodType)
            setSubmittedForm(true)
        }
        catch(error){
            alert('DEBUG : Erreur lors de la création du profil')
            console.log(error)
        }
    }

    return (
        <>
            <Sidebar />
            <div className="flex col-span-3 h-screen bg-white shadow justify-center items-center">
                <div className="w-full max-w-xs mx-auto my-10">
                    <form
                        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="lastName"
                            >
                                Nom
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                placeholder="Nom"
                                value={lastName}
                                onChange={(event) =>
                                    setLastName(event.target.value)
                                }
                                autoComplete="username"
                                onInput={(event) =>
                                    event.target.setCustomValidity('')
                                }
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="password"
                            >
                                Mot de passe
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Mot de passe"
                                value={password}
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                autoComplete="current-password"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="confirmedPassword"
                            >
                                Confirmer le mot de passe
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Confirmer le mot de passe"
                                value={confirmedPassword}
                                onChange={(event) =>
                                    setConfirmedPassword(event.target.value)
                                }
                                required
                            />
                            <p
                                className={`text-red-500 font-bold text-xs mt-2 ml-1 none  ${
                                    pwAreSame ? 'hidden' : ''
                                }`}
                            >
                                {' '}
                                Les mots de passes ne sont pas identiques{' '}
                            </p>
                        </div>

                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="timeToCook"
                            >
                                Avez-vous le temps de cuisiner?
                            </label>
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className={`rounded-full w-8 h-8 mr-2 focus:outline-none ${
                                        timeToCook === 'noTime'
                                            ? 'bg-primary'
                                            : 'bg-gray-300'
                                    }`}
                                    onClick={() => setTimeToCook('noTime')}
                                >
                                    😞
                                </button>
                                <button
                                    type="button"
                                    className={`rounded-full w-8 h-8 mr-2 focus:outline-none ${
                                        timeToCook === 'someTime'
                                            ? 'bg-primary'
                                            : 'bg-gray-300'
                                    }`}
                                    onClick={() => setTimeToCook('someTime')}
                                >
                                    😐
                                </button>
                                <button
                                    type="button"
                                    className={`rounded-full w-8 h-8 focus:outline-none ${
                                        timeToCook === 'enoughTime'
                                            ? 'bg-primary'
                                            : 'bg-gray-300'
                                    }`}
                                    onClick={() => setTimeToCook('enoughTime')}
                                >
                                    🙂
                                </button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 font-bold mb-2"
                                htmlFor="foodType"
                            >
                                Votre type d'alimentation :
                            </label>
                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className={`rounded-full w-8 h-8 mr-2 focus:outline-none ${
                                        foodType === 'vegetarien'
                                            ? 'bg-primary'
                                            : 'bg-gray-300'
                                    }`}
                                    onClick={() => setFoodType('vegetarien')}
                                >
                                    🥕
                                </button>
                                <button
                                    type="button"
                                    className={`rounded-full w-8 h-8 mr-2 focus:outline-none ${
                                        foodType === 'omnivore'
                                            ? 'bg-primary'
                                            : 'bg-gray-300'
                                    }`}
                                    onClick={() => setFoodType('omnivore')}
                                >
                                    🥩
                                </button>
                                <button
                                    type="button"
                                    className={`rounded-full w-8 h-8 focus:outline-none ${
                                        foodType === 'gourmet'
                                            ? 'bg-primary'
                                            : 'bg-gray-300'
                                    }`}
                                    onClick={() => setFoodType('gourmet')}
                                >
                                    🧑🏽‍🍳
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-primary hover:bg-opacity-50 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Valider
                            </button>
                        </div>
                        <h2 className={`mt-5 text-2xl font-bold text-center ${submittedForm ? "text-green-700" : "hidden"}`}> Utilisateur créé !</h2>

                    </form>
                </div>

            </div>
        </>
    )
}

export default AddProfile
