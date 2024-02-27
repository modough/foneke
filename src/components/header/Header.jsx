import './header.css';
import logo from '../../assets/Foneke.png'
import logoName from '../../assets/FonekeLogo.png'
import burger from '../../assets/burger.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                </div>
                <div className='headerBtns-mobile'>
                    <img className='burger' src={burger} alt='' width={40} onClick={handleClick} />
                    {isOpen &&
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
                        </ul>
                    }
                </div>
            </div>
        </section>
    )
}

export default Header