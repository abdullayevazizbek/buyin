import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'swiper/css'
import { store } from './redux'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.querySelector('.wrapper'))

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
