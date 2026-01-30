import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';
import { books } from '../data/books';
import { content } from '../data/content';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [shuffledBooks, setShuffledBooks] = useState([]);

    // Randomize books on mount
    useEffect(() => {
        setShuffledBooks([...books].sort(() => 0.5 - Math.random()));
    }, []);

    // Search Logic: Matches Bengali Title OR Phonetic Title OR Publisher
    const filteredBooks = shuffledBooks.filter((book) => {
        const term = searchTerm.toLowerCase();
        return (
            book.title.toLowerCase().includes(term) ||
            (book.phoneticTitle && book.phoneticTitle.toLowerCase().includes(term)) ||
            (book.publisher && book.publisher.toLowerCase().includes(term))
        );
    });

    return (
        <div className="container">
            <Hero />

            <div id="books" style={{ paddingTop: '2rem' }}>
                <h2 style={{ marginBottom: '2rem', fontFamily: 'var(--font-bengali)' }}>{content.home.sectionTitle}</h2>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                {filteredBooks.length > 0 ? (
                    <div className="book-grid">
                        {filteredBooks.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </div>
                ) : (
                    <p style={{ color: '#666', textAlign: 'center', padding: '2rem', fontFamily: 'var(--font-bengali)' }}>
                        {content.search.noResults}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Home;
