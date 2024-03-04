import { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../components/input/Input';
import signup from '../../assets/signup.svg';

import Modal from '../../components/modal/Modal';

const Register = () => {
    const [pseudo, setPseudo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showModal, setShowModal] = useState(false);

    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        const registerInfos = { email, password, pseudo, confirmPassword };
        try {
            const response = await fetch("http://localhost:3001/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(registerInfos),
            });
            const result = await response.json();
            console.log(result);
            if (response.ok) {
                setPseudo('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setShowModal(true);
            } else {
                const errorMessage = result.message;
                setError(errorMessage);
            }
        } catch (error) {
            console.error('An error occurred during signup:', error);
            // Handle any unexpected errors here
        }
    };
    const handleError = () => {
        switch (error) {
            case 'shorter than the minimum allowed length':
                return 'Pseudo trop court (min 3 lettres) !';
            case 'user already exists':
                return 'Utilisateur déjà existant !';
            case 'all fields are required':
                return 'Veuillez remplir tous les champs !';
            case 'password and confirm password does not match':
                return 'Les mots de passe ne correspondent pas !';
            case 'Must be a valid email':
                return 'Veuillez mettre un email valide !';
            case 'Must be a strong password':
                return 'Veuillez mettre un mot de passe sécurisé (eg: rajouter majuscules et caractéres speciaux) !';
            default:
                return '';
        }
    };
    return (
        <section className='register' >
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
                            value={confirmPassword}
                            id="password"
                            action={(e) => setConfirmPassword(e.target.value)}
                        />

                        <button className="sign-in-button" onClick={handleSignup}>
                            S&apos;inscrire
                        </button>
                        <div className="error-alert" role='alert'>
                            <p className="error">{handleError()}</p>
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

    )
}


export default Register