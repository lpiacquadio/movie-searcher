import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Detail } from './pages/Detail'

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route index path="/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}
