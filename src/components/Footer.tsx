import './Footer.css';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo white">
                            <span>Alex</span>Santana
                        </div>
                        <p>Marketing, Automação e Inteligência Artificial</p>
                        <div className="social-links">
                            <a href="#"><Instagram size={20} /></a>
                            <a href="#"><Mail size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h4>Certificações</h4>
                        <div className="badges">
                            <span className="badge">Google Partner</span>
                            <span className="badge">Meta Business</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Alex Santana. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
