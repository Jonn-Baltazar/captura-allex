import './TestimonialsSection.css';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Rafael Santos",
            role: "E-commerce Founder",
            content: "A escala que conseguimos com as campanhas de Google Ads foi surreal. Saímos de 10k para 100k em 6 meses.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Mariana Costa",
            role: "Diretora de Marketing",
            content: "Profissionalismo e transparência. Os relatórios quinzenais nos dão segurança total sobre onde estamos investindo.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Carlos Eduardo",
            role: "CEO TechStart",
            content: "A estratégia de inbound aliada ao tráfego pago mudou nosso jogo. O lead chega muito mais qualificado.",
            image: "https://randomuser.me/api/portraits/men/85.jpg"
        }
    ];

    return (
        <section className="testimonials-section" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <h2>O Que Nossos Clientes Dizem</h2>
                    <p>Confiança construída com resultados reais.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="testimonial-card">
                            <div className="testimonial-header">
                                <img src={t.image} alt={t.name} className="client-avatar" />
                                <div>
                                    <h4>{t.name}</h4>
                                    <span className="client-role">{t.role}</span>
                                </div>
                            </div>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" color="#FFD700" />)}
                            </div>
                            <p>"{t.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
