import * as React from 'react'
import { Link } from 'react-router-dom'
const logo = require('./../../assets/img/logoNavbar.png')

type State = {
    loggedIn: boolean
}

type Props = {
}

export default class NavbarInventario extends React.Component<Props, State> {


    constructor(props) {
        super(props)
        this.state = {
            loggedIn: false
        }
    }

    async componentDidMount() {
        if (localStorage.getItem('username') === null) {
            await this.setState({
                loggedIn: false
            })
            return
        }
        const username = localStorage.getItem('username')
        const password = localStorage.getItem('loggedIn')
        const response = await fetch(`http://localhost:3000/verifyLogin/${username}/${password}`)
        const json = await response.json()
        await this.setState({
            loggedIn: json
        })
    }

    cerrarSesion = (event) => {
        localStorage.clear()
        window.location.reload(true)
    }

    render() {
        return (
            <div>
                <nav id='navBackground' className='navbar navbar-expand-lg navbar-dark'>
                    <Link style={{ color: 'black', fontSize: '28px' }} className='navItem nav-link' to='/inventario'><img id='logoHeader' src={logo} alt='' /></Link>
                    <button id='buttonCollapse' className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <li className='nav-item dropdown'>
                        <a style={{ fontFamily: 'Montserrat', paddingRight: '10px' }} className='navItems text-uppercase dropdown-toggle' href='#' id='navbarDropdown' role='button' data-toggle='dropdown'>
                            Catalogos Administrativos
                        </a>
                        <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
                            <li className='dropdown-item dropdown-submenu'>
                                <Link style={{ color: 'black', fontSize: '28px' }} className='navItem nav-link' to='/pacientes'><h6>Pacientes</h6></Link>
                            </li>
                            <li className='dropdown-item dropdown-submenu'>
                                <Link style={{ color: 'black', fontSize: '28px' }} className='navItem nav-link' to='/equipoMedico'><h6>Equipo Medico</h6></Link>
                            </li>
                        </div>
                    </li>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                {
                                    this.state.loggedIn ?
                                        <button onClick={this.cerrarSesion} style={{ fontFamily: 'Montserrat', backgroundColor: 'none' }} className='navItems text-uppercase btn btn-link'>Cerrar Sesión</button>
                                        :
                                        <Link style={{ color: 'white', fontSize: '28px', }} className='' to='/loginInventario'><h4>Log in</h4></Link>
                                }
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}