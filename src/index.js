import App from './App'
import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { createRoot } from 'react-dom/client'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
       <BrowserRouter>
            <App/>
       </BrowserRouter>
    </React.StrictMode>,
);

