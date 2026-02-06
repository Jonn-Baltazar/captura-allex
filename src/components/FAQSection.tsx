import './FAQSection.css';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Qual o investimento mínimo para começar?",
            answer: "O evento é 100% gratuito!"
        },
        {
            question: "Quando será o evento?",
            answer: "📅 Data: 11 de Fevereiro de 2026,🕐 Horário: 20h (horário de Brasília),⏱️ Duração: Aproximadamente 90 minutos,📍 Formato: 100% online e ao vivo."
        },
        {
            question: "O que irei receber?",
            answer: "→ Apresentação completa da jornada de compra → Mapa visual dos pontos de contato estratégicos → Indicadores de sucesso para cada etapa → Como aplicar IA em cada fase da jornada"
        }
    ];

    return (
        <section className="faq-section" id="faq">
            <div className="container">
                <div className="section-header">
                    <h2>Tire Suas Dúvidas</h2>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`faq-item ${openIndex === idx ? 'active' : ''}`}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
