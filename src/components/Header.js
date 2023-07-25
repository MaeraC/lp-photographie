import { useState, useEffect } from "react"
import { Link } from "react-router-dom" 

function Header() {
    const [images, setImages] = useState([])

    useEffect(() => {
        fetchImages()
    }, [])

    const fetchImages = async () => {
        try {
            const response = await fetch('datas.json')
            const data = await response.json()
            setImages(data.logo)
        } 
        catch (error) {
            console.error('Error fetching images:', error)
        }
    }

    return (
        <header>
            <nav className="header-nav">
                {images.map((image) => (
                    <Link to="/" className="logo"><img src={image.image} alt="Logo LP Studio "/><span>LP Photographie</span></Link>
                ))}
                <ul>
                    <li><Link to="/menu">Réalisations</Link></li>
                    <li><Link to="/">À propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header