
import React from 'react';
import { Route, Routes } from "react-router-dom"
import './App.scss'
import NavPage from './features/layout/NavPage';
import Home from './features/layout/Home';

export function App() {

  return (
    <div className='App gx-0'>
      <NavPage />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <footer>Footer</footer>
    </div>
  )
}