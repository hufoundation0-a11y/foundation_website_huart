import './Footer.css'

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3 className="footer-logo">The Hu Art & Education Foundation</h3>
                    <p className="footer-tagline">Two artists, one family legacy</p>
                </div>

                <div className="footer-links">
                    <div className="footer-section">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="/">About</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Connect</h4>
                        <ul>
                            <li className="footer-contact-item">
                                <span className="contact-label">Email Us</span>
                                <a href="mailto:hu.foundation.0@gmail.com">hu.foundation.0@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-newsletter">
                    <h4>Stay Inspired</h4>
                    <p>Subscribe for updates on new works and exhibitions.</p>
                    <form className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="newsletter-input"
                        />
                        <button type="submit" className="newsletter-button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 The Hu Art & Education Foundation. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
