import { useState } from 'react';
import './usernameDropdown.css';
import arrowSvg from '../../assets/arrow.svg';
import passwordSvg from '../../assets/password.svg';
import logoutSvg from '../../assets/logout.svg';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';
import { useNavigate } from 'react-router-dom'

const UsernameDropdown = ({ open }) => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <section className={`${open ? 'mobile' : ''} username`}>
            <button className='usernameBtn' type="text" onClick={() => setIsOpen(!isOpen)}>
                Username
                <img className={`${!isOpen && 'down'}`} src={arrowSvg} alt="" width={15} />
            </button>
            {isOpen &&
                <div className={`disconnectDiv ${isOpen && 'isOpen'}`}>
                    <button className='usernameBtn' type="text">
                        <img src={passwordSvg} alt="" width={20} />
                        Changer de mot de passe
                    </button>
                    <button className='usernameBtn' type="text" onClick={handleLogout}>
                        <img src={logoutSvg} alt="" width={25} />
                        Deconnexion
                    </button>
                </div>}
        </section>
    )
}

export default UsernameDropdown