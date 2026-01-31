import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import { content } from './data/content';
import stylesConfig from './data/styles.json';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply styles from JSON on mount
  useEffect(() => {
    const root = document.documentElement;
    const { colors, fonts } = stylesConfig.theme;

    // Colors
    root.style.setProperty('--color-bg', colors.bg);
    root.style.setProperty('--color-card-bg', colors.cardBg);
    root.style.setProperty('--color-text-main', colors.textMain);
    root.style.setProperty('--color-text-muted', colors.textMuted);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--color-border', colors.border);

    // New Extracted Colors
    root.style.setProperty('--color-btn-bg', colors.buttonBg);
    root.style.setProperty('--color-btn-text', colors.buttonText);
    root.style.setProperty('--color-search-bg', colors.searchBg);
    root.style.setProperty('--color-header-bg', colors.headerBg);
    root.style.setProperty('--color-footer-bg', colors.footerBg);
    root.style.setProperty('--color-nav-text', colors.navText);

    root.style.setProperty('--color-btn-profile-bg', colors.profileButtonBg);
    root.style.setProperty('--color-btn-profile-text', colors.profileButtonText);
    root.style.setProperty('--color-secondary-btn-bg', colors.secondarybutton);
    root.style.setProperty('--color-secondary-btn-text', colors.secondarybuttontext);

    // Typography
    if (stylesConfig.theme.typography) {
      root.style.setProperty('--font-weight-nav', stylesConfig.theme.typography.navFontWeight);
    }

    // Fonts
    // Note: Fonts are loaded in index.css via @import, this sets the variable usage
    root.style.setProperty('--font-main', fonts.main);
    root.style.setProperty('--font-bengali', fonts.bengali);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <div className={`app-wrapper ${isMenuOpen ? 'menu-open' : ''}`} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <nav>
          <div className="container nav-inner">
            <Link to="/" className="logo">DUKE JOHN</Link>

            {/* Desktop Nav */}
            <div className="nav-links desktop-only">
              <Link to="/">{content.nav.home}</Link>
              <a href="https://www.rokomari.com/book/author/25020/duke-john" target="_blank" rel="noreferrer">{content.nav.rokomari}</a>
              <a href="https://baatighar.com/shop/author/duke-john-dujo-11000" target="_blank" rel="noreferrer">{content.nav.baatighar}</a>
              <a href="https://boighor.com/authordetails/A053C" target="_blank" rel="noreferrer">{content.nav.boighor}</a>
              <a href="https://www.goodreads.com/author/list/14958728.Duke_John" target="_blank" rel="noreferrer">{content.nav.goodreads}</a>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Sidebar */}
          <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
              <span className="logo">DUKE JOHN</span>
              <button className="close-btn" onClick={toggleMenu}><X size={24} /></button>
            </div>
            <div className="sidebar-links">
              <Link to="/" onClick={toggleMenu}>{content.nav.home}</Link>
              <a href="https://www.rokomari.com/book/author/25020/duke-john" target="_blank" rel="noreferrer" onClick={toggleMenu}>{content.nav.rokomari}</a>
              <a href="https://baatighar.com/shop/author/duke-john-dujo-11000" target="_blank" rel="noreferrer" onClick={toggleMenu}>{content.nav.baatighar}</a>
              <a href="https://boighor.com/authordetails/A053C" target="_blank" rel="noreferrer" onClick={toggleMenu}>{content.nav.boighor}</a>
              <a href="https://www.goodreads.com/author/list/14958728.Duke_John" target="_blank" rel="noreferrer" onClick={toggleMenu}>{content.nav.goodreads}</a>
            </div>
          </div>
          {isMenuOpen && <div className="sidebar-overlay" onClick={toggleMenu}></div>}
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<BookDetail />} />
        </Routes>

        <footer>
          <div className="container">
            <p>{content.footer.copyright}</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
