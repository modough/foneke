import './fleetSection.css';
import fleet from '../../assets/fleet.png';

const FleetSection = () => {
    return (
        <section className='landing-section-six'>
            <article className='landingpage-middle-fifth'>
                <div className='middle-left-fifth'>
                    <h2>Gagnez en efficacité et reprenez le contrôle de votre flotte</h2>
                    <p>
                        Gagnez en efficacité et reprenez le contrôle de votre flotte
                        Une Flotte à jour grâce aux informations en temps réel.
                        Visibilité sur l&apos;état de l&apos;ensemble des équipements.
                        Informations disponibles  24h/24 sur Mobile et sur Web.
                    </p>
                    <p>
                        Être Alerté en temps réel pour une ou plusieurs situations bien définies.
                    </p>
                    <button className='loginBtn'>Essayez Fonéke</button>
                </div>
                <div className='middle-right-fifth'>
                    <img src={fleet} alt='' width={750} />
                </div>
            </article>
        </section>
    )
}

export default FleetSection