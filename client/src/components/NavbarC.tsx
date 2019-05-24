import * as React from 'react'
import { Link } from 'react-router-dom'

const logo = require('./../assets/img/sanaEnCasaLogoNavbar.png')
const pdf1 = require('./../assets/img/BoletinSep2018.pdf')
const pdf2 = require('./../assets/img/BoletinDiciembre2018.pdf')
const pdf3 = require('./../assets/img/BoletinMarzo2019.pdf')

type State = {
    isOpen: boolean
}

type Props = {
}

export default class NavbarC extends React.Component<Props, State> {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div className='Navbar'>
                <nav id='navBackground' className='navbar navbar-expand-lg navbar-dark fixed-top'>
                    <a className='text-uppercase navTitle' href='#home'><img id='logoHeader' src={logo} alt='' /></a>
                    <button id='buttonCollapse' className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <a style={{ fontFamily: 'Montserrat' }} className='navItems text-uppercase' href='#nosotros'>Nosotros</a>
                            </li>
                            <li className='nav-item'>
                                <a style={{ fontFamily: 'Montserrat' }} className='navItems text-uppercase' href='#queHacemos'>¿Qué hacemos?</a>
                            </li>
                            <li className='nav-item'>
                                <a style={{ fontFamily: 'Montserrat' }} className='navItems text-uppercase' href='#comoAyudar'>¿Cómo ayudar?</a>
                            </li>
                            <li className='nav-item'>
                                <a style={{ fontFamily: 'Montserrat' }} className='navItems text-uppercase' href='#equipoMedico'>Equipo médico</a>
                            </li>
                            <li className='nav-item'>
                                <a style={{ fontFamily: 'Montserrat' }} className='navItems text-uppercase' href='#testimonios'>Testimonios</a>
                            </li>
                            <li className='nav-item'>
                                <a style={{ fontFamily: 'Montserrat' }} className='navItems text-uppercase' href='#contactanos'>Contáctanos</a>
                            </li>
                            <li className='nav-item'>
                                <a id='aporta' style={{ padding: '4px', fontFamily: 'Montserrat', color: 'white', fontWeight: 'bold', border: '2px solid white', borderRadius: '10px' }} className='navItems text-uppercase' href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LC2UM7J6DUZBJ&source=url'><i style={{ paddingRight: '3px' }} className='fas fa-wallet'></i>Aporta</a>
                            </li>
                            <li className='nav-item dropdown'>
                                <a style={{ fontFamily: 'Montserrat', paddingRight: '10px' }} className='navItems text-uppercase dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown'>
                                    Boletines
                                </a>
                                <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                                    <a target='_blank' className='dropdown-item' href={pdf1}>SEP 2018</a>
                                    <a target='_blank' className='dropdown-item' href={pdf2}>DIC 2018</a>
                                    <a target='_blank' className='dropdown-item' href={pdf3}>MARZO 2019</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}