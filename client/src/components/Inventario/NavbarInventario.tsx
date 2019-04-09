import * as React from 'react'
const logo = require('./../../assets/img/logoNavbar.png')

type State = {
}

type Props = {
}

export default class NavbarInventario extends React.Component<Props, State> {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <nav id='navBackground' className='navbar navbar-expand-lg navbar-dark'>
                    <a className='text-uppercase navTitle' href='#home'><img id='logoHeader' src={ logo } alt='' /></a>
                    <button id='buttonCollapse' className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <a style={{ fontFamily: 'Montserrat' }} className='navItems text-uppercase' href='#'>Cerrar Sesión</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}