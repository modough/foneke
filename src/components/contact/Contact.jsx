import Card from '../card/Card';
import FleetSection from '../fleetSection/FleetSection';
import './contact.css';
import phone from '../../assets/call.svg'
import mail from '../../assets/mail.svg'
import address from '../../assets/address.svg'
import HeaderFooterLayout from '../../utils/HeaderFooterLayout';

const Contact = () => {
    return (
        <HeaderFooterLayout>
            <section className='contact'>
                <ul className='contact-wrapper'>
                    <Card
                        img={mail}
                        className='contact-card'
                        name='Nous écrire'
                        description='contact@foneke.com'
                        info='Nous répondrons dans les 24 heures.'
                    />
                    <Card
                        img={phone}
                        className='contact-card'
                        name='Nous appeler'
                        description='+ 33 06 51 66 52 09'
                        info='Nous sommes disponibles du lundi au vendredi de 8h à 18h'
                    />
                    <Card
                        img={address}
                        className='contact-card'
                        name='Nos bureaux'
                        description='Villa numéro 165/K, Guédiawaye, Hamo 5,'
                        info=' Dakar (Sénégal)'
                    />
                </ul>
            </section>
            <FleetSection />
        </HeaderFooterLayout>
    )
}

export default Contact