import './GrowthSection.css';
import { Search, Magnet, Brain, Handshake, TrendingUp } from 'lucide-react';

const GrowthSection = () => {
    const cards = [
        {
            icon: <Search size={32} />,
            title: "Descoberta",
            description: "O paciente nem te encontra.",
            highlight: "(você é invisível)"
        },
        {
            icon: <Magnet size={32} />,
            title: "Atração",
            description: "Te encontrou, mas não se interessou.",
            highlight: "Parece igual aos outros"
        },
        {
            icon: <Brain size={32} />,
            title: "Consideração",
            description: "Se interessou, mas não confia.",
            highlight: "Falta prova social"
        },
        {
            icon: <TrendingUp size={32} />,
            title: "Ação",
            description: "Quase fechou, mas desistiu.",
            highlight: "Atendimento demorado ou confuso"
        },
        {
            icon: <Handshake size={32} />,
            title: "Fidelização",
            description: "Comprou uma vez e sumiu.",
            highlight: "Não virou embaixador"
        }
    ];

    return (
        <section className="growth-section">
            <div className="container">
                <div className="growth-header">
                    <h2>O problema não é o marketing.<br />
                        É a falta de estratégia na jornada.</h2>
                    <br />
                    <h3>
                        Sua clínica perde pacientes em 5 pontos críticos:
                    </h3>
                </div>

                <div className="growth-grid">
                    {cards.map((card, index) => (
                        <div key={index} className="growth-card">
                            <div className="card-icon">{card.icon}</div>
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                            <div className="card-highlight">{card.highlight}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GrowthSection;
