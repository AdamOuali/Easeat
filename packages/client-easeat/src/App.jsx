import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from './components/MainNavBar/MainNavBar.jsx';
import BodyTest from './components/BodyTest/BodyTest.jsx';

function App() {
  return (
    <>
      <div>
        <MainNavBar />
        <BodyTest />
      </div>
    </>
  );
}

export default App;
