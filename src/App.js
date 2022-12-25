import { React } from 'react'
import { GlobalStyles } from './components'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ProductPage from './Pages/ProductPage'


function App() {
    const { categoryModal } = useSelector((state) => state.modalState)

    return (
        <div>
            <GlobalStyles open={categoryModal} />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:slug" element={<ProductPage />} />

            </Routes>
        </div>
    )
}

export default App
