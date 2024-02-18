import { Link } from 'react-router-dom';
import './footer.css';
import insta from '../../assets/inst.svg'
import fb from '../../assets/fb.svg'
import twitter from '../../assets/x.svg'

const Footer = () => {
    const path = typeof window !== 'undefined' && window.location.pathname;
    console.log(path)
    // Check if the current location is the dashboard page
    const isDashboardPage = path === '/dashboard';
    return (
        !isDashboardPage && <section className='footer'>
            <div className='footerDiv'>
                <div className='links'>
                    <Link to='/terms-and-conditions'>Termes et conditions |</Link>
                    <Link to='/privacy-policy'> Politique de confidentialité |</Link>
                    <Link to='/legales'> Mentions légales</Link>
                    <p>Copyrights © 2024 Foneke. Tous droits réservés.</p>
                </div>
                <div className='social'>
                    <img src={fb} alt='' width={40} />
                    <img src={twitter} alt='' width={40} />
                    <img src={insta} alt='' width={40} />
                </div>
            </div>
        </section>
    )
}

export default Footer