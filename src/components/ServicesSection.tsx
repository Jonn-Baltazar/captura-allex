import './ServicesSection.css';
import { MousePointer2, Smartphone, Monitor, Briefcase, Share2 } from 'lucide-react';

const ServicesSection = () => {
    const services = [
        {
            icon: <MousePointer2 size={32} />,
            title: "É dono(a) ou gestor(a) de clínica de estética",
            desc: "Para negócios que buscam escala e velocidade."
        },
        {
            icon: <Smartphone size={32} />,
            title: "Investe em marketing, mas sente que os resultados não vêm.",
        },
        {
            icon: <Monitor size={32} />,
            title: "Quer entender onde está perdendo pacientes na jornada.",
        },
        {
            icon: <Briefcase size={32} />,
            title: "Deseja aumentar o ticket médio e o LTV dos pacientes.",
        },
        {
            icon: <Share2 size={32} />,
            title: "Quer saber como usar IA de forma prática (sem precisar ser programador)",
        }
    ];

    return (
        <section className="services-section" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>Esta aula é para você se:</h2>
                </div>

                <div className="services-grid">
                    {services.map((service, idx) => (
                        <div key={idx} className="service-card">
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h4>{service.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
