import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portraits from './pages/Portraits'
import Mariage from './pages/Mariage'
import Famille from './pages/Famille'
import Architecture from './pages/Architecture'
import Mode from './pages/Mode'
import About from './pages/About'
import Footer from './components/Footer'
import Loader from './components/Loader'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Loader />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/portraits" element={<Portraits />} />
        <Route exact path="/mariage" element={<Mariage/>} />
        <Route exact path="/famille" element={<Famille />} />
        <Route exact path="/mode" element={<Mode />} />
        <Route exact path="/architecture" element={<Architecture />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
