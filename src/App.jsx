import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import { content } from './data/content';
import stylesConfig from './data/styles.json';

function App() {
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

  return (
    <Router>
      <div className="app-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <nav>
          <div className="container nav-inner">
            <Link to="/" className="logo">DUKE JOHN</Link>
            <div className="nav-links">
              <Link to="/">{content.nav.home}</Link>
              <a href="https://www.rokomari.com/book/author/25020/duke-john" target="_blank" rel="noreferrer">{content.nav.rokomari}</a>
              <a href="https://baatighar.com/shop/author/duke-john-dujo-11000" target="_blank" rel="noreferrer">{content.nav.baatighar}</a>
              <a href="https://boighor.com/authordetails/A053C" target="_blank" rel="noreferrer">{content.nav.boighor}</a>
              <a href="https://www.goodreads.com/author/list/14958728.Duke_John" target="_blank" rel="noreferrer">{content.nav.goodreads}</a>
            </div>
          </div>
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
