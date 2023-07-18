import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Portraits from './pages/Portraits'
import Mariage from './pages/Mariage'
import Famille from './pages/Famille'
import Architecture from './pages/Architecture'
import Mode from './pages/Mode'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Header from './components/Header'
import Menu from './components/Menu'
import About from './About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Loader />
      <Header />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Menu />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/mariage" element={<Mariage/>} />
        <Route path="/famille" element={<Famille />} />
        <Route path="/mode" element={<Mode />} />
        <Route path="/architecture" element={<Architecture />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
