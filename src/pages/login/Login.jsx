import { useState } from 'react';
import Input from '../../components/input/Input';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import signin from '../../assets/signin.svg';

import { loginUser } from '../../features/fetchLocalApi';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { error } = useSelector((state) =>
        state.userReducer
    )
    const handleSignin = async (e) => {
        e.preventDefault()
        let loginInfos = { email, password }
        await dispatch(loginUser(loginInfos)).then((action) => {
            console.log(action)
            if (action.payload) {
                setEmail('');
                setPassword('');
                navigate('/dashboard')
            } else {
                console.log('error')
            }
        });
    }
    const handleError = () => {
        if (error === 'Wrong password !') return 'Votre mot de passe ne correspond pas !'
        if (error === 'player not found !') return 'Utilisateur inconnu !'
    }


    return (
        <>
            <section className='login'>
                <div className='loginDiv'>
                    <div className='form'>
                        <h2>Welcome Back</h2>
                        <p>Connectez-vous à votre compte et profitez d&rsquo;avantages illimités.</p>
                        <form >
                            <Input
                                className="input-wrapper"
                                title="Email"
                                value={email}
                                id="email"
                                action={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                className="input-wrapper"
                                title="Password"
                                value={password}
                                id="password"
                                action={(e) => setPassword(e.target.value)}
                            />
                            <Input
                                className="input-remember"
                                title="Remember me"
                                id="checkbox"
                            />
                            <button className="sign-in-button" onClick={handleSignin}>
                                Connecter
                            </button>
                            <div className="error-alert" role='alert'>
                                <p className="error">{handleError()}</p>
                            </div>
                            <Link to='/signup'>
                                <p className="signup-text">Pas de compte? Enregistrez-vous</p>
                            </Link>
                            <Link to='/reset-password'>
                                <p className="reset-text">Mot de passe oublié? Récuperez le ici</p>
                            </Link>
                        </form>
                    </div>
                    <div className='loginImg'>
                        <img src={signin} alt='' width={500} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login