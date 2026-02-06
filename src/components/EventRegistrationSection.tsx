import './EventRegistrationSection.css';
import { Calendar, ArrowRight } from 'lucide-react';

const EventRegistrationSection = () => {
    return (
        <section className="event-registration-section" id="registration">
            <div className="container registration-container">
                <div className="registration-content">
                    <div className="event-badge">
                        <Calendar size={16} />
                        <span>Próximo Evento: 11 de Fevereiro de 2026</span>
                    </div>
                    <h2>Garanta a sua vaga!</h2>
                    <p>
                        Descubra o método exato que uso para escalar capitações de leads desqualificados, transformando-os em uma máquina de vendas lucrativa e previsível.
                    </p>
                    <ul className="event-benefits">
                        <li>📅 Data: 11 de Fevereiro de 2026</li>
                        <li>🕐 Horário: 20h (horário de Brasília)</li>
                        <li>⏱️ Duração: Aproximadamente 90 minutos</li>
                        <li>📍 Formato: 100% online e ao vivo</li>
                    </ul>
                    <a href="#" className="register-btn">
                        Garantir Minha Vaga Gratuitamente
                        <ArrowRight size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EventRegistrationSection;
