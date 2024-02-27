
import ChartComponent from '../../components/chart/ChartComponent';
import { clientList } from '../../data/clientList';
import AdminLayout from '../../utils/AdminLayout';

import './dashboard.css';

const Dashboard = () => {
    return (
        <AdminLayout>

            <section className='dashboard'>
                <div className='dashboard-wrapper'>
                    <div className='dashboard-title'>
                        <h2>Dashboard</h2>
                    </div>
                    <div className='stats'>
                        <div className='stats-top'>
                            <div className='client-card'>
                                <div className='card-title'>
                                    🏢<h3>Nombre total de clients</h3>
                                </div>
                                <p>12</p>
                            </div>
                            <div className='vehicles-card'>
                                <div className='card-title'>
                                    🚘<h3>Nombre total de Véhicules</h3>
                                </div>
                                <p>22</p>
                            </div>
                            <div className='subscribers-card'>
                                <div className='card-title'>
                                    💵<h3>Nombre total des abonnements</h3>
                                </div>
                                <p>$126584</p>
                            </div>
                            <div className='renewal-card'>
                                <div className='card-title'>
                                    ⚠️<h3>Renouvélement des abonnements</h3>
                                </div>
                                <p>1</p>
                            </div>
                        </div>
                        <div className='stats-bottom'>
                            <div className='topClient-card'>
                                <div className='card-title'>
                                    🧑<h3>Top clients</h3>
                                </div>
                                <ul className='topClient-List'>
                                    {clientList.map((client) => (
                                        <li key={client.name}>
                                            <h4>{client.name}</h4>
                                            <p>{`${client.vehicle} Véhicules`}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='vehicleType-card'>
                                <div className='card-title'>
                                    🚘<h3>Véhicules par type</h3>
                                </div>
                                <div className='vehicleType-chart'>
                                    <ChartComponent />
                                </div>
                            </div>
                            <div className='renewedClient-card'>
                                <div className='card-title'>
                                    🧑<h3>Renouvélements</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AdminLayout>
    )
}

export default Dashboard