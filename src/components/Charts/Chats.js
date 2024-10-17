import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Charts.css';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const Charts = () => {

    // Dados para o gráfico de linha (Faturamento por mês)
    const lineData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Faturamento (R$)',
                data: [5000, 6000, 7000, 8000, 9000, 8500, 9500, 11000, 10500, 12000, 11500, 12500], // Dados de exemplo
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    // Configurações para o gráfico de linha
    const lineOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Faturamento Total por Mês',
            },
        },
    };

    // Dados para o gráfico de barras (Pedidos por dia da semana)
    const barData = {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
        datasets: [
            {
                label: 'Pedidos',
                data: [50, 45, 60, 70, 65, 85, 40], // Dados de exemplo
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Configurações para o gráfico de barras
    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Pedidos por Dia da Semana',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="charts-container">
            <div className="chart">
                <Line data={lineData} options={lineOptions} />
            </div>
            <div className="chart">
                <Bar data={barData} options={barOptions} />
            </div>
        </div>
    );
};

export default Charts;