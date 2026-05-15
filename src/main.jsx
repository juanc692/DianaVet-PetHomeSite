import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/home.jsx'
import Schedule from './pages/schedule.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter basename="/DianaVet-PetHomeSite/">

      <Routes>

        <Route path="/" element={<App />}>

          <Route
            index
            element={<Home />}
          />

          <Route
            path="agendar-cita"
            element={<Schedule />}
          />

        </Route>

      </Routes>

    </BrowserRouter>

  </StrictMode>
)