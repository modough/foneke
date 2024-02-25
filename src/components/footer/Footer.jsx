import { Link } from 'react-router-dom';
import './footer.css';
import insta from '../../assets/inst.svg'
import fb from '../../assets/fb.svg'
import twitter from '../../assets/x.svg'
import { useSelector } from 'react-redux';

const Footer = () => {
    const { token } = useSelector((state) =>
        state.userReducer
    )
    return (
        !token &&
        <section className='footer'>
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