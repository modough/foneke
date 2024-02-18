import { useState } from 'react';
import Input from '../../components/input/Input';
import './passwordReset.css';
import reset from '../../assets/reset.svg';

const PasswordReset = () => {
    const [email, setEmail] = useState('')
    const handleReset = () => { }
    return (
        <section className='passwordReset'>
            <div className='passwordReset-wrapper'>
                <div className='formDiv'>
                    <h2>Reset Password</h2>
                    <p>Veuillez entrer votre adresse email</p>
                    <form>
                        <Input
                            className="input-wrapper"
                            title="Email"
                            value={email}
                            id="email"
                            action={(e) => setEmail(e.target.value)}
                        />
                        <button className="sign-in-button" onClick={handleReset}>
                            Connecter
                        </button>
                    </form>
                </div>
                <div className='resetImg'>
                    <img src={reset} alt='' width={500} />
                </div>
            </div>
        </section>
    )
}

export default PasswordReset