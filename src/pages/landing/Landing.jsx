import './landing.css';
import landingImg from '../../assets/mobility.svg';
import Card from '../../components/card/Card';
import { cardData, secondCardData, stepList } from '../../data/cardData';
import tenFleet from '../../assets/10_fleet_1 3.png';
import singleFleet from '../../assets/Single_Fleet_Frame.png';
import locationSvg from '../../assets/location.svg';
import dashboard from '../../assets/dashboard.png';
import FleetSection from '../../components/fleetSection/FleetSection';



const Landing = () => {
    return (
        <>
            <section className='landingpage'>
                <section className='landing-section-one'>
                    <article className='landingpage-top'>
                        <div className='landing-left'>
                            <h2>
                                Nous aidons les organisations à suivre, analyser et améliorer les opérations de leur flotte.
                            </h2>
                            <p>
                                Nous sommes engagés auprès de vos conducteurs à travers les solutions que nous proposons pour leur garantir sécurité, transparence et confidentialité.
                            </p>
                            <button className='loginBtn'>Essayez Fonéke</button>
                        </div>
                        <div className='landing-right'>
                            <img src={landingImg} alt="landing img" />
                        </div>
                    </article>
                </section>
                <section className='landing-section-two'>
                    <article className='landingpage-middle'>
                        <h2>
                            Gérez efficacement les coûts et gagnez en visibilité sur les opérations de la flotte.
                        </h2>
                        <div className='landing-cardDiv'>
                            {cardData.map((card) => (
                                <Card
                                    key={card.name}
                                    name={card.name}
                                    description={card.description}
                                    img={card.img}
                                    className='landingpage-middle-card'
                                />
                            ))}
                        </div>
                    </article>
                </section>
                <section className='landing-section-three'>
                    <article className='landingpage-middle-second'>
                        <div className='middle-left'>
                            <div className='middle-left-top'>
                                <h2>Pourquoi choisir <span>FoNéKe</span></h2>
                                <p>La géolocalisation, notre métier. Fonéke est la solution de géolocalisation de véhicules développée par la société Fonéke sénégalaise et Africaine.</p>
                            </div>
                            <ul className='middle-left-bottom'>
                                {stepList.map((step) => (
                                    <li key={step.title}>
                                        <img src={locationSvg} alt="" width={40} />
                                        <span>
                                            <h3>{step.title}</h3>
                                            <p>{step.description}</p>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='middle-right'>
                            <img src={tenFleet} alt='' />
                        </div>
                    </article>
                </section>
                <section className='landing-section-four'>
                    <article className='landingpage-middle-third'>
                        <div className='middle-left third'>
                            <h2>Gestion de flotte en temps réel de votre organisation</h2>
                            <p>
                                Vous avez une flotte de plusieurs centaines ou milliers de véhicules et cherchez un outil capable des les localiser et sécuriser en temps réel ? Fonèke a la solution.
                                Notre plateforme APP et web  affiche les positions des systèmes de géolocalisation GPS/GPRS/Iridium en temps réel quelle que soit la taille de votre flotte. Catégorisez vos véhicules, répartissez-les dans des comptes utilisateurs à votre guise, administrez des alertes, pour rendre la gestion de flotte simple et efficace.
                            </p>
                        </div>
                        <div className='middle-right'>
                            <img src={singleFleet} alt='' />
                        </div>
                    </article>
                </section>
                <section className='landing-section-five'>
                    <article className='landingpage-middle-forth'>
                        <div className='middle-left fourth'>
                            <h2>Une interface de géolocalisation simple et intuitive</h2>
                        </div>
                        <div className='middle-right'>
                            <img src={dashboard} alt='' width='100%' />
                        </div>
                        <div className='landingpage-middle-forth-cardDiv'>
                            {secondCardData.map((card) => (
                                <Card
                                    key={card.name}
                                    name={card.name}
                                    description={card.description}
                                    img={card.img}
                                    className='landingpage-middle-forth-card'
                                />
                            ))}
                        </div>
                    </article>
                </section>
                <FleetSection />
            </section>
        </>
    )
}

export default Landing