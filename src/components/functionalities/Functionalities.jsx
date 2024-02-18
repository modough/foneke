import { useState } from 'react';
import { functionalitiesData } from '../../data/functionalitiesData';
import './functionalities.css'
import { Link } from 'react-router-dom';
import arrow from '../../assets/arrow.svg';
import fleetFrame from '../../assets/Fleet_Frame.png';
import Card from '../card/Card';
import app from '../../assets/Mobile.png';
import RealTime from '../../assets/RealTime.png';
import Reporting from '../../assets/Reporting.png';
import FleetSection from '../fleetSection/FleetSection';
import HeaderFooterLayout from '../../utils/HeaderFooterLayout';



const Functionalities = () => {
    const [open, setOpen] = useState(0)
    const toggleMenu = (index) => {
        if (open === index) {
            setOpen(null)
        } else {
            setOpen(index)
        }
    }

    return (
        <HeaderFooterLayout>
            <section className='functionalities'>
                <div className='functionalities-wrapper'>
                    <div className='title'>
                        <h2>
                            fonctionnalités
                        </h2>
                    </div>
                    <div className='functionalities-details'>
                        <div className='details-right'>
                            {functionalitiesData.map((elmt, i) => (
                                <div className={`accordion ${open === i ? 'bg' : ''}`} key={i}>
                                    <div className='accordion-top' onClick={() => toggleMenu(i)}>
                                        <div className={`round round-${i}`}></div>
                                        <button className='titleBtn' >
                                            {elmt.title}
                                        </button>
                                        <img src={arrow} className={`${open === i ? 'up' : 'down'}`} alt='' />
                                    </div>
                                    <div className={`accordion-description ${open === i ? 'open' : ''}`}>
                                        <p>{elmt.desc}</p>
                                        <button className='loginBtn'>
                                            <Link to='/login'>Se connecter</Link>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='details-left'>
                            <img src={fleetFrame} alt="" />
                        </div>
                    </div>
                    <div className='functionalies-cards'>
                        <Card img={app} description='Simple à installer' />
                        <Card img={Reporting} description='Des Analyses pertinentes' />
                        <Card img={RealTime} description='Toujours de nouvelles fonctionnalités à proposer' />
                    </div>
                </div>
            </section>
            <FleetSection />
        </HeaderFooterLayout>
    )
}

export default Functionalities