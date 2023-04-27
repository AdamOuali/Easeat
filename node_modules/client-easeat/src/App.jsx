import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';


import AddProfile from './components/AddProfile/AddProfile.jsx'
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
                        <Route path="/" element={<DashboardHome />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/calendrier" element={<Calendrier />} />
                        <Route path="*" element={<Error404 />} />
                        <Route path="/TestProfile" element={<AddProfile />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;
