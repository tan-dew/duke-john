import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../data/books';
import { content } from '../data/content';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import BookCard from '../components/BookCard';

const BookDetail = () => {
    const { id } = useParams();
    const book = books.find((b) => b.id === parseInt(id));

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    // Random 6 other books (Memoized)
    const otherBooks = useMemo(() => {
        return books
            .filter((b) => b.id !== (book ? book.id : -1))
            .sort(() => 0.5 - Math.random())
            .slice(0, 6);
    }, [id, book]);

    if (!book) {
        return <div className="container" style={{ padding: '4rem 0' }}>Book not found.</div>;
    }

    // Helper to map link labels
    const getLinkLabel = (siteKey) => {
        return content.linkLabels[siteKey] || content.linkLabels.default;
    };

    // Helper for button color based on site (optional logic, defaults to consistent brand or specific colors)
    const getButtonColor = (siteKey) => {
        switch (siteKey) {
            case 'rokomari': return '#22c55e'; // Green
            case 'baatighar': return '#a855f7'; // Purple
            case 'mamun': return '#3b82f6'; // Blue
            case 'seba': return '#ef4444'; // Red
            default: return '#111'; // Black
        }
    };

    return (
        <div className="container book-detail-page">
            <Link to="/" className="btn-outline secondary-btn" style={{ fontFamily: 'var(--font-bengali)' }}>
                <ArrowLeft size={16} /> {content.bookDetail.backToHome}
            </Link>

            <div className="book-detail-main">
                {/* Left: Image */}
                <div className="book-detail-image">
                    <div className="image-aspect-wrapper">
                        <img
                            src={`${import.meta.env.BASE_URL}${book.coverImage.startsWith('/') ? book.coverImage.slice(1) : book.coverImage}`}
                            alt={book.title}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.innerHTML = `<div class="placeholder-text">${book.title}</div>`;
                            }}
                        />
                    </div>
                </div>

                {/* Right: Info */}
                <div className="book-detail-info">
                    <h1 className="detail-title">{book.title}</h1>
                    <p className="detail-author">{book.author}</p>

                    <div className="action-buttons" style={{ flexWrap: 'wrap' }}>
                        {/* Dynamic Links Rendering */}
                        {book.links && book.links.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn buy-now-btn"
                                style={{ background: getButtonColor(link.site), borderColor: getButtonColor(link.site), color: '#fff' }}
                            >
                                <ShoppingCart size={18} /> {getLinkLabel(link.site)}
                            </a>
                        ))}
                    </div>

                    <div className="detail-section">
                        <h3 style={{ fontFamily: 'var(--font-bengali)' }}>{content.bookDetail.detailsTitle}</h3>
                        <p className="flap-text">
                            {book.flapText || book.description}
                        </p>
                    </div>

                    <div className="detail-section">
                        <h3 style={{ fontFamily: 'var(--font-bengali)' }}>{content.bookDetail.infoTitle}</h3>
                        <ul className="info-list" style={{ fontFamily: 'var(--font-bengali)' }}>
                            <li><strong>{content.bookDetail.publisher}:</strong> {book.publisher || 'N/A'}</li>
                            <li><strong>{content.bookDetail.published}:</strong> {book.publishedDate || 'N/A'}</li>
                            <li><strong>{content.bookDetail.pages}:</strong> {book.pageCount || 'N/A'}</li>
                            <li><strong>{content.bookDetail.type}:</strong> {book.type || 'N/A'}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Other Books */}
            <div className="related-books-section">
                <h3 style={{ fontFamily: 'var(--font-bengali)' }}>{content.bookDetail.otherBooks}</h3>
                <div className="book-grid">
                    {otherBooks.map((other) => (
                        <BookCard key={other.id} book={other} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default BookDetail;
