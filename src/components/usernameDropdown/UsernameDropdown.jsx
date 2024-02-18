import { useState } from 'react';
import './usernameDropdown.css';
import arrowSvg from '../../assets/arrow.svg';
import passwordSvg from '../../assets/password.svg';
import logoutSvg from '../../assets/logout.svg';

const UsernameDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className='username'>
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
                    <button className='usernameBtn' type="text">
                        <img src={logoutSvg} alt="" width={25} />
                        Deconnexion
                    </button>
                </div>}
        </section>
    )
}

export default UsernameDropdown