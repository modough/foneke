import './adminHeader.css';
import logo from '../../assets/Foneke.png'
import logoName from '../../assets/FonekeLogo.png'
import burger from '../../assets/burger.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import UsernameDropdown from '../usernameDropdown/UsernameDropdown';

const AdminHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        <section className='header'>
            <div className='header-wrapper'>
                <Link to='/' className='logoDiv'>
                    <img src={logoName} alt="site logo" />
                    <img src={logo} alt="site logo" width={30} />
                </Link>

                <div className='headerBtns dashboard-headerBtns'>
                    <ul className='headerList dashboard-headerList'>
                        <Link to='/dashboard'>
                            <li>Tableau de bord</li>
                        </Link>
                        <Link to='/entreprise'>
                            <li>Entreprise</li>
                        </Link>
                        <li>Dispositifs</li>
                        <li>Rôle</li>
                    </ul>
                    <div className='select'>
                        🌐
                        <select >
                            <option>Français</option>
                            <option>English</option>
                        </select>
                    </div>
                    <img className='avatar' src='' alt='' />
                    <UsernameDropdown />
                </div>
                <div className='headerBtns-mobile'>
                    <img className='burger' src={burger} alt='' width={40} onClick={handleClick} />
                    {isOpen &&
                        <ul className='headerList dashboard-headerList mobile'>
                            <li>Tableau de bord</li>
                            <li>Entreprise</li>
                            <li>Dispositifs</li>
                            <li>Rôle</li>
                            <select>
                                <option>Français</option>
                                <option>English</option>
                            </select>
                            <img src='' className='avatar' alt='' />
                            <UsernameDropdown open={isOpen} />
                        </ul>}

                </div>
            </div>
        </section>
    )
}

export default AdminHeader