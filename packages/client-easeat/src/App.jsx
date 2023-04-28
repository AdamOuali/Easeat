import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route, Form } from 'react-router-dom';


import AddProfile from './components/AddProfile/AddProfile.jsx'
import Login from './components/Login/Login.jsx'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Error404 from './pages/Error404'
import Agenda from './pages/Agenda'
import DashboardHome from './pages/DashboardHome'
import CardProfile from './components/CardProfile/CardProfile';
import Profiles from './pages/Profiles';

function App() {
    return (
        <>
            <div className="grid grid-cols-4">
                <BrowserRouter>
                    <Routes>
                        {/* ROUTES PROD */}
                        <Route path="/" element={<DashboardHome />} />
                        <Route path='/dashboard' element={<DashboardHome />} />
                        <Route path="/profils" element={<Profiles />} />
                        <Route path="/agenda" element={<Agenda />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/parametres" element={<Error404 />} />
                        <Route path="*" element={<Error404 />} />

                        {/* ROUTES TEST */}
                        <Route path="/new-profile" element={<AddProfile />} />
                        <Route path="/TestProfile2" element={<CardProfile />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    )
}

export default App;
