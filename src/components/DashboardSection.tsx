import './DashboardSection.css';

const DashboardSection = () => {
    return (
        <section className="dashboard-section">
            <div className="container dashboard-container">
                <div className="dashboard-content">
                    <div className="tag">Tecnologia & Dados</div>
                    <h2>Você no comando da operação (sem malabarismos)</h2>
                    <p>
                        Métricas precisas em tempo real. Esqueça relatórios
                        longos e confusos. Tenha dashboards intuitivos que mostram
                        exatamente onde seu dinheiro está rendendo.
                    </p>
                    <ul className="feature-list">
                        <li>ROI monitorado 24/7</li>
                        <li>Integração total com CRM</li>
                        <li>Relatórios automatizados</li>
                    </ul>
                    <button className="secondary-btn">Ver Exemplo de Relatório</button>
                </div>

                <div className="dashboard-visual">
                    {/* CSS Mockup of a Dashboard/Phone */}
                    <div className="phone-mockup">
                        <div className="screen">
                            <div className="app-header"></div>
                            <div className="chart-preview"></div>
                            <div className="stat-row"></div>
                            <div className="stat-row"></div>
                        </div>
                    </div>
                    <div className="desktop-mockup">
                        <div className="desktop-screen">
                            <div className="graph-line"></div>
                            <div className="data-grid">
                                <div className="data-item"></div>
                                <div className="data-item"></div>
                                <div className="data-item"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardSection;
