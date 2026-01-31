import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
    return (
        <Link to={`/book/${book.id}`} className="book-card">
            <div className="book-card-image-wrapper">
                <img
                    src={book.coverImage}
                    alt={book.title}
                    className="book-card-image"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.style.backgroundColor = '#f0f0f0';
                        e.target.parentNode.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#999;font-size:0.8rem;padding:1rem;text-align:center">${book.title}</div>`;
                    }}
                />
            </div>

            <div className="book-card-info">
                <h3 className="book-card-title">{book.title}</h3>
                <div className="book-card-meta">
                    {book.type && <span className="meta-type">{book.type}</span>}
                    {book.type && book.publishedDate && <span className="meta-separator"> | </span>}
                    {book.publishedDate && <span className="meta-date">{book.publishedDate}</span>}
                </div>
            </div>
        </Link>
    );
};

export default BookCard;
