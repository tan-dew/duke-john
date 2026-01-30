import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { content } from '../data/content';
import { books } from '../data/books';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const [placeholder, setPlaceholder] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const words = content.search.typingData;

    // Typewriter effect
    useEffect(() => {
        if (words.length === 0) return;

        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 1000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
            setPlaceholder(words[index].substring(0, subIndex));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    return (
        <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
                type="text"
                placeholder={content.search.placeholder + " | " + placeholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
                style={{ fontFamily: 'var(--font-bengali), var(--font-main)' }} // Ensure Bengali font support
            />
        </div>
    );
};

export default SearchBar;
