import './SocialSidebar.css'

function SocialSidebar() {
    return (
        <aside className="social-sidebar">
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            </a>
            <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Pinterest"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12c0-2.76 1.79-5 4-5s4 2.24 4 5c0 2.76-1.79 5-4 5" />
                    <path d="M10 15l-1 4" />
                </svg>
            </a>
        </aside>
    )
}

export default SocialSidebar
