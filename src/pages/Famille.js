
import { useState, useEffect } from 'react'

function Famille() {
    const [images, setImages] = useState([])
    const [lightboxVisible, setLightboxVisible] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        fetchImages()
    }, [])

    const fetchImages = async () => {
        try {
            const response = await fetch('datas.json')
            const data = await response.json()
            setImages(data.famille)
        } 
        catch (error) {
            console.error('Error fetching images:', error)
        }
    }

    const openLightbox = (index) => {
        setCurrentImageIndex(index)
        setLightboxVisible(true)
    }

    const closeLightbox = () => {
        setLightboxVisible(false)
    }

    const nextImage = () => {
        const newIndex = (currentImageIndex + 1) % images.length
        setCurrentImageIndex(newIndex)
    }

    const prevImage = () => {
        const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
        setCurrentImageIndex(newIndex)
    }

    return (
        <div className="page">
            <section className="galerie">
                {images.map((image, index) => (
                    <img src={image.image} 
                        alt="" 
                        key={index} 
                        onClick={() => openLightbox(index)}
                    /> 
                ))}
            </section>

            {lightboxVisible && (
                    <div className="lightbox">
                        <img 
                            src={images[currentImageIndex].image}
                            alt=""
                        />
                        <button className="prev-button" onClick={prevImage}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="next-button" onClick={nextImage}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                        <button className="close-btn" onClick={closeLightbox}>
                            <i className="fas fa-times"></i>
                        </button>

                    </div>
                )}
        </div>
    )
}

export default Famille