import { useState } from 'react'
import './index.css'
import Login from './Components/Login/Login'
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
    return (
        <>
            <div className="App">
                {/* <Login /> */}
                <Sidebar />
            </div>
        </>
    )
}


export default App;
