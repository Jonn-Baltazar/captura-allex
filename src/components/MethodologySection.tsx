import './MethodologySection.css';
import { UserCheck, Zap, Database, Globe } from 'lucide-react';

const MethodologySection = () => {
    return (
        <section className="methodology-section" id="methodology">
            <div className="container">
                <div className="methodology-header">
                    <h2>Com Gestão de Jornada de Compra <br /> com Inteligência Artificial, você:</h2>
                </div>

                <div className="methodology-grid">
                    {/* Top Left */}
                    <div className="method-item top-left">
                        <div className="icon-box"><UserCheck size={24} /></div>
                        <h3>Identifica em qual etapa está perdendo pacientes</h3>
                    </div>

                    {/* Top Right */}
                    <div className="method-item top-right">
                        <div className="icon-box"><Zap size={24} /></div>
                        <h3>Otimiza cada ponto de contato com ações estratégicas</h3>
                    </div>

                    {/* Center Graphic */}
                    <div className="center-graphic">
                        <div className="big-a">IA</div>
                        <div className="center-card">
                            <h4>Usa IA para automatizar sem perder o toque humano</h4>
                        </div>
                    </div>

                    {/* Bottom Left */}
                    <div className="method-item bottom-left">
                        <div className="icon-box"><Globe size={24} /></div>
                        <h3>Acompanha indicadores de sucesso em tempo real</h3>
                    </div>

                    {/* Bottom Right */}
                    <div className="method-item bottom-right">
                        <div className="icon-box"><Database size={24} /></div>
                        <h3>Transforma sua clínica em uma operação previsível</h3>
                    </div>
                </div>

                <div className="methodology-stats-container">
                    {[
                        { value: "92%", label: "Resultados a 1º Semestre" },
                        { value: "50+", label: "Clientes Satisfeitos" },
                        { value: "98%", label: "Taxa de Retenção" },
                        { value: "5x", label: "ROI Médio" },
                    ].map((stat, idx) => (
                        <div key={idx} className="method-stat-item">
                            <div className="method-stat-value">{stat.value}</div>
                            <div className="method-stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MethodologySection;
