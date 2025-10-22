import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Frontend = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Frontend
