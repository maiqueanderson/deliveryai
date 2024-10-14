import { useState } from 'react';
import NavbarDash from "../../../components/NavbarDash/NavbarDash";
import './Dashboard.css'; // Arquivo CSS para a estilização

const Dashboard = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <>
            <NavbarDash />
            <div className="dashboard-container">
                {isSidebarVisible && (
                    <div className="sidebar">
                        <h2>Informações</h2>
                        <p>Aqui estão algumas informações úteis.</p>
                    </div>
                )}

                <div className="content">
                    <button className="toggle-button" onClick={toggleSidebar}>
                        {isSidebarVisible ? 'Esconder Área' : 'Mostrar Área'}
                    </button>
                    <h1>Conteúdo Principal</h1>
                    {/* Conteúdo principal do dashboard */}
                </div>
            </div>
        </>
    );
};

export default Dashboard;