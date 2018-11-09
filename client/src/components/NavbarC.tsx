import * as React from 'react'

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
                    <a className='text-uppercase navItem' href='#top'>sana en casa</a>
                    <button id='buttonCollapse' className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <a style={{fontFamily: 'Montserrat'}} className='navItems text-uppercase' href='#blockOne'>Nosotros</a>
                            </li>
                            <li className='nav-item'>
                                <a style={{fontFamily: 'Montserrat'}} className='navItems text-uppercase' href='#blockTwo'>¿Qué hacemos?</a>
                            </li>
                            <li className='nav-item'>
                                <a style={{fontFamily: 'Montserrat'}} className='navItems text-uppercase' href='#block3'>¿Cómo ayudar?</a>
                            </li>
                            <li className='nav-item'>
                                <a style={{fontFamily: 'Montserrat'}} className='navItems text-uppercase' href='#block3'>Equipo médico</a>
                            </li>
                            <li className='nav-item'>
                                <a style={{fontFamily: 'Montserrat'}} className='navItems text-uppercase' href='#block3'>Testimonios</a>
                            </li>
                            <li className='nav-item'>
                                <a style={{fontFamily: 'Montserrat'}} className='navItems text-uppercase' href='#block3'>Contáctanos</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}