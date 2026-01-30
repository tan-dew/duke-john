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

    // Random 6 other books
    // MEMOIZED so it doesn't re-randomize on every re-render, but will on every mount (refresh/navigation)
    const otherBooks = useMemo(() => {
        return books
            .filter((b) => b.id !== (book ? book.id : -1))
            .sort(() => 0.5 - Math.random())
            .slice(0, 6);
    }, [id, book]);

    if (!book) {
        return <div className="container" style={{ padding: '4rem 0' }}>Book not found.</div>;
    }

    return (
        <div className="container book-detail-page">
            <Link to="/" className="btn-outline back-btn" style={{ fontFamily: 'var(--font-bengali)' }}>
                <ArrowLeft size={16} /> {content.bookDetail.backToHome}
            </Link>

            <div className="book-detail-main">
                {/* Left: Image */}
                <div className="book-detail-image">
                    <div className="image-aspect-wrapper">
                        <img
                            src={book.coverImage}
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
                        {/* Rokomari Link */}
                        {book.purchaseLink && (
                            <a href={book.purchaseLink} target="_blank" rel="noopener noreferrer" className="btn buy-now-btn" style={{ background: '#22c55e', borderColor: '#22c55e' }}>
                                <ShoppingCart size={18} /> {content.bookDetail.buyRokomari}
                            </a>
                        )}

                        {/* Mamun Books Link */}
                        {book.purchaseLinkMamun && (
                            <a href={book.purchaseLinkMamun} target="_blank" rel="noopener noreferrer" className="btn buy-now-btn" style={{ background: '#3b82f6', borderColor: '#3b82f6' }}>
                                <ShoppingCart size={18} /> {content.bookDetail.buyMamun}
                            </a>
                        )}

                        {/* Baatighar Link */}
                        {book.purchaseLinkBaatighar && (
                            <a href={book.purchaseLinkBaatighar} target="_blank" rel="noopener noreferrer" className="btn buy-now-btn" style={{ background: '#a855f7', borderColor: '#a855f7' }}>
                                <ShoppingCart size={18} /> {content.bookDetail.buyBaatighar}
                            </a>
                        )}
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
