import './About.css'

function About() {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-image-container">
                    <img
                        src="/hero.png"
                        alt="Artist studio with paintings and brushes"
                        className="hero-image"
                    />
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission section text-center">
                <div className="container">
                    <h2 className="heading-lg italic">Our Mission</h2>
                    <p className="body-text" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
                        The purpose of The Hu Art & Education Foundation is to promote art, education, and cross-cultural understanding by supporting programs that inspire creative learning, foster cultural appreciation, and develop future leaders.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="story section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-text">
                            <h2 className="heading-lg italic">Our Story</h2>
                            <p className="body-text">
                                What began as a shared passion for color and canvas has blossomed into a beautiful family tradition. Our foundation has two remarkable artists, Zhili Hu and Zhu Shang, whose distinct styles complement and inspire one another.
                            </p>
                            <p className="body-text">
                                Through brushstrokes and vision, they explore themes of nature, emotion,
                                and the human experience. Each piece tells its own story while contributing
                                to a larger narrative of artistic collaboration and familial love.
                            </p>
                        </div>
                        <div className="story-image">
                            <img
                                src="/art1.png"
                                alt="Featured artwork"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values section">
                <div className="values-background">
                    <div className="container">
                        <div className="values-grid">
                            <div className="value-item">
                                <div className="value-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                </div>
                                <h3 className="heading-sm">Original Works</h3>
                                <p className="body-text-sm">
                                    Every piece is a one-of-a-kind creation, hand-painted with care
                                    and attention to detail.
                                </p>
                            </div>
                            <div className="value-item">
                                <div className="value-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                    </svg>
                                </div>
                                <h3 className="heading-sm">Family Legacy</h3>
                                <p className="body-text-sm">
                                    Two generations united by art, creating a collection that
                                    bridges tradition and innovation.
                                </p>
                            </div>
                            <div className="value-item">
                                <div className="value-icon">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 6v6l4 2" />
                                    </svg>
                                </div>
                                <h3 className="heading-sm">Timeless Art</h3>
                                <p className="body-text-sm">
                                    Works designed to inspire and captivate for generations,
                                    becoming treasured heirlooms.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Artists Section */}
            <section className="artists section">
                <div className="container">
                    <h2 className="heading-lg italic text-center">The Masters</h2>
                    <div className="artists-grid">
                        <div className="artist-card">
                            <div className="artist-image">
                                <img src="/art2.png" alt="Master Zhu Shang artwork" />
                            </div>
                            <h3 className="heading-md">Master Zhu Shang (赏竹)</h3>
                            <p className="body-text">
                                Shangzhu is a renowned bird-and-flower painter serving as Vice President
                                of the Zhejiang Minjian Academy of Calligraphy and Painting. He is a council
                                member of the Zhejiang International Art Exchange Association, a member of
                                the Zhejiang Artists Association, and a resident artist at the Dunhuang Center
                                of the China Artists Association.
                            </p>
                            <p className="body-text">
                                He has authored over 50 instructional painting books distributed nationwide
                                and has participated in numerous national exhibitions, receiving multiple awards.
                                His work has been featured in documentaries by Zhejiang Television including
                                "Renowned Bird-and-Flower Painter Shangzhu."
                            </p>
                        </div>
                        <div className="artist-card">
                            <div className="artist-image">
                                <img src="/art3.png" alt="Master Zhili Hu artwork" />
                            </div>
                            <h3 className="heading-md">Master Zhili Hu (胡志理)</h3>
                            <p className="body-text">
                                Zhili is a greatly accomplished artist from China with over 30 years of
                                teaching experience. He serves as a researcher at the Chinese International
                                Institute of Art, lecturer at the International Commercial Artist Association,
                                and director at the Committee of Design Experts of the Jiangsu Arts and
                                Crafts Association.
                            </p>
                            <p className="body-text">
                                During his career, he has been granted the "Excellent Mentor" awards by the
                                World Peace Art Show, the Chinese Youth Double-Dragon Art Exhibition, and
                                the National Children's Art Show. His students regularly receive gold, silver,
                                and bronze medal awards nationwide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
