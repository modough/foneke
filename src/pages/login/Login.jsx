import { useState } from 'react';
import Input from '../../components/input/Input';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import signin from '../../assets/signin.svg';
import { loginUser } from '../../features/fetchLocalApi';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSignin = async (e) => {
        e.preventDefault()
        let loginInfos = { email, password }
        const response = await dispatch(loginUser(loginInfos))
        console.log(response)
        if (response.payload) {
            setEmail('');
            setPassword('');
            navigate('/dashboard')
        } else {
            const message = response.error.message
            message === '401' && setError('email')
            message === '402' && setError('password')
        }
    }

    return (
        <section className='login'>
            <div className='loginDiv'>
                <div className='form'>
                    <h2>Welcome Back</h2>
                    <p>Connectez-vous à votre compte et profitez d&rsquo;avantages illimités.</p>
                    <form>
                        <Input
                            className={`input-wrapper  ${error === 'email' ? 'error' : ''}`}
                            title="Email"
                            value={email}
                            id="email"
                            action={(e) => setEmail(e.target.value)}
                        />
                        <p className="error">{error === 'email' && 'Utilisateur inconnu !'}</p>
                        <Input
                            className={`input-wrapper  ${error === 'password' ? 'error' : ''}`}
                            title="Password"
                            value={password}
                            id="password"
                            action={(e) => setPassword(e.target.value)}
                        />
                        <p className="error">{error === 'password' && 'Votre mot de passe ne correspond pas !'}</p>
                        <Input
                            className="input-remember"
                            title="Remember me"
                            id="checkbox"
                        />
                        <button className="sign-in-button" onClick={handleSignin}>
                            Connecter
                        </button>

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
    )
}

export default Login