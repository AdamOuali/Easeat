import React, { useState } from 'react'

function formatDate(date) {
    const localDate = new Date(date)
    const year = localDate.getFullYear()
    const month = (localDate.getMonth() + 1).toString().padStart(2, '0')
    const day = localDate.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
}

function createRandomLogs(numLogs, users) {
    const logs = []
    const currentDate = new Date()
    const typesInfo = ['Alerte', 'Warning', 'Check']

    for (let i = 0; i < numLogs; i++) {
        const randomIndex = Math.floor(Math.random() * users.length)
        const user = users[randomIndex]

        const log = {
            id: i + 1,
            date: formatDate(currentDate.toISOString()),
            heure: `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
            type_information:
                typesInfo[Math.floor(Math.random() * typesInfo.length)],
            message: `Log message test ${i + 1}`,
            proprietaire_id: user.id,
        }

        logs.push(log)
    }

    return logs
}

const ButtonGenerateLogs = () => {
    const [logs, setLogs] = useState([])
    const [numLogs, setNumLogs] = useState(10)

    const handleClick = async () => {
        const response = await fetch('http://localhost:3000/api/users')
        const users = await response.json()
        const generatedLogs = createRandomLogs(numLogs, users)

        const myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')

        generatedLogs.forEach(async (log) => {
            const raw = JSON.stringify(log)

            const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow',
            }

            const response = await fetch(
                'http://localhost:3000/api/logs/add',
                requestOptions
            )
        })

        setLogs(generatedLogs)
    }

    const handleInputChange = (event) => {
        setNumLogs(event.target.value)
    }

    return (
        <div className="w-full flex justify-center pt-10 content-center items-center">
            <div class="flex justify-center items-center">
                <label
                    htmlFor="numLogs"
                    className="font-bold text-gray-700 mx-2"
                >
                    Nombre de logs à générer :
                </label>
                <input
                    type="number"
                    id="numLogs"
                    name="numLogs"
                    min="1"
                    max="100"
                    value={numLogs}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md mx-2"
                />
                <button
                    className="font-bold bg-green-800 rounded-md shadow-md p-3 text-gray-200 mx-2"
                    onClick={handleClick}
                >
                    Générer des logs
                </button>
            </div>
        </div>
    )
}

export default ButtonGenerateLogs
