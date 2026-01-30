import React from 'react';
import { Facebook, ShoppingBag, BookOpen, ExternalLink } from 'lucide-react';
import { content } from '../data/content';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-layout">
                <div className="hero-image-wrapper">
                    {/* User requested: Photo Left */}
                    <img
                        src="/images/author/duke-john.jpg"
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
                    <h1>ডিউক জন</h1>
                    <p className="hero-subtitle">{content.hero.subtitle}</p>

                    <p className="bio-text">
                        জনপ্রিয় থ্রিলার এবং রহস্য রোমাঞ্চ লেখক ডিউক জন। তার লেখনীতে উঠে আসে অদেখা ভুবনের গল্প,
                        যা পাঠকদের নিয়ে যায় এক অদ্ভুত এবং রোমাঞ্চকর জগতে। পিশাচ কাহিনি থেকে শুরু করে সাইকোলজিক্যাল থ্রিলার—সব ঘরানাতেই তার অবাধ বিচরণ।
                        পাঠকদের শিহরিত করতে তার জুড়ি মেলা ভার।
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
