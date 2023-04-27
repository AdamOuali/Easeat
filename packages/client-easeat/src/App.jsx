import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Error404 from './pages/Error404'
import Calendrier from './pages/Calendrier'
import DashboardHome from './pages/DashboardHome'

function App() {
    return (
        <>
            <div className="grid grid-cols-4">
                <BrowserRouter>
                    <Routes>
                        {/* <Route path="/" element={<DashboardHome />} /> */}
                        <Route path="/" element={<DashboardHome />} />
                        <Route path='/dashboard' element={<DashboardHome />} />
                        <Route path="/profils" element={<Sidebar />} />
                        <Route path="/calendrier" element={<Calendrier />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/parametres" element={<Error404 />} />
                        <Route path="*" element={<Error404 />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App
