import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { content } from '../data/content';
import stylesConfig from '../data/styles.json';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    const [placeholder, setPlaceholder] = useState('');
    const typingData = content.search.typingData;
    const animationSpeed = stylesConfig.animations.searchTypewriterSpeed;
    const delay = stylesConfig.animations.searchTypewriterDelay;

    useEffect(() => {
        let currentIdx = 0;
        let charIdx = 0;
        let isDeleting = false;
        let timeoutId;

        const type = () => {
            const currentText = typingData[currentIdx];

            if (isDeleting) {
                setPlaceholder(currentText.substring(0, charIdx - 1));
                charIdx--;
            } else {
                setPlaceholder(currentText.substring(0, charIdx + 1));
                charIdx++;
            }

            let typeSpeed = animationSpeed;

            if (!isDeleting && charIdx === currentText.length) {
                // Finished typing word, wait before deleting
                typeSpeed = delay;
                isDeleting = true;
            } else if (isDeleting && charIdx === 0) {
                // Finished deleting, move to next word
                isDeleting = false;
                currentIdx = (currentIdx + 1) % typingData.length;
                typeSpeed = 500;
            }

            timeoutId = setTimeout(type, typeSpeed);
        };

        type();

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="search-container">
            <div className="search-wrapper">
                <Search className="search-icon" size={20} />
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>
        </div>
    );
};

export default SearchBar;
