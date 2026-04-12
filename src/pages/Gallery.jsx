import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'

// Artwork data - EASILY EDITABLE
// Replace the src paths with your actual painting images
// Add or remove items as needed
const artworks = [
    {
        id: 1,
        title: "water lily",
        artist: "Master Zhu Shang",
        // price: "$450",
        src: "/art-s-3.PNG",
        status: "available" // "available", "sold", or "inquiry"
    },
    {
        id: 2,
        title: "cherry bird",
        artist: "Master Zhu Shang",
        // price: "$380",
        src: "/art2.png",
        status: "available"
    },
    {
        id: 3,
        title: "San Mateo downtown",
        artist: "Master Zhili Hu",
        // price: "$520",
        src: "/art3.png",
        status: "sold"
    },
    {
        id: 4,
        title: "lily pad",
        artist: "Master Zhu Shang",
        // price: "$600",
        src: "/art-s-1.PNG",
        status: "available"
    },
    {
        id: 5,
        title: "Filoli garden",
        artist: "Master Zhili Hu",
        // price: "$420",
        src: "/art5.png",
        status: "available"
    },
    {
        id: 6,
        title: "Peony",
        artist: "Master Zhu Shang",
        // price: "$550",
        src: "/art-s-4.JPEG",
        status: "inquiry"
    }
]

function Gallery() {
    const [filter, setFilter] = useState('all')

    const filteredArtworks = filter === 'all'
        ? artworks
        : artworks.filter(art => art.artist.includes(filter))

    return (
        <div className="gallery-page">
            <section className="gallery-header section">
                <div className="container text-center">
                    <h1 className="heading-xl">Original Works</h1>
                    <p className="body-text">
                        Explore our collection of original paintings, each a unique expression
                        of artistic vision and craftsmanship.
                    </p>
                </div>
            </section>

            <section className="gallery-filters">
                <div className="container">
                    <div className="filter-buttons">
                        <button
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            All Works
                        </button>
                        <button
                            className={`filter-btn ${filter === 'Zhu Shang' ? 'active' : ''}`}
                            onClick={() => setFilter('Zhu Shang')}
                        >
                            Master Zhu Shang
                        </button>
                        <button
                            className={`filter-btn ${filter === 'Zhili Hu' ? 'active' : ''}`}
                            onClick={() => setFilter('Zhili Hu')}
                        >
                            Master Zhili Hu
                        </button>
                    </div>
                </div>
            </section>

            <section className="gallery-grid-section section">
                <div className="container">
                    <div className="gallery-grid">
                        {filteredArtworks.map(artwork => (
                            <div key={artwork.id} className="artwork-card">
                                <div className="artwork-image">
                                    {artwork.status === 'sold' && (
                                        <span className="artwork-badge sold">Sold</span>
                                    )}
                                    {artwork.status === 'inquiry' && (
                                        <span className="artwork-badge inquiry">Inquire</span>
                                    )}
                                    <img
                                        src={artwork.src}
                                        alt={artwork.title}
                                    />
                                </div>
                                <div className="artwork-info">
                                    <h3 className="artwork-title">{artwork.title}</h3>
                                    <p className="artwork-artist">{artwork.artist}</p>
                                    <p className="artwork-price">{artwork.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="gallery-cta section">
                <div className="container text-center">
                    <h2 className="heading-md">Interested in a Piece?</h2>
                    <p className="body-text">
                        Contact us to learn more about any artwork or to discuss custom commissions.
                    </p>
                    <a href="#contact" className="cta-button">Get in Touch</a>
                </div>
            </section>
        </div>
    )
}

export default Gallery
