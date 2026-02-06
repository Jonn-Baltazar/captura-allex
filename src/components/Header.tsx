import './Header.css';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                <div className="logo">
                    <span>Alex</span>Santana
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#services" onClick={() => setIsMenuOpen(false)}>Serviços</a>
                    <a href="#methodology" onClick={() => setIsMenuOpen(false)}>Metodologia</a>
                    <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
                    <a href="#contact" className="cta-button-small" onClick={() => setIsMenuOpen(false)}>Falar com Especialista</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
