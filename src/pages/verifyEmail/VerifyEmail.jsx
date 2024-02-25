import { useEffect } from 'react';
import './verifyEmail.css';
import { Link, useSearchParams } from 'react-router-dom';
import { verifyEmail } from '../../features/fetchLocalApi';


function VerifyEmail() {
    const [searchParams, setSearchParams] = useSearchParams();
    const emailToken = searchParams.get('emailToken');
    useEffect(() => {
        verifyEmail(emailToken)
    }, [])
    return (
        <section className='verifyEmail'>
            <p>Nous vous confirmons que votre compte a bien été validé</p>
            <Link className='linkToLogin' to='/login'>Cliquez ici pour vous connecter</Link>
        </section>
    )
}

export default VerifyEmail