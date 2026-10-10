import './Footer.css'

function Footer() {
    return (
        <footer className="footer" id="contact">
            {/* Social Media Section at the end of website */}
            <div className="footer-social-section">
                <div className="footer-social-container">
                    <div className="footer-social-info">
                        <span className="social-badge">Social Media</span>
                        <h3 className="social-heading">Connect With The Foundation</h3>
                        <p className="social-subtext">
                            Follow us on Facebook to stay updated with our latest art exhibitions, community programs, and creative news.
                        </p>
                    </div>
                    <a
                        href="https://www.facebook.com/profile.php?id=61588418010198"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook-button"
                        aria-label="Facebook Page"
                    >
                        <svg className="facebook-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        <span>Visit Our Facebook Page</span>
                    </a>
                </div>
            </div>

            <div className="footer-container">
                <div className="footer-brand">
                    <h3 className="footer-logo">The Hu Art & Education Foundation</h3>
                    <p className="footer-tagline">Two artists, one family legacy</p>

                    <div className="footer-meta-info">
                        <div className="meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>19 Irving Ave., Atherton, CA</span>
                        </div>
                        <div className="meta-item">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                            <span>Charity ID: 41-2952929</span>
                        </div>
                    </div>
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
                        <h4>Contact & Social</h4>
                        <ul>
                            <li className="footer-contact-item">
                                <span className="contact-label">Email Us</span>
                                <a href="mailto:hu.foundation.0@gmail.com">hu.foundation.0@gmail.com</a>
                            </li>
                            <li className="footer-contact-item">
                                <span className="contact-label">Facebook</span>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61588418010198"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer-link-highlight"
                                >
                                    Facebook Profile
                                </a>
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
                <p>© 2026 The Hu Art & Education Foundation. All rights reserved. • Charity ID: 41-2952929 • 19 Irving Ave., Atherton, CA</p>
            </div>
        </footer>
    )
}

export default Footer
