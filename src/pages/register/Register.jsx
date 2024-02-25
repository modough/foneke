import { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HeaderFooterLayout from '../../utils/HeaderFooterLayout';
import Input from '../../components/input/Input';
import signup from '../../assets/signup.svg';
import { registerUser } from '../../features/fetchLocalApi';
import Modal from '../../components/modal/Modal';

const Register = () => {
    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault()
        let registerInfos = { email, password, pseudo, confirmPassword }
        await dispatch(registerUser(registerInfos)).then((action) => {
            console.log(action)
            if (action.payload.body) {
                setPseudo('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setShowModal(true);
            } else {
                console.log('error')
            }
        });

    }
    return (
        <HeaderFooterLayout>
            <section className='register'>
                <div className='registerDiv'>
                    <div className='form'>
                        <h2>Bienvenue</h2>
                        <p>Enregistrez-vous et profitez d&rsquo;avantages illimités.</p>
                        <form >
                            <Input
                                className="input-wrapper"
                                title="Pseudo"
                                value={pseudo}
                                id="pseudo"
                                action={(e) => setPseudo(e.target.value)}
                            />
                            <Input
                                className="input-wrapper"
                                title="Email"
                                value={email}
                                id="email"
                                action={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                className="input-wrapper"
                                title="mot de passe"
                                value={password}
                                id="password"
                                action={(e) => setPassword(e.target.value)}
                            />
                            <Input
                                className="input-wrapper"
                                title="Reconfirmer mot de passe"
                                value={password}
                                id="password"
                                action={(e) => setPassword(e.target.value)}
                            />

                            <button className="sign-in-button" onClick={handleSignup}>
                                S&apos;inscrire
                            </button>
                            <div className="error-alert" role='alert'>
                                {error ? <p className="error">{error}</p> : ''}
                            </div>
                            <Link to='/login'>
                                <p className="sign-in-text">Déjà inscrit? Connectez-vous</p>
                            </Link>

                        </form>
                    </div>
                    <div className='registerImg'>
                        <img src={signup} alt='' width={500} />
                    </div>
                </div>
                {showModal &&
                    <Modal
                        action={() => {
                            setShowModal(false);
                            navigate('/login');
                        }}
                        text="Merci ! Veuillez verifier votre adresse email pour valider votre inscription"
                    />
                }
            </section>
        </HeaderFooterLayout>
    )
}


export default Register