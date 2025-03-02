import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather from './components/Weather.jsx';
import MainMenu from './components/MainMenu.jsx';

function App() {


  return (
    <>
      <MainMenu />
      <Weather />
    </>
  )
}

export default App
