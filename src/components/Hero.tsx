import './Hero.css';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-accent"></div>
            <div className="container hero-content">
                <div className="hero-badge">🔴 WEBINÁRIO AO VIVO | 11 de Fevereiro às 20h</div>
                <h1>
                    Transforme sua clínica em uma <br />
                    <span className="gradient-text">Máquina Previsível de Lucro</span> <br />
                    com Inteligência Artificial.
                </h1>
                <p>
                    Aula gratuita: Como dominar a jornada de compra do paciente
                    com Inteligência Artificial e aumentar seu faturamento em 15-20%

                </p>
                <div className="hero-cta-group">
                    <button className="primary-btn">
                        Quero me inscrever agora!
                    </button>
                </div>

                <div className="scroll-indicator">
                    <ArrowDown size={24} className="animate-bounce" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
