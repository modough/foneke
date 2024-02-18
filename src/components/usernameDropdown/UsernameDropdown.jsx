import { useState } from 'react';
import './usernameDropdown.css';
import arrow from '../../assets/arrow.svg';

const UsernameDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section className='username'>
            <button className='usernameBtn' type="text" onClick={() => setIsOpen(!isOpen)}>
                Username
                <img className={`${!isOpen && 'down'}`} src={arrow} alt="" width={15} />
            </button>
            {isOpen &&
                <div className={`disconnectDiv ${isOpen && 'isOpen'}`}>
                    <button className='usernameBtn' type="text">Changer de mot de passe</button>
                    <button className='usernameBtn' type="text">Deconnexion</button>
                </div>}
        </section>
    )
}

export default UsernameDropdown