import Card from '../../components/card/Card';
import FleetSection from '../../components/fleetSection/FleetSection';
import mission from '../../assets/mission (2).svg';
import './about.css';

const About = () => {
    return (
        <>
            <section className='about'>
                <div className='about-wrapper'>
                    <div className='title'>
                        <h2>
                            Nous sommes passionnés
                            par le tracking
                        </h2>
                    </div>
                    <div className='missionDiv'>
                        <div className='mission-right'>
                            <h3>Notre mission</h3>
                            <h4>Faciliter le tracking personnel comme professionnel afin d&rsquo;en tirer les meilleurs usages</h4>
                            <p>Nous tenons à le préciser nous ne sommes pas des GEEKS! Mais avouons notre plus grand intérêt pour l&rsquo;informatique et à l&rsquo;exploitation de l&rsquo;information pour une facilité d&rsquo;usage au quotidien</p>
                        </div>
                        <div className='mission-left'>
                            <img src={mission} alt='' />
                        </div>
                    </div>
                    <ul className='mission-steps'>
                        <Card
                            className='mission-steps-card'
                            name='Comprendre'
                            description='vos besoins'
                        />
                        <Card
                            className='mission-steps-card'
                            name='Développer'
                            description='des solutions adaptées'
                        />
                        <Card
                            className='mission-steps-card'
                            name='Servir'
                            description='nos clients'
                        />
                    </ul>
                    <div className='teamDiv'>
                        <h2>Notre Equipe</h2>
                        <p>A l&rsquo;origine, Pape, Malick et Moussa, venant du monde de l&rsquo;informatique, un besoin tout d&rsquo;abord particulier pour finir par le développement d&rsquo;un outil personnalisé qui a fini par gagner tous ses atours au bout de quelques années de développement. L&rsquo;arrivée de Pape Ibrahima a apporté la dimension internationale et l&rsquo;organisation projet nous permettant ainsi de déployer de nouvelles fonctionnalités pour nos clients. </p>
                    </div>
                </div>
            </section>
            <FleetSection />
        </>
    )
}

export default About