import { useState, useEffect } from 'react';
import NavbarDash from "../NavbarDash/NavbarDash";
import './Sidebar.css'; // Arquivo CSS para a estilização
import { Link } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        // Fecha o sidebar automaticamente no mobile
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsSidebarVisible(false);
            } else {
                setIsSidebarVisible(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Executa quando o componente é montado

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <NavbarDash toggleSidebar={toggleSidebar} /> {/* Passa a função para o Navbar */}
            <div className="dashboard-container">
                {isSidebarVisible && (
                    <div className="sidebar ">

                        <h6>Inicial</h6>
                        <Link className='sidebarLink'>
                            <p>Dashboard</p>
                        </Link>
                        <Link className='sidebarLink'>
                            <p>Relatórios</p>
                        </Link>

                        <h6>Cardápio</h6>
                        <Link className='sidebarLink'>
                            <p>Adicionar Item</p>
                        </Link>
                        <Link className='sidebarLink'>
                            <p>Remover Item</p>
                        </Link>
                        <Link className='sidebarLink'>
                            <p>Alterar Item</p>
                        </Link>

                        <h6>Pedidos</h6>
                        <Link className='sidebarLink'>
                            <p>Abertos</p>
                        </Link>
                        <Link className='sidebarLink'>
                            <p>Finalizados</p>
                        </Link>
                      
                          


                    </div>
                )}

                <div className="content">
                    {/* O conteúdo da página será injetado aqui */}
                    {children}
                </div>
            </div>
        </>
    );
};

export default Sidebar;