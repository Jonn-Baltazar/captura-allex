import './AboutSection.css';
import { TrendingUp, Users } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="about-section" id="about">
            <div className="container about-container">
                <div className="about-image-wrapper">
                    <img
                        src="/src/assets/alex-profile.jpg"
                        alt="Alex Santana"
                        className="about-image"
                        onError={(e) => {
                            e.currentTarget.src = "/src/assets/alexAbout.jpeg"; // Fallback
                        }}
                    />
                    <div className="experience-badge">
                        <span className="years">4+</span>
                        <span className="label">Anos de Mercado</span>
                    </div>
                </div>

                <div className="about-content">
                    <div className="section-tag">Sobre o Especialista</div>
                    <h2>Alex Santana</h2>
                    <p className="role">Estrategista Digital & Growth Hacker</p>

                    <div className="bio-text">
                        <p>
                            Especialista em gestão da jornada de compra, automações, inteligência artificial e construção de funis de alta conversão.
                            Atuando, nos últimos 4 anos, com <strong>pequenas e médias empresas</strong>, ajudando negócios a saírem da estagnação de faturamento e a se tornarem máquinas de aquisição de clientes.
                        </p>
                        <p>
                            Minha metodologia combina <strong>análise de dados avançada</strong> com
                            <strong>criatividade estratégica </strong>, garantindo que cada real investido
                            retorne como lucro para o seu bolso.
                        </p>
                    </div>

                    <div className="achievements-grid">
                        <div className="achievement">
                            <TrendingUp size={24} />
                            <span>+R$ 2M Gerados em vendas</span>
                        </div>
                        <div className="achievement">
                            <Users size={24} />
                            <span>+70 Clientes Atendidos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
