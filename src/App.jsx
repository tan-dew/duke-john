import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import { content } from './data/content';

function App() {
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
