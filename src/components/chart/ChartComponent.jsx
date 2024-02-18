import './chartComponent.css';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
    datasets: [
        {
            label: 'Ventes',
            data: [12, 19, 3, 5, 2, 3, 9],
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
        },
    ],
};
const ChartComponent = () => {
    return (
        <>
            <h2>Ventes par mois</h2>
            <Bar data={data} />
        </>
    )
}

export default ChartComponent