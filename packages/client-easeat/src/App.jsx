import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Error404 from './pages/Error404'
import Calendrier from './pages/Calendrier'

function App() {
    return (
        <>
            <div class="grid grid-cols-4">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Sidebar />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/calendrier" element={<Calendrier />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
