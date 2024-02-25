import './header.css';
import logo from '../../assets/Foneke.png'
import logoName from '../../assets/FonekeLogo.png'
import burger from '../../assets/burger.svg'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UsernameDropdown from '../usernameDropdown/UsernameDropdown';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const path = typeof window !== 'undefined' && window.location.pathname;

    useEffect(() => {
        path.includes('/admin');
    }, [path])
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
                {!path.includes('/admin') ?
                    <div className='headerBtns'>
                        <ul className='headerList'>
                            <Link to='/'>
                                <li>accueil</li>
                            </Link>
                            <Link to='/how-it-works'>
                                <li>Comment ça marche</li>
                            </Link>
                            <Link to='/functionalities'>
                                <li>fonctionnalités</li>
                            </Link>

                            <Link to='/about'>
                                <li>A propos</li>
                            </Link>
                            <Link to='/contact'>
                                <li>contact</li>
                            </Link>
                        </ul>
                        <button className='loginBtn'>
                            <Link to='/login'>Se connecter</Link>
                        </button>
                    </div> :
                    <div className='headerBtns dashboard-headerBtns'>
                        <ul className='headerList dashboard-headerList'>
                            <Link to='/admin/dashboard'>
                                <li>Tableau de bord</li>
                            </Link>
                            <Link to='/admin/entreprise'>
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
                }
                <div className='headerBtns-mobile'>
                    <img className='burger' src={burger} alt='' width={40} onClick={handleClick} />
                    {!path.includes('/admin') ?
                        isOpen &&
                        <ul className='headerList mobile'>
                            <Link to='/'>
                                <li onClick={handleClick}>accueil</li>
                            </Link>
                            <Link to='/how-it-works'>
                                <li onClick={handleClick}>Comment ça marche</li>
                            </Link>
                            <Link to='/functionalities'>
                                <li onClick={handleClick}>fonctionnalités</li>
                            </Link>
                            <Link to='/about'>
                                <li onClick={handleClick}>A propos</li>
                            </Link>
                            <Link to='/contact'>
                                <li onClick={handleClick}>contact</li>
                            </Link>
                            <Link to='/login'>
                                <button
                                    onClick={handleClick}
                                    className='loginBtn'
                                >
                                    Se connecter
                                </button>
                            </Link>
                        </ul> :
                        isOpen &&
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
                            <p>User Name</p>
                        </ul>
                    }
                </div>
            </div>
        </section>
    )
}

export default Header