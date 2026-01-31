import React, { useState, useEffect } from 'react';
import { Facebook, ShoppingBag, BookOpen, ExternalLink } from 'lucide-react';
import { content } from '../data/content';
import stylesConfig from '../data/styles.json';

const Hero = () => {
    const [displayedName, setDisplayedName] = useState('');
    const fullName = content.hero.authorName;

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setDisplayedName(fullName.substring(0, index + 1));
            index++;
            if (index === fullName.length) {
                clearInterval(interval);
            }
        }, stylesConfig.animations.heroTypewriterSpeed); // Configurable speed

        return () => clearInterval(interval);
    }, [fullName]);

    return (
        <div className="hero-section">
            <div className="hero-layout">
                <div className="hero-image-wrapper">
                    {/* User requested: Photo Left */}
                    <img
                        src={`${import.meta.env.BASE_URL}images/author/duke-john.jpg`}
                        alt="Duke John"
                        className="author-photo"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = '<div class="author-photo" style="background:#e5e5e5; display:flex; align-items:center; justify-content:center; color:#999; font-weight:600">Duke John</div>';
                        }}
                    />
                </div>

                <div className="hero-bio">
                    {/* User requested: Bio Right */}
                    <h1 style={{ minHeight: '1.2em' }}>{displayedName}</h1>
                    <p className="hero-subtitle">{content.hero.subtitle}</p>

                    <p className="bio-text">
                        {content.hero.bio}
                    </p>

                    <div className="hero-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
                        <a
                            href="https://www.facebook.com/agentdukejohn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                        >
                            <Facebook size={18} /> {content.hero.followFacebook}
                        </a>

                        <a
                            href="https://www.rokomari.com/book/author/25020/duke-john"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.8rem 1.5rem', borderRadius: '4px', textDecoration: 'none' }}
                        >
                            <ShoppingBag size={18} /> {content.hero.rokomariProfile}
                        </a>

                        <a
                            href="https://www.goodreads.com/author/list/14958728.Duke_John"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline"
                            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.8rem 1.5rem', borderRadius: '4px', textDecoration: 'none' }}
                        >
                            <BookOpen size={18} /> {content.hero.goodreadsProfile}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
