import * as React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

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
            <div>
                <Navbar style={{ backgroundColor: 'rgba(0,0,0,.1)' }} light expand='md'>
                    <NavbarBrand style={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#2905a1' }}  href='/'>SANA EN CASA</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <NavLink className='navbarItem' style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px' }} href='/components/'>NOSOTROS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navbarItem' style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px' }} href='https://github.com/reactstrap/reactstrap'>QUE HACEMOS</NavLink>
                            </NavItem>
                                <NavLink className='navbarItem' style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px' }} href='https://github.com/reactstrap/reactstrap'>COMO AYUDAR</NavLink>
                            <NavItem>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navbarItem' style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px' }} href='https://github.com/reactstrap/reactstrap'>EQUIPOS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navbarItem' style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px' }} href='https://github.com/reactstrap/reactstrap'>TESTIMONIOS</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='navbarItem' style={{ fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '15px' }} href='https://github.com/reactstrap/reactstrap'>CONTACTO</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}